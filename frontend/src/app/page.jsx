import SearchParamsWrapper from "../components/SearchParamsWrapper";
import HomePageClient from "./HomePageClient";

export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

export default function Page() {
  return (
    <SearchParamsWrapper>
      <HomePageClient />
    </SearchParamsWrapper>
  );
} 