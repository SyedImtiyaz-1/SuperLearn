'use client';

import dynamic from 'next/dynamic';
import SearchParamsWrapper from '../../components/SearchParamsWrapper';

const JobsPageClient = dynamic(() => import('../../pages/JobsPage'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

export default function JobsPageWrapper() {
  return (
    <SearchParamsWrapper>
      <JobsPageClient />
    </SearchParamsWrapper>
  );
} 