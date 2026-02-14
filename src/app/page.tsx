import HomePage from "../components/home-page";
import { homeData } from "@/data/homeData";

export const dynamic = "error";

export default function IndexPage() {
  return <HomePage {...homeData} />;
}
