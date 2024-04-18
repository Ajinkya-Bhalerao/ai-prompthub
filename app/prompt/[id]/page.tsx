import { getUser } from "@/actions/user/getUser";
import PromptDetailPage from "./_page";
import { getPromptById } from "@/actions/prompts/getPromptById";
import { getPromptByCategories } from "@/actions/prompts/getPromptsByCategory";
const Page = async ({params}:{params:any}) => {
  const check = await getUser();
  const data = JSON.parse(JSON.stringify(check));

  const promptData = await getPromptById(params.id)
  const relatedPromptsData = await getPromptByCategories(promptData? promptData?.category : "")
  const relatedPrompts = relatedPromptsData && relatedPromptsData.filter((prompt) => prompt.id !== promptData?.id)
  console.log(relatedPrompts)

  return (
    <div>
      <PromptDetailPage
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptData = {promptData}
        relatedPrompts =  {relatedPrompts}
      />
    </div>
  );
};

export default Page;
