// react-native
import {
    Dimensions,
    Image,
    Modal,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
// reanimated
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
// react
import { type ReactNode } from 'react';
// nativewind
import { styled } from 'nativewind';
// lib
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const StyledView = styled(View);

interface IntegrationImageModalProps {
    children: ReactNode;
    childrenWithBlur?: ReactNode;
    setModal: (modal: boolean) => void;
}
// additional function
function clamp(val: number, min: number, max: number) {
    return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get('screen');

export default function IntegrationImageModal({
    children,
    childrenWithBlur,
    setModal,
}: IntegrationImageModalProps) {
    const translationX = useSharedValue(0);
    const translationY = useSharedValue(0);
    const prevTranslationX = useSharedValue(0);
    const prevTranslationY = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: translationX.value },
            { translateY: translationY.value },
        ],
    }));

    const pan = Gesture.Pan()
        .minDistance(1)
        .onStart(() => {
            prevTranslationX.value = translationX.value;
            prevTranslationY.value = translationY.value;
        })
        .onUpdate((event) => {
            const maxTranslateX = width / 3;
            const maxTranslateY = height / 12;

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
        .runOnJS(true);

    return (
        <Modal>
            {/* background blur image */}
            {childrenWithBlur && (
                <StyledView className="absolute flex justify-center items-center w-full h-screen scale-[2.5]">
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
                                source={require('../assets/icons/download.svg')}
                            />
                        </StyledView>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => setModal(false)}>
                        <StyledView className="bg-substrate p-[10px] rounded-[12px] flex items-center justify-center">
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/close.svg')}
                            />
                        </StyledView>
                    </TouchableHighlight>
                </StyledView>
                {/* image */}
                <StyledView>
                    <StyledView className="items-center justify-center">
                        {children}
                        <GestureDetector gesture={pan}>
                            <Animated.View
                                className="absolute w-[150px] h-[150px] border-dashed border-main_blue border-2 bg-[#FFFFFF80] flex items-center justify-center"
                                style={animatedStyles}>
                                <Image
                                    resizeMode="contain"
                                    source={require('../assets/icons/screen.svg')}
                                />
                            </Animated.View>
                        </GestureDetector>
                    </StyledView>
                </StyledView>
                {/* button done */}
                <TouchableHighlight onPress={() => setModal(false)}>
                    <StyledView className="mx-auto my-6 bg-main_blue px-[50px] py-[12px] rounded-[60px] tablet:mx-[25px] laptop:w-[324px]">
                        <Text className="text-white font-medium">Готово</Text>
                    </StyledView>
                </TouchableHighlight>
            </StyledView>
        </Modal>
    );
}
