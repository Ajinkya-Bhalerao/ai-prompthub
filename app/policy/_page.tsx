"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";

const PolicyRoute = ({
  user,
  isSellerExist,
}: {
  user: User;
  isSellerExist: boolean | undefined;
}) => {
  return (
    <>
      <div className="shop-banner">
        <Header activeItem={4} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Policy" />
      </div>

      <Footer />
    </>
  );
};

export default PolicyRoute;
