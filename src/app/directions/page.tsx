import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import DirectionCard from "@/components/widgets/DirectionCard/DirectionCard";
import SectionDirections from "@/components/sections/SectionDirections/SectionDirections";

import { directions } from "@/data/Directions";



export default function Page() {
  return (
    <div className="page">
        <Header />
        
        <SectionDirections directions={directions} isSection={false} />

        <Footer />
    </div>
  );
}