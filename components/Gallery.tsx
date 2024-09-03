import { fonts } from '@/assets/fonts/font';
import { styled, withExpoSnack } from 'nativewind';
import { Image, Text, View } from 'react-native';

const StyledView = styled(View);

function Gallery() {
    return (
        <StyledView className="mb-[20px]">
            <Text
                className="text-gray-500 mb-[5px] px-[15px] text-xs"
                style={fonts.font}>
                Фотографии продукта:
            </Text>
            <StyledView className="flex flex-col gap-[10px]">
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/1.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/download.svg')}
                        className="absolute w-[20px] h-[20px] right-4 top-4"
                    />
                </StyledView>
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/2.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/download.svg')}
                        className="absolute w-[20px] h-[20px] right-4 top-4"
                    />
                </StyledView>
                <StyledView className="p-[10px] min-h-[207px] border-3 border-substrate flex items-center justify-center bg-substrate">
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/3.png')}
                        className="h-[187px] w-[252px] absolute left-auto top-auto"
                    />
                    <Image
                        resizeMode="contain"
                        source={require('../assets/icons/download.svg')}
                        className="absolute w-[20px] h-[20px] right-4 top-4"
                    />
                </StyledView>
            </StyledView>
        </StyledView>
    );
}

export default withExpoSnack(Gallery);
