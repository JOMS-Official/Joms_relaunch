import { useOutletContext } from "react-router";
import HeroSection from "../components/HeroSection";
import FutureSection from "../components/FutureSection";
import VisionMissionValues from "../components/VisionMissionValues";
import ProductsSection from "../components/ProductsSection";
import TimelineSection from "../components/TimelineSection";
import FounderSection from "../components/FounderSection";
import TeamSection from "../components/TeamSection";
import BuildWithUs from "../components/BuildWithUs";

export default function HomePage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <>
      <HeroSection darkMode={darkMode} />
      <FutureSection darkMode={darkMode} />
      <VisionMissionValues darkMode={darkMode} />
      <ProductsSection darkMode={darkMode} />
      <TimelineSection darkMode={darkMode} />
      <FounderSection darkMode={darkMode} />
      <TeamSection darkMode={darkMode} />
      <BuildWithUs darkMode={darkMode} />
    </>
  );
}
