/**
 * title: Pills badge
 * description: Use this example to make the corners even more rounded like pills for the badge component.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge pills content="Default" />
      <Badge pills type="dark" content="Dark" />
      <Badge pills type="red" content="Red" />
      <Badge pills type="green" content="Green" />
      <Badge pills type="yellow" content="Yellow" />
      <Badge pills type="indigo" content="Indigo" />
      <Badge pills type="purple" content="Purple" />
      <Badge pills type="pink" content="Pink" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
