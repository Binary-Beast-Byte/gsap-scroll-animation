import Image from "next/image";
import { HeroSection } from "./_components/HeroSection";
import { SecondSection } from "./_components/SecondSection";
import { SmoothScrollWrapper } from "./_components/SmoothScrollWrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
    <HeroSection />
    <SecondSection />
    </SmoothScrollWrapper>
  );
}
