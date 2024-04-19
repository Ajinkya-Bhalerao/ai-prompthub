"use server"
import { getUser } from "@/actions/user/getUser";
import PromptDetailPage from "./_page";
import { getPromptById } from "@/actions/prompts/getPromptById";
import { getPromptByCategories } from "@/actions/prompts/getPromptsByCategory";
import { dataFocusVisibleClasses } from "@nextui-org/react";
import { stripePublishableKey } from "@/actions/payment/paymentAction";
const Page = async ({ params }: { params: any }) => {
  const check = await getUser();
  const data = JSON.parse(JSON.stringify(check));
  const promptData = await getPromptById(params.id);
  const relatedPromptsData = await getPromptByCategories(
    promptData ? promptData?.category : ""
  );
  const relatedPrompts =
    relatedPromptsData &&
    relatedPromptsData.filter((prompt) => prompt.id !== promptData?.id);
  console.log(data);

  const publishableKey = await stripePublishableKey()!;
  return (
    <div>
      <PromptDetailPage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptData={promptData}
        relatedPrompts={relatedPrompts}
        publishableKey={publishableKey}
      />
    </div>
  );
};

export default Page;
