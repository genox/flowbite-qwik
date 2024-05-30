import { FunctionComponent, PropsOf } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { getChild } from '~/utils/getChild'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarItem } from './SidebarItem'
import { SidebarCollapse } from './SidebarCollapse'

export const Sidebar: FunctionComponent<PropsOf<'aside'>> = ({ children, class: classNames, ...attrs }) => {
  const sidebarItemGroups = []
  getChild(children, [
    {
      component: SidebarItemGroup,
      foundComponentCallback: (child, index) => {
        child.props.border = index > 0

        sidebarItemGroups.push(child)
      },
    },
    {
      component: SidebarItem,
      foundComponentCallback: () => {
        console.warn('SidebarItem must be wrapped in SidebarItemGroup')
      },
    },

    {
      component: SidebarCollapse,
      foundComponentCallback: () => {
        console.warn('SidebarCollapse must be wrapped in SidebarItemGroup')
      },
    },
  ])

  return (
    <aside class={twMerge('top-0 left-0 z-40 w-64 h-full', clsx(classNames))} aria-label="Sidebar" {...attrs}>
      <nav class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-900">{children}</nav>
    </aside>
  )
}