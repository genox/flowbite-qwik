/**
 * title: Large badge
 * description: Use size prop to change the size of the badge component.
 */
import { component$ } from '@builder.io/qwik'
import { Badge } from '~/components/Badge/Badge'

export default component$(() => {
  return (
    <div class="flex gap-2 flex-wrap p-6">
      <Badge size="xs" content="Default" />
      <Badge size="xs" type="dark" content="Dark" />
      <Badge size="xs" type="red" content="Red" />
      <Badge size="sm" type="green" content="Green" />
      <Badge size="sm" type="yellow" content="Yellow" />
      <Badge size="sm" type="indigo" content="Indigo" />
      <Badge size="sm" type="purple" content="Purple" />
      <Badge size="sm" type="pink" content="Pink" />
    </div>
  )
})
