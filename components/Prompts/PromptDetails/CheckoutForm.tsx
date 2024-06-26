import { newOrder } from "@/actions/orders/createOrder";
import { getUser } from "@/actions/user/getUser";
import { styles } from "@/utils/styles";
import { User } from "@clerk/nextjs/server";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = ({
  user,
  setOpen,
  open,
  promptData,
}: {
  user:User | undefined;
  setOpen: (open: boolean) => void;
  open: boolean;
  promptData: any;
}) => {
  const [message, setMessage] = useState<any>("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const data = await getUser();
    const userData = user;
    // console.log("From data", data);
    console.log("From userdata", userData);

    // console.log(userData?.user);
    if (!stripe || !elements) {
      return;
    }
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      await newOrder({
        userId: userData?.id!,
        promptId: promptData.id,
        payment_id: paymentIntent.id,
        payment_method: paymentIntent.id!,
      }).then((res) => {
        setOpen(!open);
        window.location.reload();
      });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" />
      <button
        id="submit"
        className={`${styles.button} !bg-[crimson] mt-4 !p-2 !w-full`}
      >
        <span>Pay Now ${promptData?.price}</span>
      </button>
      {/* Show amy error or success message */}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
