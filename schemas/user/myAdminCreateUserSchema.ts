import { z } from "zod";
import { Role } from "@/types/user";
import { myUserSchema } from "@/schemas/user/myUserSchema";

export const myAdminCreateUserSchema = myUserSchema.extend({
    password: z.string().min(6, "비밀번호는 6자 이상으로 입력해주세요."),
    role: z.enum(Role, "권한을 선택해주세요."),
});

export type MyAdminCreateUserInputType = z.infer<typeof myAdminCreateUserSchema>;
