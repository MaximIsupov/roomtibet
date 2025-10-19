"use client";

import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import DirectionCard from "@/components/widgets/DirectionCard/DirectionCard";
import SectionDirections from "@/components/sections/SectionDirections/SectionDirections";

import { directions } from "@/data/Directions";
import { useEffect, useState } from "react";

import { getDirections } from "@/api/directions/directions";



export default function Page() {

  const [directions, setDirections] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getDirections();
        setDirections(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="page">
        <Header />
        
        <SectionDirections directions={directions} isSection={false} />

        <Footer />
    </div>
  );
}