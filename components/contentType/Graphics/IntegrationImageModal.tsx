// react-native
import { Image, Modal, Text, TouchableHighlight } from 'react-native';
// reanimated
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
// react
import { useState, type ReactNode } from 'react';
// constants
import { StyledView } from '@/contants';
// lib
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
// types
import { type SelectedArea } from './IntegrationImage';

interface IntegrationImageModalProps {
    children: ReactNode;
    childrenWithBlur?: ReactNode;
    setModal: (modal: boolean) => void;
    setIsDone: (done: boolean) => void;
    setSelectedArea: ({}: SelectedArea) => void;
}
// additional function
function clamp(val: number, min: number, max: number) {
    return Math.min(Math.max(val, min), max);
}

export default function IntegrationImageModal({
    children,
    childrenWithBlur,
    setModal,
    setIsDone,
    setSelectedArea,
}: IntegrationImageModalProps) {
    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    const prevTranslationY = useSharedValue(0);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [isTouchesUp, setIsToushesUp] = useState(false);
    const [isFirstEnter, setIsFirstEnter] = useState(true);

    const animatedStyles = useAnimatedStyle(() => {
        if (!isTouchesUp) {
            setWidth(52);
            setHeight(100);

            return {
                width: translationX.value,
                height: translationY.value,
            };
        } else {
            return {
                transform: [
                    { translateX: translationX.value },
                    { translateY: translationY.value },
                ],
            };
        }
    });

    const pan = Gesture.Pan()
        .minDistance(1)
        .onStart(() => {
            prevTranslationX.value = translationX.value;
            prevTranslationY.value = translationY.value;
        })
        .onUpdate((event) => {
            const maxTranslateX = 375;
            const maxTranslateY = 284;
            // console.log(event);

            translationX.value = clamp(
                prevTranslationX.value + event.translationX,
                -maxTranslateX,
                maxTranslateX
            );
            translationY.value = clamp(
                prevTranslationY.value + event.translationY,
                -maxTranslateY,
                maxTranslateY
            );
        })
        .onTouchesUp(() => {
            console.log('onTouchesUp');
            setIsToushesUp(true);
        })
        .runOnJS(true);

    return (
        <Modal>
            {/* background blur image */}
            {childrenWithBlur && (
                <StyledView className="absolute flex justify-center items-center w-full h-screen scale-[1.2]">
                    {childrenWithBlur}
                </StyledView>
            )}
            <StyledView className="flex flex-col justify-between h-screen">
                {/* controls */}
                <StyledView className="flex flex-row justify-end p-[15px] w-full">
                    <TouchableHighlight>
                        <StyledView className="bg-substrate p-[10px] rounded-[12px] flex items-center justify-center mr-[10px]">
                            <Image
                                resizeMode="contain"
                                source={require('../../../assets/icons/download.png')}
                            />
                        </StyledView>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setModal(false)}>
                        <StyledView className="bg-substrate p-[10px] rounded-[12px] flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                source={require('../../../assets/icons/close.png')}
                            />
                        </StyledView>
                    </TouchableHighlight>
                </StyledView>
                {/* image */}
                <StyledView className="flex justify-center items-center">
                    {isFirstEnter && (
                        <TouchableHighlight
                            onPress={() => setIsFirstEnter(false)}
                            className="absolute z-10 rounded-[20px]">
                            <StyledView className="flex flex-col justify-center items-center bg-white rounded-[20px] w-[259px] h-[276px]">
                                <Text className="text-xs leading-[14.32px] mb-[30px] text-center text-gray-500 px-[50px] font-sf-pro-d">
                                    Зажмите мышку и выделите нужную область на
                                    фото
                                </Text>
                                <StyledView className="w-[150px] h-[150px] border-2 border-gray-500 border-dashed"></StyledView>
                            </StyledView>
                        </TouchableHighlight>
                    )}
                    {children}
                    <GestureDetector gesture={pan}>
                        <Animated.View
                            className="absolute w-full h-full border-dashed border-main_blue border-2 bg-[#FFFFFF80] flex items-center justify-center"
                            style={animatedStyles}>
                            <Image
                                resizeMode="contain"
                                source={require('../../../assets/icons/screen.png')}
                            />
                        </Animated.View>
                    </GestureDetector>
                </StyledView>
                {/* button done */}
                <TouchableHighlight
                    onPress={() => {
                        setSelectedArea({
                            width,
                            height,
                            x: translationX.value,
                            y: translationY.value,
                        });
                        setModal(false);
                        setIsDone(true);
                    }}>
                    <StyledView className="mx-auto my-6 bg-main_blue px-[50px] py-[12px] rounded-[60px] tablet:mx-[25px] laptop:w-[324px]">
                        <Text className="text-white font-sf-pro-d-m ">
                            Готово
                        </Text>
                    </StyledView>
                </TouchableHighlight>
            </StyledView>
        </Modal>
    );
}
