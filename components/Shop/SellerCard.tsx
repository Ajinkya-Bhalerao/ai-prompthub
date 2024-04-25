import React, { useEffect, useState } from "react";
import Ratings from "@/utils/Ratings";
import { styles } from "@/utils/styles";
import { Avatar, Card } from "@nextui-org/react";
import { getTopSellers } from "@/actions/shop/getTopSellers";

type Props = {};

const SellerCard = ({ sellerInfo }: { sellerInfo: any }) => {
  // console.log(sellerInfo)
  return (
    <Card className="py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]">
      <Avatar src={sellerInfo?.avatar} className="w-[80px] h-[80px]" />
      <span className={`${styles.label} py-2 text-xl`}>
        @{sellerInfo?.name}
      </span>
      <div className="flex items-center">
        <span className={`${styles.label} pr-2`}>{sellerInfo?.ratings}</span>
        <Ratings rating={sellerInfo?.ratings} />
      </div>
      <span className={`${styles.label} py-2`}>
        Total Sales: {sellerInfo?.totalSales}
      </span>
    </Card>
  );
};

export default SellerCard;
