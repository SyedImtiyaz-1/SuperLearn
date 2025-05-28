import dynamic from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const EventsPageClient = dynamic(() => import("../../pages/EventsPage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <EventsPageClient {...props} />
    </SearchParamsWrapper>
  );
} 