// react-native
import { Image, Text } from 'react-native';
// contants
import { StyledView } from '@/contants';

export default function SocialMedia() {
    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px]">
            <Text className="text-gray-500 mb-[5px] text-xs leading-[14.32px] font-sf-pro-d">
                Выберите социальную сеть для Рекламной Интеграции:
            </Text>
            <StyledView className="flex flex-row gap-x-[10px]">
                <StyledView className="flex flex-row items-center p-[10px] bg-main_blue rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Telegram.svg')}
                    />
                    <Text className="ml-[10px] text-white leading-[16.71px] font-sf-pro-d-m">
                        Telegram
                    </Text>
                </StyledView>
                <StyledView className="flex flex-row items-center p-[10px] bg-white/50 border-[1px] border-substrate rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Youtube.svg')}
                    />
                    <Text className="ml-[10px] text-gray-500 leading-[16.71px] font-sf-pro-d-m">
                        Youtube
                    </Text>
                </StyledView>
                <StyledView className="flex flex-row items-center p-[10px] bg-white/50 border-[1px] border-substrate rounded-[15px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/Instagram.svg')}
                    />
                    <Text className="ml-[10px] text-gray-500 leading-[16.71px] font-sf-pro-d-m">
                        Instagram
                    </Text>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}
