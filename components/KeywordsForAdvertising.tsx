// react-native
import { Text } from 'react-native';
// constants
import { StyledView } from '@/contants';
// expo
import { useFonts } from 'expo-font';

export default function KeywordsForAdvertising() {
    // const [loaded, error] = useFonts({
    //     'sf-pro-display': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    //     'sf-pro-display-500': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    //     'sf-pro-display-700': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
    //     inter: require('../assets/fonts/Inter-Regular.ttf'),
    //     'inter-500': require('../assets/fonts/Inter-Medium.ttf'),
    //     'inter-700': require('../assets/fonts/Inter-Bold.ttf'),
    // });

    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <Text className="text-gray-500 mb-[5px] px-[15px] text-xs leading-[14.32px] font-sf-pro-d">
                Ключевые слова для Рекламной интерграции: *
            </Text>
            <StyledView className="flex flex-row flex-wrap rounded-[20px] pr-[15px] pb-[12px] bg-substrate mx-auto w-full mb-[10px]">
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[12px]">
                    <Text className="text-white font-sf-pro-d">Товар</Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[12px]">
                    <Text className="text-white font-sf-pro-d">
                        Потрясающий
                    </Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[12px]">
                    <Text className="text-white font-sf-pro-d">
                        Качественный
                    </Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[12px]">
                    <Text className="text-white font-sf-pro-d">Платье</Text>
                </StyledView>
            </StyledView>
            <Text className="text-gray-500 px-[15px] text-[10px] leading-[11.93px] font-sf-pro-d-m">
                * Слова, которые ОБЯЗАТЕЛЬНО должны быть использоаны в
                Интеграции
            </Text>
        </StyledView>
    );
}
