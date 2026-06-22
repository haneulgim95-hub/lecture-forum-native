import { Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import Button from "@/components/common/button/Button";
import { useThemeStore } from "@/stores/theme/useThemeStore";

function MainHeader() {
    const { theme, onChangeTheme } = useThemeStore();

    return (
        <View className={"w-full h-16 bg-background-paper border-b border-divider "}>
            <View className={"flex-row justify-between items-center w-full max-w-5xl mx-auto h-16"}>
                <Link href={"/"} asChild>
                    <Pressable className={"flex-row items-center gap-1.5"}>
                        <Ionicons name={"chatbubbles"} size={24} className={"text-primary-main"} />
                        <Text className={"text-lg font-extrabold text-primary-main"}>
                            토론대난투
                        </Text>
                    </Pressable>
                </Link>

                <View className={"flex-row items-center gap-8"}>
                    <Pressable onPress={onChangeTheme} className={"p-1.5 mr-1"}>
                        <Ionicons
                            name={theme === "light" ? "sunny" : "moon"}
                            size={20}
                            className={"text-text-default"}
                        />
                    </Pressable>
                    <Link href={"/auth/login"} asChild>
                        <Button color={"primary"} variant={"text"}>
                            로그인
                        </Button>
                    </Link>
                    <Link href={"/auth/register"} asChild>
                        <Button variant={"contained"} color={"primary"}>
                            회원가입
                        </Button>
                    </Link>
                </View>
            </View>
        </View>
    );
}

export default MainHeader;

// pnpm install tailwind-merge
// tailwindcss는 컴포넌트에 className 속성에 string 값으로 클래스를 지정해서 스타일링
// 그러다보니, string이 너무 길어짐 => 한눈에 스타일링을 읽어들이기 어렵다는 단점
// 클래스들이 써있는 string을 합쳐서 제공할 수 있게 하는 라이브러리
// array나 string을 통해 내 마음대로 끊어서 쓸 수 있도록 해줌
