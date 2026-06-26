import TextComponent from "@/components/common/text/TextComponent";
import { useRouter } from "expo-router";
import {
    AdminCreateUserInputType,
    adminCreateUserSchema,
} from "@/schemas/user/adminCreateUserSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gender, Role } from "@/types/user";
import { isAxiosError } from "axios";

function AdminCreateUserPage() {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(adminCreateUserSchema),
        mode: "onTouched",
        defaultValues: {
            username: "",
            password: "",
            name: "",
            nickname: "",
            email: "",
            phoneNumber: "",
            birthdate: "",
            gender: Gender.MALE,
            role: Role.USER,
        },
    });

    const onSubmit = async (data: AdminCreateUserInputType) => {
        try {
        } catch (error) {
            console.log(error);

            if (isAxiosError(error) && error.response) {
                const errorMessage = error.response.data.message;
                if (error.response.status === 409) {
                    if (errorMessage.includes("아이디")) {
                        setError("username", { message: errorMessage });
                    } else if ( errorMessage.includes("이메일")) {
                        setError("email", { message: errorMessage });
                    } else if (errorMessage.includes("닉네임")) {
                        setError("nickname", { message: errorMessage });
                    } else {
                        setError("root", { message: errorMessage });
                    }
                    return;
                }
                setError("root", { message: errorMessage });
            } else {
                setError("root", { message: "알수 없는 오류가 발생했습니다."})
            }
        }
    };

    return <TextComponent>createUser</TextComponent>;
}

export default AdminCreateUserPage;
