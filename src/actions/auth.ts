"use server";

import { revalidatePath } from "next/cache";
import {AuthAPI, RegisterBody} from "@/api/auth";

export async function revalidateLoginPath() {
    revalidatePath("/", "layout");
}

export async function signUpUserViaCredentials(values: RegisterBody) {
    return AuthAPI.registerUser(values).then(({ data }) => data);
}