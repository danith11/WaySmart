import Image from "next/image";
import MapComponent from "./components/mapComponent";
import Banner from "./components/Banner";
import Whywaysmart from "./components/Whywaysmart";

export default function Home() {
  return (
   <div>
    {/* <MapComponent/> */}
    <Banner/>
    <Whywaysmart/>
    
   </div>
  );
}
