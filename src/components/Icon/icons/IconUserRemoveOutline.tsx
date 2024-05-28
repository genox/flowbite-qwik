import { IconProps } from '@qwikest/icons'
import { FlUserRemoveOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconUserRemoveOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
    <span class={classNames}>
      <QwikestIcon {...props} />
    </span>
  )
})