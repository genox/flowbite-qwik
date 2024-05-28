import { IconProps } from '@qwikest/icons'
import { FlPaperClipOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconPaperClipOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
    <span class={classNames}>
      <QwikestIcon {...props} />
    </span>
  )
})