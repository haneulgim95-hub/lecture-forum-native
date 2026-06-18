import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "@/types/user";

type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    user: User | null;

    login: (user: User, token: string) => void;
    logout: () => void; // 💡 VoidFunction 대신 표준 화살표 함수 타입으로 직관적으로 변경
};

export const useAuthStore = create<AuthState>()(
    persist(
        set => ({
            isLoggedIn: false,
            token: null,
            user: null,
            login: (user, token) => set({ isLoggedIn: true, token, user }),
            logout: () => set({ isLoggedIn: false, token: null, user: null }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => AsyncStorage),
            // *"우리 앱은 스마트폰 앱이라 웹 브라우저 로컬스토리지가 없어!
            // 그러니까 데이터를 JSON 글자 형식으로 예쁘게 포장해서(createJSONStorage), 우리 스마트폰 기기 자체 저장소인 **AsyncStorage에다가 안전하게 보관(storage:)*해줘!"
        },
    ),
);
