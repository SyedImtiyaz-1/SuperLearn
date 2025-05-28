import dynamic from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const OpenSourcePageClient = dynamic(() => import("../../pages/OpenSourcePage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <OpenSourcePageClient {...props} />
    </SearchParamsWrapper>
  );
} 