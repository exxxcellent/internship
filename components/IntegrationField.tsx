import { fonts } from '@/assets/fonts/font';
import { styled, withExpoSnack } from 'nativewind';
import { Image, Text, TextInput, View } from 'react-native';

const StyledView = styled(View);

function Integration() {
    return (
        <StyledView className="px-[15px] mb-[20px]">
            <Text
                className="text-gray-500 mb-[5px] text-xs"
                style={fonts.font}>
                Вставьте ссылку на вашу Рекламную Интеграцию:
            </Text>
            <StyledView className="flex flex-row justify-between bg-[#F7F9FB] rounded-[20px] p-[10px] ">
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

export default withExpoSnack(Integration);
