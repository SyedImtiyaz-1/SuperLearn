'use client';
import dynamic from 'next/dynamic';

const InternshipsPageClient = dynamic(() => import('../../pages/InternshipsPage'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

export default InternshipsPageClient; 