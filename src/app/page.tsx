'use client';

import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';

export default function HomePage() {
  return (
    <main className='bg-zinc-900 text-white'>
      <section className='bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <div className='space-y-2 relative'>
            <div className='absolute shadow-lg animate-bounce shadow-zinc-900 bottom-full right-0 bg-zinc-800 rounded-xl h-10 px-4 flex items-center'>
              <p>Coming Soon</p>
              <svg
                width='16'
                height='12'
                viewBox='0 0 24 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute -bottom-2 right-1/2 translate-x-1/2 fill-zinc-800'
              >
                <path d='M12 12L0 0H24L12 12Z' />
              </svg>
            </div>
            <h1 className='mt-4 text-4xl font-semibold md:text-6xl'>
              softwareengineer.id
            </h1>
            <p className='text-sm md:text-lg text-zinc-400'>
              Portfolio of Indonesian Software Engineers
            </p>
          </div>

          <div className='flex gap-4 justify-center flex-wrap mt-6 md:mt-8'>
            <ArrowLink
              as={ButtonLink}
              variant='light'
              className='inline-flex items-center rounded-xl shrink-0'
              href='https://ggl.link/se-indonesia'
            >
              Apply for First Screening
            </ArrowLink>
            <ArrowLink
              as={ButtonLink}
              variant='light'
              className='inline-flex items-center rounded-xl shrink-0'
              href='https://softwareengineerdotid.substack.com/subscribe'
            >
              Get notified when we launch
            </ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
