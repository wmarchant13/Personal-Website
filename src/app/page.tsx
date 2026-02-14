import Home from "../pages/home";
import { homeData } from "@/data/homeData";
export default function Page() {
  return <Home {...homeData} />;
}
