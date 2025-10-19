import { DirectionCardProps } from "@/types/types";
import { notFound } from "next/navigation";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import DirectionDetail from "@/components/sections/DirectionDetail/DirectionDetail";
import Breadcrumbs from "@/components/widgets/BreadCrumbs/Breadcrumbs";

import { directions } from "@/data/Directions";

export default function DirectionPage({ params }: { params: { slug: string } }) {
  const post = directions.find(p => p.slug === params.slug);

  if (!post) return notFound();

  const breadcrumbs = [
    {
      name: 'Главная',
      link: '/'
    },
    {
      name: 'Направления',
      link: '/directions/'
    },
    {
      name: post.title,
      link: ''
    }
  ];

  return (
    <article>
        <Header />
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <DirectionDetail {...post} />
        <Footer />
    </article>
  );
}
