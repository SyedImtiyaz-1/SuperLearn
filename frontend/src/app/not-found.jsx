import { Suspense } from 'react';
import NotFoundPageClient from '../pages/NotFoundPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundPageClient />
    </Suspense>
  );
} 