// react-native
import { Image, Text, TouchableHighlight } from 'react-native';
// react
import React, { useState } from 'react';
// components
import IntegrationImageModal from './IntegrationImageModal';
// constants
import { StyledView } from '@/contants';

interface IntegrationImageProps {
    children: React.ReactNode;
    childrenWithBlur?: React.ReactNode;
    done?: boolean;
}

export type SelectedArea = {
    width: number;
    height: number;
    x: number;
    y: number;
};

export default function IntegrationImage({
    children,
    childrenWithBlur,
    done,
}: IntegrationImageProps) {
    const [modal, setModal] = useState(false);
    const [isDone, setIsDone] = useState(done);

    const [selectedArea, setSelectedArea] = useState<SelectedArea>({
        width: 52,
        height: 100,
        x: 0,
        y: 0,
    });

    const classNameForSelectedArea = `absolute z-10 border-dashed border-main_blue border-2 bg-[#FFFFFF80] flex items-center justify-center 
    w-[${selectedArea.width}px] 
    h-[${selectedArea.height}px] 
    left-[${selectedArea.x}px] 
    top-[${selectedArea.y}px]`;

    return (
        <StyledView className="flex justify-center items-center mb-[10px] tablet:w-1/3 laptop:w-[220px] tablet:h-[284px]">
            {/* done status */}
            {isDone && (
                <StyledView className="absolute right-4 top-4 flex flex-row items-center z-10 bg-white px-[10px] py-[2px] rounded-[10px] tablet:right-5 tablet:top-2">
                    <Text className="text-main_blue text-xs mr-[5px] font-sf-pro-d">
                        Готово
                    </Text>
                    <Image
                        resizeMode="contain"
                        source={require('../../../assets/icons/done.svg')}
                    />
                </StyledView>
            )}
            {isDone && (
                <StyledView className={classNameForSelectedArea}></StyledView>
            )}
            {/* isn`t done status */}
            {!isDone && (
                <TouchableHighlight
                    className="absolute z-10 bg-white px-[15px] py-[5px] rounded-[70px]"
                    onPress={() => setModal(true)}>
                    <StyledView className="flex flex-row items-center ">
                        <Image
                            resizeMode="contain"
                            source={require('../../../assets/icons/screen.svg')}
                        />
                        <Text className="text-main_blue text-xs ml-[10px] font-sf-pro-d">
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
                    setIsDone={setIsDone}
                    setSelectedArea={setSelectedArea}>
                    {children}
                </IntegrationImageModal>
            )}
        </StyledView>
    );
}
