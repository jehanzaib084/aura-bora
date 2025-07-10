'use client'

import Image from 'next/image'

export default function CustomTestimonialGrid () {
  return (
    <div className='px-4 py-[5rem] border-t-[1.5]'>
      <h3 className='text-[3rem] lg:text-[5rem] text-center lg:text-left font-gliker text-[#FF8179] uppercase text-stroke drop-shadow-stroke-2'>
        They Like Us
      </h3>
      {/* Responsive grid: stacked on mobile/tablet, custom grid on lg+ */}
      <div
        className='
        grid grid-cols-1 gap-4 w-full h-auto
        lg:grid-cols-[28%_28%_auto] lg:h-[90dvh]'
        >
        {/* Column 1 */}
        <div
          className='
          flex flex-col w-full
          lg:h-full
        '
        >
          {/* Top (30%) */}
          <div
            className='
            w-full rounded-xl border-2 border-black bg-white p-4 flex flex-col justify-between mb-4
            lg:h-[30%]
          '
          >
            <p className='text-sm xl:text-base mb-2'>
              “This sparkling water gets everything right.”
            </p>
            <span className='font-extrabold text-xl'>Forbes</span>
          </div>
          {/* Bottom (70%) */}
          <div
            className='
            w-full rounded-xl overflow-hidden border-2 border-black relative
            aspect-[4/3] lg:aspect-auto
            lg:h-[70%]
          '
          >
            <Image
              src='/testi-left.jpg'
              alt=''
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 30vw'
              priority
            />
          </div>
        </div>

        {/* Column 2 */}
        <div
          className='
          flex flex-col w-full
          lg:h-full
        '
        >
          {/* Top (70%) */}
          <div
            className='
            w-full rounded-xl overflow-hidden border-2 border-black relative mb-4
            aspect-[4/3] lg:aspect-auto
            lg:h-[70%]
          '
          >
            <Image
              src='/testi-center.jpg'
              alt=''
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 30vw'
              priority
            />
          </div>
          {/* Bottom (30%) */}
          <div
            className='
            w-full rounded-xl border-2 border-black bg-white p-4 flex flex-col justify-between
            lg:h-[30%]
          '
          >
            <p className='text-sm xl:text-base mb-2'>
              “No artificial sweeteners of any kind? That’s fantastic!”
            </p>
            <span className='font-extrabold text-lg'>MR. WONDERFUL</span>
          </div>
        </div>

        {/* Column 3 */}
        <div
          className='
          flex flex-col w-full
          lg:h-full
        '
        >
          {/* Top (30%) */}
          <div
            className='
            w-full rounded-xl border-2 border-black bg-white p-4 flex flex-col justify-between mb-4
            lg:h-[30%]
          '
          >
            <p className='text-sm xl:text-base font-mono mb-2'>
              “More delicious than ANY other brand I have tried. No gross fake,
              sweet taste. Perfect balance and really fun flavors.”
            </p>
            <span className='font-extrabold text-md'>VIENNA F.</span>
          </div>
          {/* Bottom (70%) */}
          <div
            className='
  w-full flex flex-col gap-4
  aspect-[4/3] lg:aspect-auto
  lg:grid lg:grid-cols-[30%_auto] lg:flex-none lg:h-[70%]
'
          >
            {/* Left (30% width) */}
            <div className='rounded-xl overflow-hidden border-2 border-black relative w-full aspect-[4/3] lg:aspect-auto'>
              <Image
                src='/testi-right-1.jpg'
                alt=''
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 12vw'
              />
            </div>
            {/* Right (70% width) */}
            <div className='rounded-xl overflow-hidden border-2 border-black relative w-full aspect-[4/3] lg:aspect-auto'>
              <Image
                src='/testi-right-2.jpg'
                alt=''
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 28vw'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
