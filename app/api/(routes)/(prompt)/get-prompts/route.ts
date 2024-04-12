import prisma from "@/lib/prismaDb";
import { currentUser, User } from "@clerk/nextjs/server";
import { Inclusive_Sans } from "next/font/google";
// import { User } from "@nextui-org/react";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextRequest) {
  try {

    const user:User | null = await currentUser();
    const sellerId = user?.id;
    const prompts: any = await prisma.prompts.findMany({
      where:{
        sellerId,
      },
      include:{
        orders: true,
      }
    });

//     // const { query } = parse(req.url, true);
//     // const pageNumber = query.page ? parseInt(query.page.toString(), 10) : 1;

//     // const pageSize = 8;

//     // const prompts: any = await prisma.prompts.findMany({
//     //   include: {
//     //     orders: true,
//     //     images: true,
//     //     reviews: true,
//     //     promptUrl: true,
//     //   },
//     //   where: {
//     //     status: "Live",
//     //   },
//     //   take: pageSize,
//     //   skip: (pageNumber - 1) * pageSize,
//     //   orderBy: {
//     //     createdAt: "desc",
//     //   },
//     // });

//     // const totalPrompts: any = await prisma.prompts.findMany({
//     //   where: {
//     //     status: "Live",
//     //   },
//     //   include: {
//     //     images: true,
//     //   },
//     // });

//     // if (prompts) {
//     //   for (const prompt of prompts) {
//     //     const shop = await prisma.shops.findUnique({
//     //       where: {
//     //         userId: prompt.sellerId,
//     //       },
//     //     });
//     //     prompt.shop = shop;
//     //   }

//     //   for (const prompt of totalPrompts) {
//     //     const shop = await prisma.shops.findUnique({
//     //       where: {
//     //         userId: prompt.sellerId,
//     //       },
//     //     });
//     //     prompt.shop = shop;
//     //   }
//     // }

    return NextResponse.json({ prompts });
  } catch (error) {
    console.log("get prompts error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


// export async function GET(req: NextRequest) {
//   try {
//     const { query } = parse(req.url, true);
//     const pageNumber = query.page ? parseInt(query.page.toString(), 10) : 1;

//     const pageSize = 8;

//     const prompts: any = await prisma.prompts.findMany({
//       include: {
//         orders: true,
//         images: true,
//         reviews: true,
//         promptUrl: true,
//       },
//       where: {
//         status: "Live",
//       },
//       take: pageSize,
//       skip: (pageNumber - 1) * pageSize,
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     const totalPrompts: any = await prisma.prompts.findMany({
//       where: {
//         status: "Live",
//       },
//       include: {
//         images: true,
//       },
//     });

//     if (prompts) {
//       for (const prompt of prompts) {
//         const shop = await prisma.shops.findUnique({
//           where: {
//             userId: prompt.sellerId,
//           },
//         });
//         prompt.shop = shop;
//       }

//       for (const prompt of totalPrompts) {
//         const shop = await prisma.shops.findUnique({
//           where: {
//             userId: prompt.sellerId,
//           },
//         });
//         prompt.shop = shop;
//       }
//     }

//     return NextResponse.json({ prompts, totalPrompts });
//   } catch (error) {
//     console.log("get prompts error", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }