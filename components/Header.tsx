// react-native
import { Image, Text, TouchableHighlight, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

interface HeaderProps {
    setModal: (modal: boolean) => void;
}

export default function Header({ setModal }: HeaderProps) {
    return (
        <StyledView className="h-[55px] flex flex-row justify-between px-[15px] items-center border-b-substrate tablet:mx-[25px]">
            <Text
                className="font-medium text-lg"
                style={fonts.font}>
                HDRT Corporation
            </Text>
            <TouchableHighlight onPress={() => setModal(false)}>
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/close.svg')}
                />
            </TouchableHighlight>
        </StyledView>
    );
}
