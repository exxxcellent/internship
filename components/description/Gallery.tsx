// react-native
import { Image, Text } from 'react-native';
// constants
import { gallery, StyledView } from '@/contants';

export default function Gallery() {
    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <Text className="text-gray-500 mb-[5px] px-[15px] text-xs leading-[14.32px] font-sf-pro-d">
                Фотографии продукта:
            </Text>
            <StyledView className="flex flex-col gap-[10px] tablet:flex-row">
                {gallery.map((item) => {
                    // if i paste item.title, node catch internal error. Math operations he ignore -_-
                    const path = `../../assets/images/${(1 + 1) / 2}.png`;
                    return (
                        <StyledView className="p-[10px] min-h-[207px] border-[3px] border-substrate flex items-center justify-center bg-substrate tablet:w-1/4">
                            <Image
                                resizeMode="contain"
                                source={require(path)}
                                className="h-[187px] w-[252px] absolute left-auto top-auto"
                            />
                            <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                                <Image
                                    resizeMode="contain"
                                    source={require('../../assets/icons/download.png')}
                                    className="w-[20px] h-[20px]"
                                />
                                <Image
                                    resizeMode="contain"
                                    source={require('../../assets/icons/zoom.png')}
                                    className="hidden tablet:flex"
                                />
                            </StyledView>
                        </StyledView>
                    );
                })}
                {/* 
                <StyledView className="p-[10px] min-h-[207px] border-[3px] border-substrate flex items-center justify-center bg-substrate tablet:w-1/4">
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/2.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/download.png')}
                            className="w-[20px] h-[20px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/zoom.png')}
                            className="hidden tablet:flex"
                        />
                    </StyledView>
                </StyledView>
                <StyledView className="p-[10px] min-h-[207px] border-[3px] border-substrate flex items-center justify-center bg-substrate tablet:w-1/4">
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/3.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/download.png')}
                            className="w-[20px] h-[20px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/zoom.png')}
                            className="hidden tablet:flex"
                        />
                    </StyledView>
                </StyledView> */}
            </StyledView>
        </StyledView>
    );
}
