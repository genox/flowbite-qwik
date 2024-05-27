import { IconProps } from '@qwikest/icons'
import { FlAnnotationSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconAnnotationSolid = component$((props: IconProps) => {
  return <QwikestIcon {...props} />
})