"use-client";
import React from "react";
import ShopSidebar from "@/components/Shop/ShopSidebar";

type Props = {};

const Page = (props: Props) => {
  //  const sellerId: any = await getUser();
  //  const ordersData = await getShopOrders({ sellerId: sellerId?.user.id });
  //  const promptsData = await getAllPromptsByShop();

  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111C42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={0} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%]">
        {/* <ShopRoot ordersData={ordersData} promptsData={promptsData} /> */}
      </div>
    </div>
  );
};

export default Page;
