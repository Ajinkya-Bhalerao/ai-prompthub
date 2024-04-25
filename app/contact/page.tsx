import { getUser } from "@/actions/user/getUser";

import React from "react";
import ContactRoute from "./_page";
const Page = async () => {
  const check = await getUser();
  const data = JSON.parse(JSON.stringify(check));
  // console.log(data);
  return (
    <div>
      <ContactRoute
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default Page;
