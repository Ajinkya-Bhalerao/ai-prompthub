import React, { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import SellerCard from "./SellerCard";
type Props = { topSellers: any };

const BestSellers = ({topSellers}: Props) => {
  // console.log(topSellers)
  // const [topSellers, setTopSellers] = useState("");

  // useEffect(() => {
  //   if (top) getShopInfo();
  // }, []);

  // const getShopInfo = async () => {
  //   const sellerInfo: any = await getTopSellers();
  //   // console.log(sellerInfo);
  //   setTopSellers(sellerInfo);
  // };
  return (
    <div className="mb-10 cursor-pointer">
      <h1 className={`${styles.heading} flex p-2 font-Monserrat mb-5`}>
        Top Sellers
      </h1>
      <div className="flex flex-wrap">
        {topSellers.map((sellerInfo:any)=>{
          return <SellerCard sellerInfo={sellerInfo} key={sellerInfo.id}/>;
        })}
      </div>
    </div>
  );
};

export default BestSellers;
