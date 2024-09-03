// react-native
import { Image, Text, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

export default function Gallery() {
    return (
        <StyledView className="mb-[20px] tablet:mx-[25px]">
            <Text
                className="text-gray-500 mb-[5px] px-[15px] text-xs"
                style={fonts.font}>
                Фотографии продукта:
            </Text>
            <StyledView className="flex flex-col gap-[10px] tablet:flex-row tablet:justify-start">
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate tablet:w-1/4 border-substrate border-3 rounded-[20px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/1.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/download.svg')}
                            className="w-[20px] h-[20px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/zoom.svg')}
                            className="hidden tablet:flex"
                        />
                    </StyledView>
                </StyledView>
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate tablet:w-1/4 border-substrate border-3 rounded-[20px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/2.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/download.svg')}
                            className="w-[20px] h-[20px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/zoom.svg')}
                            className="hidden tablet:flex"
                        />
                    </StyledView>
                </StyledView>
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate tablet:w-1/4 border-substrate border-3 rounded-[20px]">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/3.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <StyledView className="absolute right-4 top-4 flex flex-row gap-[10px]">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/download.svg')}
                            className="w-[20px] h-[20px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/zoom.svg')}
                            className="hidden tablet:flex"
                        />
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}
