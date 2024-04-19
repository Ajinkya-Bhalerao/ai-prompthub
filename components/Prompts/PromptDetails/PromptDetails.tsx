import React from "react";
import { styles } from "@/utils/styles";
import SellerBanner from "@/components/Shop/SellerBanner";
import PromptDetailsCard from "./PromptDetailsCard";
import PromptInformation from "./PromptInformation";
import PromptCard from "../PromptCard";
const PromptDetails = ({
  promptData,
  relatedPrompts,
  stripePromise,
  clientSecret,
}: {
  promptData: any;
  relatedPrompts: any;
  stripePromise: any;
  clientSecret: string;
}) => {
  return (
    <div>
      <PromptDetailsCard
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
