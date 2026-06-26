import { Platform, TextInput, TextInputProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { StyleSizeType } from "@/types/style";

interface MyTextAreaProps extends TextInputProps {
    size?: StyleSizeType;
    hasError?: boolean;
}

function MyTextarea({
    size = "medium",
    hasError,
    placeholderClassName,
    className,
    ...props
}: MyTextAreaProps) {
    const getTextSizeClasses = () => {
        switch (size) {
            case "small":
                return `text-xs`;
            case "medium":
                return `text-sm`;
            case "large":
                return `text-base`;
        }
    };

    return (
        <TextInput
            className={twMerge(
                ["w-full", "p-4", "min-h-32"],
                ["bg-background-default", "rounded-lg", "border", "text-text-default"],
                getTextSizeClasses(),
                hasError ? "border-error-default" : "border-divider focus:border-primary-main",
                Platform.OS === "web" && "outline-none",
                className,
            )}
            placeholderClassName={twMerge("text-text-secondary", placeholderClassName)}
            multiline={true}
            textAlignVertical={"top"}
            {...props}></TextInput>
    );
}

export default MyTextarea;
