import SearchParamsWrapper from "../../components/SearchParamsWrapper";
import HackathonsPageClient from "./HackathonsPageClient";

export const dynamic = 'force-static'

export default function Page() {
  return (
    <SearchParamsWrapper>
      <HackathonsPageClient />
    </SearchParamsWrapper>
  );
} 