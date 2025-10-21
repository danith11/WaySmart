import Image from "next/image";
import MapComponent from "./components/mapComponent";
import Banner from "./components/Banner";

export default function Home() {
  return (
   <div>
    {/* <MapComponent/> */}
    <Banner/>
    <h1>Welcome to WaySmart</h1>
   </div>
  );
}
