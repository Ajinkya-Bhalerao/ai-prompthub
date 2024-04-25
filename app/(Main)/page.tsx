import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import { getTopSellers } from "@/actions/shop/getTopSellers";

const Page = async () => {
  const check = await getUser();
  const promptsData = await getAllPrompts();
  const data = JSON.parse(JSON.stringify(check));
const topSellers = await getTopSellers();
  // console.log(topSellers)
  return (
    <RoutePage
      user={data?.user}
      isSellerExist={data?.shop ? true : false}
      promptsData={promptsData}
      topSellers={topSellers}
    />
  );
};

export default Page;
