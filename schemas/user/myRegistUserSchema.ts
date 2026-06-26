import { myUserSchema } from "@/schemas/user/myUserSchema";
import { z} from "zod";

export const myRegistUserSchema = myUserSchema.extend({
    password: z.string().min(6, "비밀번호는 6자 이상으로 입력해주세요."),
    passwordConfirm: z.string().min(6, "비밀번호 확인은 6자 이상으로 입력해주세요")
}).refine(data => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "비밀번호 확인이 일치하지 않습니다."
});

export type MyRegistUserInputType = z.infer<typeof myRegistUserSchema>;

