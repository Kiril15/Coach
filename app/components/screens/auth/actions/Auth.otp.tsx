import Button from "@/components/ui/Button";
import { FC, useRef, useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Loader from "@/components/ui/layout/Loader";

interface Props {
    visible: boolean;
    onClose: () => void;
    onConfirm: (code: string) => void; 
    onResend: () => void;                
    email?: string;
    error?: string;
    loading?: boolean
}

const CodeVerificationModal: FC<Props> = ({ 
    visible, 
    onClose, 
    onConfirm, 
    onResend, 
    email,
    error,
    loading
}) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef<TextInput[]>([]);

    const handleChange = (text: string, index: number) => {
        if (text === "") {
            const updated = [...code];
            updated[index] = "";
            setCode(updated);

            if (index > 0) inputs.current[index - 1]?.focus();
            return;
        }

        if (!/^\d$/.test(text)) return;

        const updated = [...code];
        updated[index] = text;
        setCode(updated);

        if (index < 5) inputs.current[index + 1]?.focus();
    };

    const fullCode = code.join("");

    const handleConfirm = () => {
        if (fullCode.length === 6) {
            onConfirm(fullCode);
        }
    };

    return (
        <Modal visible={visible} transparent animationType="fade">
            {loading ? <Loader/> : (
                <View className="flex-1 bg-black/70 justify-center items-center px-6">
                    <View className="w-full bg-[#111] p-6 rounded-2xl border border-[#222] relative">
                        <TouchableOpacity onPress={onClose} className="mt-2">
                            <AntDesign
                                name="close"
                                size={24}
                                color='#fff'
                                className="absolute bottom-[-5px] left-[-5px]"
                            />
                        </TouchableOpacity>
                        <Text className="text-white text-2xl font-semibold text-center">
                            Підтвердження email
                        </Text>
                
                        {email && (
                            <Text className="text-muted text-center mt-2">
                                Код надіслано на {email}
                            </Text>
                        )}
    
                        {error && (
                            <View className="bg-red-500/10 border border-red-500 rounded-lg p-3 mt-4">
                                <Text className="text-red-500 text-center text-sm">
                                    {error}
                                </Text>
                            </View>
                        )}
    
                        <View className="flex-row justify-center gap-3 mt-6">
                            {code.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    ref={(ref) => {
                                        if (ref) inputs.current[index] = ref;
                                    }}
                                    className="w-12 h-14 bg-[#1A1A1A] text-white text-2xl text-center rounded-xl border border-[#333]"
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChangeText={(text) => handleChange(text, index)}
                                />
                            ))}
                        </View>
                        
                        <Button
                            onPress={handleConfirm}
                            className={`py-3 rounded-xl mt-6 ${
                                fullCode.length !== 6 && 'bg-[#333] opacity-50'
                            }`}
                            disabled={fullCode.length < 6}
                        >
                            <Text className="text-black font-semibold text-center text-lg">
                                Підтвердити
                            </Text>
                        </Button>
                        
                        <TouchableOpacity onPress={onResend} className="mt-4">
                            <Text className="text-muted text-center">
                                Надіслати код повторно
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Modal>
    );
};

export default CodeVerificationModal;