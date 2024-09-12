// react-native
import { Image, Text, TouchableHighlight } from 'react-native';
// constants
import { StyledView } from '@/contants';

interface SendButtonProps {
    setModal: (modal: boolean) => void;
}

export default function SendButton({ setModal }: SendButtonProps) {
    return (
        <TouchableHighlight onPress={() => setModal(false)}>
            <StyledView className="mx-[15px] my-6 bg-main_blue px-[50px] py-[12px] rounded-[61px] flex flex-row justify-center items-center tablet:mx-[25px] laptop:w-[324px]">
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/scanner.svg')}
                />
                <Text className="text-white font-medium ml-[10px] font-sf-pro-d-m">
                    Отправить на проверку
                </Text>
            </StyledView>
        </TouchableHighlight>
    );
}
