import dynamic from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const HackathonsPageClient = dynamic(() => import("../../pages/HackathonsPage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <HackathonsPageClient {...props} />
    </SearchParamsWrapper>
  );
} 