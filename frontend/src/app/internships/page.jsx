import dynamic from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const InternshipsPageClient = dynamic(() => import("../../pages/InternshipsPage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <InternshipsPageClient {...props} />
    </SearchParamsWrapper>
  );
} 