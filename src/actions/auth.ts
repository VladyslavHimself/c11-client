"use server";

import {AuthAPI, RegisterBody} from "@/api/auth";

export async function signUpUserViaCredentials(values: RegisterBody) {
    return AuthAPI.registerUser(values).then(({ data }) => data);
}