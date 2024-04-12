import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";
import { getAllPrompts } from "@/actions/prompts/getAllPrompts";

const Page = async() => {

  const check = await getUser()
  const promptsData = await getAllPrompts();
  const data=JSON.parse(JSON.stringify(check));
  // console.log(promptsData)
  return <RoutePage user={data?.user} isSellerExist={data?.shop ? true: false} promptsData={promptsData} />;
};

export default Page;
