import Layout from '@/components/ui/layout/Layout';
import { FC, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useActions } from '@/components/hooks/useAction';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import Loader from '@/components/ui/layout/Loader';
import CodeVerificationModal from './actions/Auth.otp';
import AuthForm from './actions/AuthForm';

const Auth: FC = () => {
    const [modal, setModal] = useState(false);

    const { 
        register,
        sendMail,
        validateMail,
        setVerificationError,
    } = useActions();

    const { isLoading } = useTypedSelector(state => state.user);

    const { 
        email,
        password,
        verificationError,
        sendCodeLoading,
        validateLoading
    } = useTypedSelector(state => state.mail);

    const confirmCode = async (code: string) => {
        setVerificationError("");

        await validateMail({ email, code });

        setModal(false);

        register({ email, password });
    };

    const resend = async () => {
        await sendMail(email);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Layout>
                    <View className='w-3/4 mx-auto justify-center'>

                        <AuthForm setModal={setModal}/>

                        <CodeVerificationModal
                            visible={modal}
                            onClose={() => {
                                setModal(false);
                                setVerificationError("");
                            }}
                            onConfirm={confirmCode}
                            onResend={resend}
                            email={email}
                            error={verificationError}
                            loading={validateLoading || sendCodeLoading}
                        />
                    </View>
                </Layout>
            )}
        </>
    );
};

export default Auth;
