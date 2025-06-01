"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchParamsContent({ children, defaultType }) {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || defaultType;
  
  // Pass the type to children if they accept props
  return typeof children === 'function' ? children({ type }) : children;
}

export default function SearchParamsWrapper({ children, defaultType }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsContent defaultType={defaultType}>
        {children}
      </SearchParamsContent>
    </Suspense>
  );
} 