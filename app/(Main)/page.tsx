import React from "react";
import RoutePage from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async() => {

  const check = await getUser()
  
  const data=JSON.parse(JSON.stringify(check));
  
  return <RoutePage user={data?.user} isSellerExist={data?.shop ? true: false} />;
};

export default Page;
