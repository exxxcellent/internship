// react-native
import { Image, Modal, Text, TouchableHighlight, View } from 'react-native';
// react
import { type ReactNode } from 'react';
// nativewind
import { styled } from 'nativewind';

const StyledView = styled(View);

interface IntegrationImageModalProps {
    children: ReactNode;
    childrenWithBlur?: ReactNode;
    setModal: (modal: boolean) => void;
}

export default function IntegrationImageModal({
    children,
    childrenWithBlur,
    setModal,
}: IntegrationImageModalProps) {
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
                <StyledView>{children}</StyledView>
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
