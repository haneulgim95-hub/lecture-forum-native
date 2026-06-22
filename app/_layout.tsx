import { Slot } from "expo-router";
import "../styles/global.css";
import { useThemeStore } from "@/stores/theme/useThemeStore";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    const { theme } = useThemeStore();
    // 앱에서 라이트모드와 다크모드를 적용하기 위한 기능을 호출
    const { setColorScheme } = useColorScheme();

    useEffect(() => {
        setColorScheme(theme);
    }, [theme, setColorScheme]);

    // SafeAreaProvider : 앱 환경일 때 최상단에 휴대폰 OS 상태바가 들어가기 때문에 그것에 가려지지 않도록
    //                     앱 전체를 감싸주는 컴포넌트
    // StatusBar : 앱 환경일 때 최상단에 휴대폰 OS 상태바를 커스텀 할 수 있는 컴포넌트
    // SafeAreaView : SafeAreaProvider로 감싼 직계 자식에서는 View를 쓰지 못하고 SafeAreaView를 써야함
    return (
        <SafeAreaProvider>
            <StatusBar style={theme === "dark" ? "light" : "dark"} />

            <SafeAreaView className={"flex-1 bg-background-default text-text-default"}>
                <Slot />
            </SafeAreaView>
        </SafeAreaProvider>
    );

    // "/" 주소로 들어올 경우에, 영향을 주는 파일은 /_layout.tsx + /index.tsx를 출력을 하는데
    // index.tsx가 없으면 자식 가상 폴더의 index.tsx가 있는지 체크함
    // 있으면 그 가상 폴더의 _layout.tsx도 출력하고, index.tsx를 출력함

    // 그런데 우리의 폴더 구조를 보면,
    // (main)/index.tsx
    // (admin)/index.tsx => 뭘 화면에 제공해야하지? => 에러가남
    // 그렇기 떄문에 특수 조건으로 진행하려면 자식가상 폴더 중 한군데에만 index.tsx가 있어야 함
}
