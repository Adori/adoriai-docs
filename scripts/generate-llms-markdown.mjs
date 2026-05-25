import { promises as fs } from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const docsDir = path.join(rootDir, 'docs')
const outputDir = path.join(rootDir, 'static', 'llms.txt')

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

async function walkMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return walkMarkdownFiles(fullPath)
      }
      if (entry.isFile() && entry.name.endsWith('.md')) {
        return [fullPath]
      }
      return []
    }),
  )
  return files.flat()
}

function parseFrontmatter(content) {
  const match = content.match(FRONTMATTER_REGEX)
  if (!match) {
    return { frontmatter: {}, body: content }
  }

  const fields = {}
  for (const rawLine of match[1].split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()
    if (!key) continue
    fields[key] = value.replace(/^['"]|['"]$/g, '')
  }

  return {
    frontmatter: fields,
    body: content.replace(FRONTMATTER_REGEX, ''),
  }
}

function filePathToRoute(filePath) {
  const rel = path.relative(docsDir, filePath).replace(/\\/g, '/')
  const withoutExt = rel.replace(/\.md$/, '')
  return `/${withoutExt}`
}

function routeToOutputPath(route) {
  if (route === '/') {
    return path.join(outputDir, 'index.md')
  }

  const cleaned = route.replace(/^\/+/, '').replace(/\/+$/, '')
  return path.join(outputDir, `${cleaned}.md`)
}

async function main() {
  await fs.rm(outputDir, { recursive: true, force: true })
  await fs.mkdir(outputDir, { recursive: true })

  const markdownFiles = await walkMarkdownFiles(docsDir)
  const generatedPaths = []

  for (const filePath of markdownFiles) {
    const raw = await fs.readFile(filePath, 'utf8')
    const { frontmatter, body } = parseFrontmatter(raw)

    const derivedRoute = filePathToRoute(filePath)
    const route = frontmatter.slug || derivedRoute
    const outputPath = routeToOutputPath(route)

    await fs.mkdir(path.dirname(outputPath), { recursive: true })
    await fs.writeFile(outputPath, body.trim() + '\n', 'utf8')

    generatedPaths.push(route === '/' ? '/llms.txt/index.md' : `/llms.txt${route}.md`)
  }

  generatedPaths.sort((a, b) => a.localeCompare(b))

  const llmsIndex = [
    '# Adori AI Docs (Markdown for Agents)',
    '',
    'Machine-readable markdown mirrors of the documentation pages.',
    '',
    ...generatedPaths.map((p) => `- ${p}`),
    '',
  ].join('\n')

  await fs.writeFile(path.join(outputDir, 'README.md'), llmsIndex, 'utf8')
  console.log(`Generated ${generatedPaths.length} LLM markdown pages in static/llms.txt`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
