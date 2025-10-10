import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/layouts/Header/Header";
import MainBanner from "@/components/sections/MainBanner/MainBanner";
import SectionAbout from "@/components/sections/SectionAbout/SectionAbout";
import SectionDirections from "@/components/sections/SectionDirections/SectionDirections";
import SectionProgramms from "@/components/sections/SectionProgramms/SectionProgramms";
import SectionBlog from "@/components/sections/SectionBlog/SectionBlog";
import SectionGallery from "@/components/sections/SectionGallery/SectionGallery";
import Footer from "@/components/layouts/Footer/Footer";

import { Main } from "next/document";
import { directions } from "@/data/Directions";

const latestPosts = directions.slice(-3).reverse(); 

export default function Home() {
  return (
    <div className="page">
      <Header isMainPage={true} />
      <MainBanner />
      <SectionAbout />
      <SectionProgramms />
      <SectionDirections directions={latestPosts} />
      <SectionBlog />
      <SectionGallery />
      <Footer />
    </div>
  );
}
