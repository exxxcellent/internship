// react-native
import { Image, Text, View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';
// components
import IntegrationImage from './IntegrationImage';

const StyledView = styled(View);

export default function IntegrationGraphics() {
    return (
        <StyledView>
            <Text
                className="text-gray-500 mb-[5px] text-xs px-[15px]"
                style={fonts.font}>
                Выделите участок изображения, где представлена Рекламная
                Интеграция или товар:
            </Text>
            <StyledView className="flex flex-col">
                <IntegrationImage
                    done
                    childrenWithBlur={
                        <Image
                            resizeMode="contain"
                            source={require('../assets/images/6.jpg')}
                            blurRadius={10}
                        />
                    }>
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/6.jpg')}
                    />
                </IntegrationImage>
                <IntegrationImage
                    childrenWithBlur={
                        <Image
                            resizeMode="contain"
                            source={require('../assets/images/5.jpg')}
                            blurRadius={10}
                        />
                    }>
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/5.jpg')}
                    />
                </IntegrationImage>
                <IntegrationImage
                    childrenWithBlur={
                        <Image
                            resizeMode="contain"
                            source={require('../assets/images/4.jpg')}
                            blurRadius={10}
                        />
                    }>
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/4.jpg')}
                    />
                </IntegrationImage>
            </StyledView>
        </StyledView>
    );
}
