import { getShopOrders } from "@/actions/orders/getShopOrders";
import { getUser } from "@/actions/user/getUser";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import ShopSidebar from "@/components/Shop/ShopSidebar";

const OrderPage = async ({
  isDashboard,
  ordersData,
}: {
  isDashboard: boolean | undefined;
  ordersData: any | undefined;
}) => {
    // console.log(JSON.parse(JSON.stringify(ordersData))[0]);
  return (
    <div className="flex w-full">
      <div className="h-screen flex p-2 bg-[#111c42] md:w-[20%] 2xl:w-[17%]">
        <ShopSidebar active={3} />
      </div>
      <div className="md:w-[80%] 2xl:w-[83%] p-5">
        <ShopAllOrders isDashboard={false} ordersData={ordersData} />
      </div>
    </div>
  );
};

export default OrderPage;
