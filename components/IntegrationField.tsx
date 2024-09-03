// react-native
import { Image, Text, TextInput, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

export default function IntegrationField() {
    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px] flex-1">
            <Text
                className="text-gray-500 mb-[5px] text-xs"
                style={fonts.font}>
                Вставьте ссылку на вашу Рекламную Интеграцию:
            </Text>
            <StyledView className="flex flex-row justify-between bg-[#F7F9FB] rounded-[20px] p-[10px]">
                <TextInput
                    style={fonts.font}
                    className="outline-0 border-0 text-main_blue flex-1 mr-[10px]"
                />
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/done.svg')}
                />
            </StyledView>
        </StyledView>
    );
}
