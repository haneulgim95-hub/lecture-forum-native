import { Gender } from "@/types/user";
import { z } from "zod";

export const myUserSchema = z.object({
    username: z.string().min(6, "아이디는 6자 이상으로 입력해야합니다."),
    name: z.string().min(2, "이름은 2자 이상으로 입력해야합니다."),
    nickname: z
        .string()
        .min(2, "닉네임은 2자 이상으로 입력해야 합니다.")
        .max(10, "닉네임은 10자 이하로 입력해야 합니다."),
    email: z.email("올바른 이메일 형식이 아닙니다."),
    phoneNumber: z.string().optional().or(z.literal("")),
    birthdate: z
        .string()
        .regex(/^\d{8}$/, "생년월일은 8자리 숫자(YYYYMMDD)로 입력해주세요")
        .optional()
        .or(z.literal("")),
    gender: z.enum(Gender),
});