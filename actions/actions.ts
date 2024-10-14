"use server"

import prisma from "@/lib/db";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function shortenUrl(formData: FormData) {
    const url = formData.get('url') as string;
    const shortCode = nanoid(6);

    await prisma.url.create({
        data: {
            originalUrl: url,
            shortCode,
        }
    })
    console.log(url);
    console.log("server");
    revalidatePath("/");


    return redirect('/') ;
}