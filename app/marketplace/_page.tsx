"use client";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import FilterPrompt from "@/components/Prompts/FilterPrompt";
import { useRouter } from "next/navigation";
import PromptCard from "@/components/Prompts/PromptCard";
import PromptCardLoader from "@/utils/PromptCardLoader";

const MarketPlaceRouter = ({
  user,
  isSellerExist,
  promptsData,
}: {
  user: User | undefined;
  isSellerExist: boolean;
  promptsData : any;
}) => {
  const [isMounted, setisMounted] = useState(false);
  const [initialPage, setInitialPage] = useState(1);
  const [prompts, setPrompts] = useState<any>();
  const [totalPrompts, setTotalPrompts] = useState<any>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  // console.log(promptsData.length)
  
  const fetchPromptsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/get-prompts?page=${initialPage}`);
      const data = await response.json();
      // console.log(data.prompts)
      setPrompts(data.prompts);
      setTotalPrompts(data.totalPrompts);
    } catch (error) {
      console.error("Failed to fetch prompts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isMounted) {
      setisMounted(true);
    }
  }, [isMounted]);

  useEffect(() => {
    if (initialPage) {
      router.push(`/marketplace?page=${initialPage}`);
    }
  }, [initialPage, router]);

  useEffect(() => {
    fetchPromptsData();
  }, [initialPage]);

  if (!isMounted) {
    return null;
  }

  const paginationsPages = totalPrompts && Math.ceil(totalPrompts.length / 20);

  return (
    <>
      <div className="shop-banner">
        <Header activeItem={1} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Our Shop" />
      </div>
      <div>
        <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] m-auto">
          <div>
            <div className="w-full">
              <FilterPrompt
                setPrompts={setPrompts}
                totalPrompts={totalPrompts}
              />
            </div>
            <div className="w-full flex flex-wrap mt-5">
              {loading ? (
                [...new Array(20)].map((i,idx) => (
                  <>
                    <PromptCardLoader key={idx} />
                  </>
                ))
              ) : (
                <>
                  {promptsData &&
                    promptsData.map((item: any) => (
                      <PromptCard prompt={item} key={item.id} />
                    ))}
                </>
              )}
            </div>
            <div className="w-full flex items-center justify-center mt-5">
              {!loading && (
                <Pagination
                  loop
                  showControls
                  total={paginationsPages}
                  initialPage={initialPage}
                  classNames={{
                    wrapper: "mx-2",
                    item: "mx-2",
                  }}
                  onChange={setInitialPage}
                />
              )}
            </div>
            <Divider className="bg-[#ffffff14] mt-5" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPlaceRouter;
