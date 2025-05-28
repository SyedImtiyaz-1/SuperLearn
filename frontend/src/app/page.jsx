import dynamicImport from "next/dynamic";
import SearchParamsWrapper from "../components/SearchParamsWrapper";

const HomePageClient = dynamicImport(() => import("../pages/HomePage"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  )
});

export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

export default function Page() {
  return (
    <SearchParamsWrapper>
      <HomePageClient />
    </SearchParamsWrapper>
  );
} 