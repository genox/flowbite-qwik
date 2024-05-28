import { IconProps } from '@qwikest/icons'
import { FlStoreOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconStoreOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
    <span class={classNames}>
      <QwikestIcon {...props} />
    </span>
  )
})