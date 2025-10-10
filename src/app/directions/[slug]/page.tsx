import { DirectionCardProps } from "@/types/types";
import { notFound } from "next/navigation";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import DirectionDetail from "@/components/sections/DirectionDetail/DirectionDetail";

import { directions } from "@/data/Directions";

export default function DirectionPage({ params }: { params: { slug: string } }) {
  const post = directions.find(p => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article>
        <Header />
        <DirectionDetail {...post} />
        <Footer />
    </article>
  );
}
