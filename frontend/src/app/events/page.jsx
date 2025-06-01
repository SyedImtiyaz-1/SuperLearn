import SearchParamsWrapper from "../../components/SearchParamsWrapper";
import EventsPageClient from "./EventsPageClient";

export const dynamic = 'force-static'
export const revalidate = 3600 // revalidate every hour

export default function Page() {
  return (
    <SearchParamsWrapper>
      <EventsPageClient />
    </SearchParamsWrapper>
  );
} 