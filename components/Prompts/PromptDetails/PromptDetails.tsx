import React from "react";
import { styles } from "@/utils/styles";
import SellerBanner from "@/components/Shop/SellerBanner";
import PromptDetailsCard from "./PromptDetailsCard";
import PromptInformation from "./PromptInformation";
import PromptCard from "../PromptCard";
import { User } from "@clerk/nextjs/server";
const PromptDetails = ({
  user,
  promptData,
  relatedPrompts,
  stripePromise,
  clientSecret,
}: {
  user: User | undefined;
  promptData: any;
  relatedPrompts: any;
  stripePromise: any;
  clientSecret: string;
}) => {
  return (
    <div>
      <PromptDetailsCard
        user={user}
        promptData={promptData}
        stripePromise={stripePromise}
        clientSecret={clientSecret}
      />
      <br />
      <br />
      <PromptInformation promptData={promptData} />
      <br />
      <h1 className={`${styles.heading} px-2 pb-2`}>Related Prompts</h1>
      <div className="flex flex-wrap">
        {relatedPrompts &&
          relatedPrompts.map((prompt: any) => {
            return <PromptCard prompt={prompt} key={prompt.id} />;
          })}
      </div>
      {relatedPrompts.length === 0 && (
        <p className={`${styles.label} text-center block my-5`}>
          No Prompt Found With this Category!
        </p>
      )}
      <br />
      <br />
      <SellerBanner />
      <br />
    </div>
  );
};

export default PromptDetails;
