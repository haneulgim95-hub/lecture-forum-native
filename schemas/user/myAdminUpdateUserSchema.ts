import { myUserSchema } from "@/schemas/user/myUserSchema";
import { z } from "zod";
import { Role } from "@/types/user";

export const myAdminUpdateUserSchema = myUserSchema.extend({
    password: z.string().min(6, "비밀번호는 6자 이상으로 입력해주세요.").optional().or(z.literal("")),
    role: z.enum(Role, "권한을 선택해주세요."),
});

export type MyAdminUpdateUserInputType = z.infer<typeof myAdminUpdateUserSchema>;