'use client';

import dynamic from 'next/dynamic';

const BackgroundAnimation = dynamic(
  () => import('./BackgroundAnimation'),
  { ssr: false }
);

export default function ClientAnimation() {
  return <BackgroundAnimation />;
}
