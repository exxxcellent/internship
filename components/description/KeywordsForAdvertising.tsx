// react-native
import { Text } from 'react-native';
// constants
import { keywords, StyledView } from '@/contants';

export default function KeywordsForAdvertising() {
    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <Text className="text-gray-500 mb-[5px] px-[15px] text-xs leading-[14.32px] font-sf-pro-d">
                Ключевые слова для Рекламной интерграции: *
            </Text>
            <StyledView className="flex flex-row flex-wrap rounded-[20px] px-[5px] pb-[10px] bg-substrate w-full mb-[10px] gap-x-[10px] ml-[0px]">
                {keywords.map((item) => (
                    <StyledView className="rounded-[20px] py-[5px] px-[10px] bg-main_blue mt-[10px]">
                        <Text className="text-white font-sf-pro-d">
                            {item.title}
                        </Text>
                    </StyledView>
                ))}
            </StyledView>
            <Text className="text-gray-500 px-[15px] text-[10px] leading-[11.93px] font-sf-pro-d-m">
                * Слова, которые ОБЯЗАТЕЛЬНО должны быть использоаны в
                Интеграции
            </Text>
        </StyledView>
    );
}
