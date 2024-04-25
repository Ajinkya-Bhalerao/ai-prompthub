'use server'
import { getShopOrders } from "@/actions/orders/getShopOrders";
import { getUser } from "@/actions/user/getUser";
import ShopAllOrders from "@/components/Shop/ShopAllOrders";
import ShopSidebar from "@/components/Shop/ShopSidebar";
import OrderPage from "./_page";

const Page = async () => {

    const check = await getUser();
    const sellerId: any = JSON.parse(JSON.stringify(check));
    const ordersData = await getShopOrders({ sellerId: sellerId?.user.id!});
    const checkOrderData = JSON.parse(JSON.stringify(ordersData));
//   console.log("This is orderData", ordersData)
  return (
    <div>
      <OrderPage isDashboard={false} ordersData={checkOrderData} />
    </div>
  );
};

export default Page;
