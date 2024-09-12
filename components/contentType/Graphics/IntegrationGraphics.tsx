// react-native
import { Image, Text } from 'react-native';
// components
import IntegrationImage from './IntegrationImage';
// constants
import { StyledView } from '@/contants';

export default function IntegrationGraphics() {
    return (
        <StyledView>
            <Text className="text-gray-500 mb-[5px] text-xs px-[15px] font-sf-pro-d">
                Выделите участок изображения, где представлена Рекламная
                Интеграция или товар:
            </Text>
            <StyledView className="flex flex-col tablet:flex-row laptop:justify-start">
                <IntegrationImage
                    done
                    childrenWithBlur={
                        <Image
                            resizeMode="cover"
                            source={require('../../../assets/images/6.jpg')}
                            blurRadius={10}
                            className="flex-1"
                        />
                    }>
                    <Image
                        resizeMode="cover"
                        source={require('../../../assets/images/6.jpg')}
                        className="h-[284px] tablet:w-[211.33px] tablet:rounded-[20px] tablet:border-[3px] border-substrate"
                    />
                </IntegrationImage>
                <IntegrationImage
                    childrenWithBlur={
                        <Image
                            resizeMode="cover"
                            source={require('../../../assets/images/5.jpg')}
                            blurRadius={10}
                            className="flex-1"
                        />
                    }>
                    <Image
                        resizeMode="cover"
                        source={require('../../../assets/images/5.jpg')}
                        className="tablet:w-[211.33px] tablet:h-[284px] tablet:rounded-[20px] tablet:border-[3px] border-substrate"
                    />
                </IntegrationImage>
                <IntegrationImage
                    childrenWithBlur={
                        <Image
                            resizeMode="cover"
                            source={require('../../../assets/images/4.jpg')}
                            blurRadius={10}
                            className="flex-1"
                        />
                    }>
                    <Image
                        resizeMode="cover"
                        source={require('../../../assets/images/4.jpg')}
                        className="tablet:w-[211.33px] tablet:h-[284px] tablet:rounded-[20px] tablet:border-[3px] border-substrate"
                    />
                </IntegrationImage>
            </StyledView>
        </StyledView>
    );
}
