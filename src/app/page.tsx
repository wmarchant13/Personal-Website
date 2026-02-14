import Home from "../pages/home";
import { homeData } from "../pages/home/data";

export default function Page() {
  return <Home {...homeData} />;
}
