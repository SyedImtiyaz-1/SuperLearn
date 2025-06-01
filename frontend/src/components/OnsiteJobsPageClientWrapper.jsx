'use client';

import dynamic from "next/dynamic";
import { Suspense } from 'react';
import SearchParamsWrapper from './SearchParamsWrapper';

const JobsPageClient = dynamic(() => import("../pages/JobsPage.jsx"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

const OnsiteJobsPageClientWrapper = () => {
  return (
    <SearchParamsWrapper defaultType="onsite">
      <JobsPageClient />
    </SearchParamsWrapper>
  );
};

export default OnsiteJobsPageClientWrapper; 