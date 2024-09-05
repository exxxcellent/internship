// react-native
import { Image, Text, View } from 'react-native';
// react
import { useState } from 'react';
// nativewind
import { styled } from 'nativewind';
// lib
import { HighlightedText } from 'react-native-highlighted-text';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

function IntegrationText() {
    const [selectedText, setSelectedText] = useState('');

    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <StyledView className="flex flex-row justify-between items-center mb-[10px] px-0 mb:px-[15px] tablet:px-0  laptop:px-0">
                <Text
                    className="text-gray-500 mb-[5px] text-xs"
                    style={fonts.font}>
                    Выделите текст, который включает в себя вашу Рекламную
                    Интеграцию:
                </Text>
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/done.svg')}
                    className="tablet:hidden"
                />
            </StyledView>
            <StyledView className="bg-white/50 rounded-[20px] p-[15px] flex flex-col gap-y-[10px] pt-[-10px]">
                <Image
                    resizeMode="contain"
                    source={require('../assets/icons/done.svg')}
                    className="hidden tablet:flex absolute top-0 right-4"
                />
                <Text className="text-gray-500">
                    Выберите 1 абзац, который будет отображаться:
                </Text>
                <Text className="bg-main_blue/80 text-white p-2 rounded-[20px]">
                    {selectedText}
                </Text>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=Я волнующимся шагом подошла к стенду HDRT Corporation
                    на выставке моды, и могу с уверенностью сказать, что это
                    было далеко не обычное зрелище. Платья, представленные этой
                    компанией, просто поразили меня своей красотой и
                    оригинальностью.]]
                </HighlightedText>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=Первое, что бросилось в глаза, это удивительная
                    глубина цвета и невороятная ярксоть тканей. Каждое платье
                    словно ожило, играя разноцветными оттенками под яркими
                    огнями выставочного зала. Они словно сами по себе создавали
                    собственный свет, притягивая взгляды посетителей.]]
                </HighlightedText>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=Однако, красота платьев HDRT Corporation не
                    ограничивается лишь яркостью цветов. Их дизайн поражает
                    своей оригинальностью и изысканностью. Ярко выраженные
                    линии, утонченыные детали и уникальные фактуры тканей
                    создают впечатление произведений искусства, а не просто
                    предметов гардероба. Эти платья точно способны превратить
                    любую в настоящую]]
                </HighlightedText>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=Но самое впечатляющее – это то, как эти платья
                    смотрятся на живых моделях. Они словно обретают новую жизнь,
                    подчеркивая естественную красоту и грацию каждой дамы. HDRT
                    Corporation не просто создает модную одежду, они создают
                    возможность каждой женщине почувствовать себя уверенной и
                    прекрасной.]]
                </HighlightedText>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=Я не могу не упомянуть их технологию
                    высокодинамического диапазона, которая придает платьям
                    особый шарм. Благодаря этой инновации каждая деталь, каждый
                    узор и каждый оттенок выглядят более глубокими и
                    насыщенными, создавая неповторимый визуальный опыт.]]
                </HighlightedText>
                <HighlightedText
                    highlightedTextStyles={{
                        font: {
                            fontFamily: fonts.font.fontFamily,
                        },
                    }}
                    onPressHighlighted={{
                        font: (text) => setSelectedText(text),
                    }}>
                    [[font=В заключение, платья от HDRT Corporation – это не
                    просто предметы одежды. Это настоящие произведения
                    искусства, способные преобразить образ любой женщины. Я
                    восхищена их красотой, изысканностью и инновационным
                    подходом к созданию моды. Если вы хотите ощутить себя
                    настоящей звездой и окунуться в мир невероятной красоты,
                    обязательно обратитесь к коллекциям HDRT Corporation.]]
                </HighlightedText>
            </StyledView>
        </StyledView>
    );
}

export default IntegrationText;
