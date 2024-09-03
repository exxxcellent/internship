// react-native
import { Image, Text, TouchableHighlight, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';

const StyledView = styled(View);

interface SendButtonProps {
    setModal: (modal: boolean) => void;
}

export default function SendButton({ setModal }: SendButtonProps) {
    return (
        <TouchableHighlight onPress={() => setModal(false)}>
            <StyledView className="mx-[15px] my-6 bg-main_blue px-[50px] py-[12px] rounded-[60px] flex flex-row justify-center tablet:mx-[25px] laptop:w-[324px]">
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/scanner.svg')}
                />
                <Text className="text-white font-medium ml-[10px]">
                    Отправить на проверку
                </Text>
            </StyledView>
        </TouchableHighlight>
    );
}
