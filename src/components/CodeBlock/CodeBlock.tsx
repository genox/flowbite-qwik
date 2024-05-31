import { $, component$, useComputed$, useSignal, useStyles$ } from '@builder.io/qwik'
import rehypeHighlight from 'rehype-highlight'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import styles from './code-block.css?inline'
import { IconCopySolid } from '../Icon'

type CodeBlockProps = { content: string; language: string; light?: boolean }

async function highlight(content: string, language: string) {
  // Escape angle brackets using HTML character entities
  const escapedContent = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(`<pre><code class="language-${language}">${escapedContent}</code></pre>`)

  return String(file)
}

export const CodeBlock = component$<CodeBlockProps>(({ content, language }) => {
  useStyles$(styles)

  const highlightedContent = useComputed$(async () => {
    if (!content) return ''
    return await highlight(content, language)
  })

  const copyLabel = useSignal('Copy')

  const copy$ = $(() => {
    navigator.clipboard.writeText(content)
    copyLabel.value = 'Copied!'
    setTimeout(() => {
      copyLabel.value = 'Copy'
    }, 2000)
  })

  return (
    <div class="border-gray-200 border-y border-x dark:border-gray-600 rounded-b-lg pb-2">
      <div class="flex text-sm font-medium text-center justify-between text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 border-b">
        <div class="inline-block p-2 px-3 text-gray-800 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 border-r border-gray-200 dark:text-white dark:bg-gray-800 dark:border-gray-600">
          {language}
        </div>
        <div class="flex justify-end">
          <button
            onClick$={copy$}
            class="flex items-center px-3 py-2 gap-1 text-xs font-medium text-gray-600 bg-gray-100 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-700 dark:hover:text-white copy-to-clipboard-button"
          >
            <IconCopySolid />
            <span class="copy-text">{copyLabel}</span>
          </button>
        </div>
      </div>
      <pre dangerouslySetInnerHTML={highlightedContent.value} />
    </div>
  )
})
