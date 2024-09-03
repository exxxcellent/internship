// react-native
import { Image, Text, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

export default function SocialMedia() {
    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px]">
            <Text
                className="text-gray-500 mb-[5px] text-xs"
                style={fonts.font}>
                Выберите социальную сеть для Рекламной Интеграции:
            </Text>
            <StyledView className="flex flex-row gap-x-[10px]">
                <StyledView className="flex flex-row items-center py-[10px] px-[10px] bg-main_blue rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Telegram.svg')}
                    />
                    <Text
                        className="ml-[10px] text-white"
                        style={fonts.font}>
                        Telegram
                    </Text>
                </StyledView>
                <StyledView className="flex flex-row items-center py-[10px] px-[10px] bg-white/50 border-1 border-substrate rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Youtube.svg')}
                    />
                    <Text
                        className="ml-[10px] text-gray-500"
                        style={fonts.font}>
                        Youtube
                    </Text>
                </StyledView>
                <StyledView className="flex flex-row items-center py-[10px] px-[10px] bg-white/50 border-1 border-substrate rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Instagram.svg')}
                    />
                    <Text
                        className="ml-[10px] text-gray-500"
                        style={fonts.font}>
                        Instagram
                    </Text>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}
