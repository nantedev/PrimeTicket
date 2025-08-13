"use server";

import { ActionState, fromErrorToActionState } from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import z from "zod"
import { redirect } from "next/navigation";
import { ticketsPath } from "@/paths";
import { hashPassword } from "../utils/hash-and-verify";
import { generateRandomToken } from "@/utils/crypto";
import { setSessionCookie } from "../utils/session-cookie";
import { createSession } from "@/lib/lucia";

const signUpSchema = z.object({
    username: z
      .string()
      .min(1)
      .max(191)
      .refine(
        (value) => !value.includes(" "),
        "Username cannot contain spaces"
      ),
    email: z.email().min(1, { message: "Is required" }).max(191),
    password: z.string().min(6).max(191),
    confirmPassword: z.string().min(6).max(191),
  })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  export const signUp = async (_actionState: ActionState, formData: FormData) => {
    try {
        const { username, email, password } = signUpSchema.parse(
        Object.fromEntries(formData)
    )
    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
        data: {
            username,
            email,
            passwordHash
        }
    })

    const sessionToken = generateRandomToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);

    } catch (error) {
        return fromErrorToActionState(error, formData)
    }
    redirect(ticketsPath())
  }