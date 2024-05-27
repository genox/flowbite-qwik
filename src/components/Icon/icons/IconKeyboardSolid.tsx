import { IconProps } from '@qwikest/icons'
import { FlKeyboardSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconKeyboardSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})