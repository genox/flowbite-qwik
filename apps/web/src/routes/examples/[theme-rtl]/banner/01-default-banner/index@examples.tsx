/**
 * title: Default sticky banner
 * description: Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.
 * height: 450
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Banner, BannerCollapseButton } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { IconCloseOutline, IconShareNodesSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  return (
    <div class="h-[440px]">
      <Banner sticky="top">
        <div class="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div class="mx-auto flex items-center">
            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <IconShareNodesSolid class="mr-4 h-4 w-4" />
              <span class="[&_p]:inline">
                New brand identity has been launched for the&nbsp;
                <a
                  href="https://flowbite.com"
                  class="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
                >
                  Flowbite Library
                </a>
              </span>
            </p>
          </div>
          <BannerCollapseButton color="light" class="border-0 bg-transparent text-gray-500 dark:text-gray-400">
            <IconCloseOutline class="h-4 w-4" />
          </BannerCollapseButton>
        </div>
      </Banner>
      <div class="max-w-lg mx-auto">
        <div role="status" class="my-7 animate-pulse">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="max-w-lg mb-7 animate-pulse">
          <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded dark:bg-gray-700">
            <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
            </svg>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="my-6 animate-pulse">
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
        <div role="status" class="my-6 animate-pulse">
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
