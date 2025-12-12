import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextInput, Text, View } from "react-native";

interface IProps {
    control: any;
    name: string;
    label: string;
    placeholder?: string;
    rules?: any;
}

const TextArea: FC<IProps> = ({ control, name, label, placeholder, rules }) => {
    return (
        <View className="w-full mt-5">
            <Text className="text-white text-lg font-medium mb-2">{label}</Text>

            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { value, onChange } }) => (
                    <TextInput
                        multiline
                        numberOfLines={4}
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        placeholderTextColor="#555555"
                        className="text-white text-base border border-[#222] bg-[#0F0F0F] rounded-2xl p-3"
                    />
                )}
            />
        </View>
    );
};

export default TextArea;
