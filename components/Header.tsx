import { Text, View } from 'react-native';
import { styled, withExpoSnack } from 'nativewind';
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

function Header() {
    return (
        <StyledView className="h-[55px] flex flex-row justify-between px-[15px] items-center">
            <Text
                className="font-medium text-lg"
                style={fonts.font}>
                HDRT Corporation
            </Text>
            <Text className="text-gray-500 text-xl">x</Text>
        </StyledView>
    );
}

export default withExpoSnack(Header);
