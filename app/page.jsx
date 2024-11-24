"use client";

import { EmblaCarousel } from "@/components/Carousel";

export default function Home() {
  const sliderImages = [
    "/images/sliders/slider1.png",
    "/images/sliders/slider1.png",
    "/images/sliders/slider1.png",
  ];

  return (
    <main>
      <EmblaCarousel />
    </main>
  );
}