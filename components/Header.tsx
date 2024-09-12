// react-native
import { Image, Text, TouchableHighlight } from 'react-native';
// constants
import { StyledView } from '@/contants';
// expo
import { useFonts } from 'expo-font';

interface HeaderProps {
    setModal: (modal: boolean) => void;
}

export default function Header({ setModal }: HeaderProps) {
    const [loaded, error] = useFonts({
        'sf-pro-display': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    });

    return (
        <StyledView className="h-[55px] flex flex-row justify-between px-[15px] items-center border-b-[1px] border-b-substrate tablet:mx-[25px]">
            <Text className="font-medium text-lg font-sf-pro-d-m">
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
