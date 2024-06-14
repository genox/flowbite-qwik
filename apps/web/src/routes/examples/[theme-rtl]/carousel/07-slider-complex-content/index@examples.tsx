/**
 * title: Slider complex content
 * description: Instead of images or simple texte, we can use any component we need
 * height: 600
 */

import { component$ } from '@builder.io/qwik'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Card, Carousel, CarouselSlice } from 'flowbite-qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'

export default component$(() => {
  return (
    <div class="h-96">
      <Carousel>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <Card href="#" class="max-w-sm">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
            <Card href="#" class="max-w-sm">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crystal Clear Oasis</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </CarouselSlice>
        <CarouselSlice>
          <div class="flex h-full items-center justify-center bg-rose-400 dark:bg-rose-700 dark:text-white">
            <Card href="#" class="max-w-sm">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lost in the Sands</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </CarouselSlice>
      </Carousel>
    </div>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}