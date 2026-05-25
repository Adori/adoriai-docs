import React, {useMemo, useState} from 'react'
import {useLocation} from '@docusaurus/router'
import OriginalLayout from '@theme-original/DocItem/Layout'

function getMarkdownPath(pathname) {
  const cleanPath = pathname.split('#')[0].split('?')[0]
  const normalized = cleanPath.replace(/\/+$/, '') || '/'

  if (normalized === '/') {
    return '/llms.txt/index.md'
  }

  return `/llms.txt${normalized}.md`
}

export default function DocItemLayout(props) {
  const location = useLocation()
  const [copyState, setCopyState] = useState('idle')
  const markdownPath = useMemo(
    () => getMarkdownPath(location.pathname),
    [location.pathname],
  )

  const handleCopyMarkdown = async () => {
    try {
      const response = await fetch(markdownPath, {cache: 'no-store'})
      if (!response.ok) {
        throw new Error(`Unable to fetch markdown: ${response.status}`)
      }

      const markdown = await response.text()
      await navigator.clipboard.writeText(markdown)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 1800)
    } catch (error) {
      console.error(error)
      setCopyState('error')
      window.setTimeout(() => setCopyState('idle'), 2200)
    }
  }

  const buttonLabel =
    copyState === 'copied'
      ? 'Copied!'
      : copyState === 'error'
        ? 'Copy failed'
        : 'Copy Markdown'

  const {children, ...rest} = props

  return (
    <OriginalLayout {...rest}>
      <div className="llms-copy-markdown-row">
        <button
          type="button"
          className="button button--secondary button--sm llms-copy-markdown-button"
          onClick={handleCopyMarkdown}
          aria-label="Copy markdown for this page"
        >
          {buttonLabel}
        </button>
      </div>
      {children}
    </OriginalLayout>
  )
}
