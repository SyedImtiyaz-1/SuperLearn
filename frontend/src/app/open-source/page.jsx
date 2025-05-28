import dynamicImport from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const OpenSourcePageClient = dynamicImport(() => import("../../pages/OpenSourcePage"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

// Remove dynamic export since we're doing static export
export const dynamic = 'force-static'

export default function Page() {
  return (
    <SearchParamsWrapper>
      <OpenSourcePageClient />
    </SearchParamsWrapper>
  );
} 