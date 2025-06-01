import SearchParamsWrapper from "../../components/SearchParamsWrapper";
import InternshipsPageClient from "./InternshipsPageClient";

export const dynamic = 'force-static'

export default function Page() {
  return (
    <SearchParamsWrapper>
      <InternshipsPageClient />
    </SearchParamsWrapper>
  );
} 