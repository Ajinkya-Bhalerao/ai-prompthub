import { getUser } from "@/actions/user/getUser";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import React from "react";
import AboutRoute from "./_page";
const Page = async () => {
  const check = await getUser();
  const data = JSON.parse(JSON.stringify(check));
  // console.log(data);
  return (
    <div>
      <AboutRoute user={data?.user} isSellerExist={data?.shop ? true : false} />
    </div>
  );
};

export default Page;
