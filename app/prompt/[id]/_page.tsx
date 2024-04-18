"use client";
import { getUser } from "@/actions/user/getUser";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { useEffect, useState } from "react";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import PromptDetails from "@/components/Prompts/PromptDetails/PromptDetails";

const PromptDetailPage = ({
  user,
  isSellerExist,
  promptData,
  relatedPrompts,
}: {
  promptData: any | undefined;
  user: User | undefined;
  isSellerExist: boolean | undefined;
  relatedPrompts: any | undefined;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
    // userData();
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Animal Prompt" />
      </div>
      <div>
        <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
          <PromptDetails
            promptData={promptData}
            relatedPrompts = {relatedPrompts}
            // stripePromise={stripePromise}
            // clientSecret={clientSecret}
          />
          <Divider className="bg-[#ffffff14] mt-5" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PromptDetailPage;
