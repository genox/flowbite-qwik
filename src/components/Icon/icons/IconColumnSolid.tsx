import { IconProps } from '@qwikest/icons'
import { FlColumnSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconColumnSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})