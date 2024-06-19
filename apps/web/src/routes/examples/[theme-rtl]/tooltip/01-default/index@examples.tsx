/**
 * title: Default tooltip
 * description: Wrap the trigger component with the <Tooltip> component and pass the tooltip content to the content prop of the <Tooltip> component.
 * height: 200
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Button, Tooltip } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex text-center justify-center p-8">
      <Tooltip style="dark" trigger={<Button>Hover me</Button>} content={<div>This is a tooltip</div>} />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}