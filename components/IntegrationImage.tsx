// react-native
import { Image, Text, TouchableHighlight, View } from 'react-native';
// react
import React, { useState } from 'react';
// nativewind
import { styled } from 'nativewind';
// components
import IntegrationImageModal from './IntegrationImageModal';

const StyledView = styled(View);

interface IntegrationImageProps {
    children: React.ReactNode;
    childrenWithBlur?: React.ReactNode;
    done?: boolean;
}

export default function IntegrationImage({
    children,
    childrenWithBlur,
    done,
}: IntegrationImageProps) {
    const [modal, setModal] = useState(false);
    const [isDone, setIsDone] = useState(done);

    return (
        <StyledView className="flex justify-center items-center mb-[10px]">
            {/* done status */}
            {isDone && (
                <StyledView className="absolute right-4 top-4 flex flex-row items-center z-10 bg-white px-[5px] py-[2px] rounded-[5px]">
                    <Text className="text-main_blue text-xs mr-[10px]">
                        Готово
                    </Text>
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/done.svg')}
                    />
                </StyledView>
            )}
            {/* isn`t done status */}
            {!isDone && (
                <TouchableHighlight
                    className="absolute z-10 bg-white px-[15px] py-[5px] rounded-[70px]"
                    onPress={() => setModal(true)}>
                    <StyledView className="flex flex-row items-center ">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/screen.svg')}
                        />
                        <Text className="text-main_blue text-xs ml-[10px]">
                            Выделите нужный участок
                        </Text>
                    </StyledView>
                </TouchableHighlight>
            )}
            {/* Image */}
            {children}
            {/* Modal */}
            {modal && (
                <IntegrationImageModal
                    setModal={setModal}
                    childrenWithBlur={childrenWithBlur}
                    setIsDone={setIsDone}>
                    {children}
                </IntegrationImageModal>
            )}
        </StyledView>
    );
}
