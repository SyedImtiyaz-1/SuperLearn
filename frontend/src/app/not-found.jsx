import dynamic from "next/dynamic";
import SearchParamsWrapper from "../components/SearchParamsWrapper";

const NotFoundPageClient = dynamic(() => import("../pages/NotFoundPage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <NotFoundPageClient {...props} />
    </SearchParamsWrapper>
  );
} 