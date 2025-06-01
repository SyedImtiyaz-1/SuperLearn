'use client';

import dynamic from "next/dynamic";

const NotFoundPageClient = dynamic(() => import("../pages/NotFoundPage"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

const NotFoundPageClientWrapper = () => {
  return <NotFoundPageClient />;
};

export default NotFoundPageClientWrapper; 