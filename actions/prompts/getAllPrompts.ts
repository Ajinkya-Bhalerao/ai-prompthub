"use server"
import PromptDetailPage from "@/app/prompt/[id]/_page";
import prisma from "@/lib/prismaDb";

export async function getAllPrompts(pageNumber = 1 , pageSize = 20) {
    try{
            const prompts: any = await prisma.prompts.findMany({
                include: {
                    orders: true,
                    images: true,
                    reviews: true,
                    promptUrl: true
                },
                where: {
                    status: "Live"
                },
                take: pageSize,
                skip:(pageNumber - 1) * pageSize,
                orderBy:{
                    createdAt: 'desc',
                },
            })
            if(prompts){
                for(const prompt of prompts){
                    const shop = await prisma.shops.findUnique({
                        where:{
                            userId: prompt.sellerId,
                        }
                    });

                prompt.shop = shop
                }
            }            
            return prompts
    }
    catch (error)
    {
        console.log("Get All Prompts Error", error)
    }
}