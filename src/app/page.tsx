'use client';

import * as React from 'react';
import '@/lib/env';

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4'>softwareengineer.id</h1>
          <p className='mt-2 text-sm text-neutral-800'>
            Portfolio of Indonesian Software Engineers, coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}
