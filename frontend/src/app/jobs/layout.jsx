import { Suspense } from 'react';
import SearchParamsWrapper from '../../components/SearchParamsWrapper';

export default function JobsLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading jobs...</div>}>
      <SearchParamsWrapper>
        {children}
      </SearchParamsWrapper>
    </Suspense>
  );
} 