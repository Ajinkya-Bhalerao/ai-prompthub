import { getAllPrompts } from "@/actions/prompts/getAllPrompts";
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {

  const page = searchParams["page"] ?? "1"
  // console.log(page)
  const check = await getUser();
  const data = JSON.parse(JSON.stringify(check));

  const promptsData = await getAllPrompts();
  // console.log(promptsData)

  return (
    <div>
      <MarketPlaceRouter
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
        promptsData={promptsData}

      />
    </div>
  );
};

export default Page;
