import JobsPageWrapper from './JobsPageClient';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // revalidate every hour

export default function JobsPage() {
  return <JobsPageWrapper />;
} 