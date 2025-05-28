import dynamic from "next/dynamic";
import SearchParamsWrapper from "../../components/SearchParamsWrapper";

const JobsPageClient = dynamic(() => import("../../pages/JobsPage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <JobsPageClient {...props} />
    </SearchParamsWrapper>
  );
} 