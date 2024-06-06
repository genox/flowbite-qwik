/**
 * title: Badge with Icon only
 * description: You can also use badge with only icon.
 */
import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Badge, IconRocketOutline } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge icon={IconRocketOutline} size="sm" />
      <Badge type="dark" icon={IconRocketOutline} size="sm" />
      <Badge type="green" icon={IconRocketOutline} size="sm" />
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}