"use client";
import Header from "@/components/Layout/Header";
import React, { useEffect, useState } from "react";
import Hero from "@/components/Route/Hero";
import Image from "next/image";
import About from "@/components/Route/About";
import { styles } from "@/utils/styles";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellerBanner from "@/components/Shop/SellerBanner";
import { Divider } from "@nextui-org/react";
import Footer from "@/components/Layout/Footer";
import axios from "axios";
import Loader from "@/utils/Loader";
import { getUser } from "@/actions/user/getUser";
import { User } from "@clerk/nextjs/server";

type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
  promptsData: any;
  topSellers: any;
};

const RoutePage = ({ user, isSellerExist, promptsData, topSellers }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
    // userData();
  }, [isMounted]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("/api/me")
  //     .then((res) => {
  //       setUser(res.data.user);
  //       setIsSellerExist(res.data.shop ? true : false);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  //   const userData = async () => {
  //     const data = await getUser();
  //     setUser(data?.user);
  //     if (data?.shop) setIsSellerExist(true);
  //   };
  if (!isMounted) {
    return null;
  }

  // seeData()
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
        <Hero />
        <div>
          <Image
            src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
            width={120}
            height={120}
            alt=""
            className="absolute right-[30px]"
          />
          <br />
          <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
            <About />
            <div>
              <h1 className={`${styles.heading} p-2 font-Monserrat`}>
                Latest Prompts
              </h1>

              <div className="flex flex-wrap">
                {promptsData.map((prompt: any) => {
                  return <PromptCard key={prompt.id} prompt={prompt} />;
                })}
              </div>
              <br />
              <BestSellers topSellers={topSellers}/>
              <Future />
              <Partners />
              <SellerBanner />
              <br />
              <br />
              <Divider className="bg-[#ffffff23]" />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
