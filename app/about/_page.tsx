"use client"
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";


const AboutRoute = ({
  user,
  isSellerExist,
}: {
  user: User;
  isSellerExist: boolean | undefined;
}) => {
  return (
    <>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="About Us" />
      </div>

      <Footer />
    </>
  );
};

export default AboutRoute;