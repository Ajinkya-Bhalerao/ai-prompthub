"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";

const ContactRoute = ({
  user,
  isSellerExist,
}: {
  user: User;
  isSellerExist: boolean | undefined;
}) => {
  return (
    <>
      <div className="shop-banner">
        <Header activeItem={3} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Contact Us" />
      </div>

      <Footer />
    </>
  );
};

export default ContactRoute;
