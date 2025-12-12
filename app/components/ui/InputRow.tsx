import { FC } from "react";
import { View, Text, TextInput } from "react-native";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import cn from 'clsx'

interface IInputRow {
    control: Control<any>;
    name: string;
    label: string;
    placeholder?: string;
    subLabel?: string;
    compact?: boolean;
    rules?: RegisterOptions;
    styles?: string;
    value?: string;
    multiline?: boolean
    
}

const InputRow: FC<IInputRow> = ({
    control,
    name,
    label,
    subLabel,
    compact,
    placeholder = "0",
    rules,
    styles,
    value,
    multiline = false
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <View className={compact ? "w-[48%]" : "mt-6"}>
                    <View className="flex-row justify-between items-center">

                        <View>
                            <Text className="text-white text-lg font-medium">{label}</Text>
                            {subLabel && (
                                <Text className="text-muted text-base">{subLabel}</Text>
                            )}
                        </View>

                        <TextInput
                            value={value !== undefined ? value : field.value}
                            onChangeText={field.onChange}
                            onFocus={() => {}}
                            placeholder={placeholder}
                            returnKeyType="done"
                            multiline={multiline}
                            placeholderTextColor="#555555"
                            className={cn("text-white text-xl border-[#222222] bg-[#0F0F0F] border rounded-2xl px-3 py-2 w-24", styles)}
                        />
                    </View>

                    {fieldState.error && (
                        <Text className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                        </Text>
                    )}
                </View>
            )}
        />
    );
};

export default InputRow;

