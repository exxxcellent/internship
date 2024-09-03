// react-native
import { Text, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

export default function KeywordsForAdvertising() {
    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <Text
                className="text-gray-500 mb-[5px] px-[15px] text-xs"
                style={fonts.font}>
                Ключевые слова для рекламной интерграции: *
            </Text>
            <StyledView className="flex flex-row flex-wrap rounded-[20px] pr-[15px] pb-[15px] bg-substrate mx-auto w-full mb-[10px]">
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[15px]">
                    <Text
                        className="text-white"
                        style={fonts.font}>
                        Товар
                    </Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[15px]">
                    <Text
                        className="text-white"
                        style={fonts.font}>
                        Потрясающий
                    </Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[15px]">
                    <Text
                        className="text-white"
                        style={fonts.font}>
                        Качественный
                    </Text>
                </StyledView>
                <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[15px] ml-[15px]">
                    <Text
                        className="text-white"
                        style={fonts.font}>
                        Платье
                    </Text>
                </StyledView>
            </StyledView>
            <Text
                className="text-gray-500 px-[15px] text-[10px]"
                style={fonts.font}>
                * Слова, которые ОБЯЗАТЕЛЬНО должны быть использоаны в
                Интеграции
            </Text>
        </StyledView>
    );
}
