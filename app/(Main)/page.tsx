"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Route/Hero";

type Props = {};

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
    </div>
  );
};

export default Page;
