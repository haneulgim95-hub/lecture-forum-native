import MyTextarea from "@/components/common/textarea/MyTextarea";
import { TextInputProps, View, ViewProps } from "react-native";
import Label from "@/components/common/form/Label";
import ErrorMessage from "@/components/common/form/ErrorMessage";
import { StyleSizeType } from "@/types/style";
import { twMerge } from "tailwind-merge";

interface MyTextareaGroupProps extends TextInputProps {
    label?: string;
    errorMessage?: string;
    size?: StyleSizeType;
    wrap?: boolean;
}

function MyTextareaGroup({
    label,
    errorMessage,
    size,
    wrap,
    placeholder,
    className,
    ...props
}: MyTextareaGroupProps) {
    return (
        <View className={twMerge(["w-full mb-4"], wrap && "flex-1", className)}>
            {label && <Label size={size}>{label}</Label>}
            <MyTextarea size={size} hasError={!!errorMessage} {...props} />
            {errorMessage && <ErrorMessage size={size}></ErrorMessage>}
        </View>
    );
}

export default MyTextareaGroup;
