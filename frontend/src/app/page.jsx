import dynamic from "next/dynamic";
import SearchParamsWrapper from "../components/SearchParamsWrapper";

const HomePageClient = dynamic(() => import("../pages/HomePage"), { ssr: false });

export default function Page(props) {
  return (
    <SearchParamsWrapper>
      <HomePageClient {...props} />
    </SearchParamsWrapper>
  );
} 