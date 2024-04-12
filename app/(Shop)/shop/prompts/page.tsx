import ShopSidebar from "@/components/Shop/ShopSidebar";
import React from "react";
import AllPrompts from "@/components/Prompts/AllPrompts";
// import { getAllPromptsByShop } from "@/actions/shop/getAllPromptsByShop";

type Props = {};

const Page = (props: Props) => {
//   const promptsData = await getAllPromptsByShop();

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#131f4c] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={2} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        <AllPrompts/>
      </div>
    </div>
  );
};

export default Page
