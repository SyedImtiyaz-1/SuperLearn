import dynamicImport from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const InternshipsPageClient = dynamicImport(() => import("../../pages/InternshipsPage"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

export const dynamic = 'force-static'

export default function Page() {
  return (
    <SearchParamsWrapper>
      <InternshipsPageClient />
    </SearchParamsWrapper>
  );
} 