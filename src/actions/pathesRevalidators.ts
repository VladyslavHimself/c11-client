'use server';

import {revalidatePath} from "next/cache";

export async function revalidateAllPathes(): Promise<void> {
    revalidatePath("/", "layout");
}