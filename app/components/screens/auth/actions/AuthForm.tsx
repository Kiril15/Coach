import { Text, View } from "react-native";
import Button from "@/components/ui/Button";
import AuthFields from "./AuthFields";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormData } from "@/types/user.interface";
import { useTypedSelector } from "@/components/hooks/useTypedSelector";
import { useActions } from "@/components/hooks/useAction";
import { FC } from "react";

interface IAuthForm {
    setModal: (modal: boolean) => void
}

const AuthForm: FC<IAuthForm> = ({setModal}) => {
    const {error, isReg, isLoading } = useTypedSelector(state => state.user)
    const {verificationError} = useTypedSelector(state => state.mail)
    const {
        setEmail,
        setPassword,
        login,
        sendMail,
        setVerificationError,
        setIsReg
    } = useActions()

    const { control, reset, handleSubmit } = useForm<IAuthFormData>({
        mode: 'onChange'
    });

    const onSubmit: SubmitHandler<IAuthFormData> = async data => {
        if (isReg) {
            setEmail(data.email);
            setPassword(data.password);

            await sendCode(data.email);
        } else {
            login(data);
        }
        reset();
    };

    const sendCode = async (email: string) => {
        setVerificationError("");
        
        setModal(true);

        await sendMail(email);
    };

    return (
        <>
            <Text className='text-4xl text-white text-center mt-[150px] mb-2 font-bold'>
                {isReg ? 'Sign Up' : 'Sign In'}
            </Text>

            <Text className='text-[#666666] text-center mb-5'>
                {isReg ? 'Please sign up to continue' : 'Please sign in to continue'}
            </Text>

            <AuthFields control={control} />

            {error && <Text className='text-red-600'>{error}</Text>}
            {verificationError && <Text className='text-red-600'>{verificationError}</Text>}

            <Button 
                className='w-full' 
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
            >
                <Text className='text-semibold text-white text-center text-lg justify-center'>
                    {isReg ? 'Register' : 'Login'}
                </Text>
            </Button>

            <View className='flex-row items-center justify-center mt-5'>
                <View className='h-[1px] w-[45%] bg-[#666666]' />
                <Text className='text-[#666666] text-center text-lg mx-2'>or</Text>
                <View className='items-center h-[1px] w-[45%] bg-[#666666]' />
            </View>

            <View className="flex-row justify-center mt-4">
                <Text className="text-muted">
                    {isReg ? "Already have an account?" : "Don't have an account?"}
                </Text>


                <Text
                    className="text-neon ml-1"
                    onPress={() => {
                        setVerificationError("");
                        setIsReg(!isReg);
                    }}
                >
                    {isReg ? 'Login' : 'Register'}
                </Text>
            </View>
        </>
    )
}

export default AuthForm