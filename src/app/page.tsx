import Image from "next/image";
import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import MainBanner from "@/components/MainBanner/MainBanner";
import SectionAbout from "@/components/SectionAbout/SectionAbout";
import SectionDirections from "@/components/SectionDirections/SectionDirections";
import SectionProgramms from "@/components/SectionProgramms/SectionProgramms";
import SectionBlog from "@/components/SectionBlog/SectionBlog";

import { Main } from "next/document";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <MainBanner />
      <SectionAbout />
      <SectionProgramms />
      <SectionDirections />
      <SectionBlog />
    </div>
  );
}
