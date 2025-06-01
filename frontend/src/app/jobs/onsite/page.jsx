import { Suspense } from 'react';
import OnsiteJobsPageClientWrapper from '../../../components/OnsiteJobsPageClientWrapper';

export default function OnsiteJobsServerPage() {
  return (
    <Suspense fallback={<div>Loading Onsite Jobs...</div>}>
      <OnsiteJobsPageClientWrapper />
    </Suspense>
  );
} 