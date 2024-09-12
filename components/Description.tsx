// react-native
import { Text } from 'react-native';
// nativewind
import { withExpoSnack } from 'nativewind';
// contants
import { StyledView } from '@/contants';
// expo
import { useFonts } from 'expo-font';

function Description() {
    const [loaded, error] = useFonts({
        'sf-pro-display': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
        'sf-pro-display-500': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
        'sf-pro-display-700': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
        inter: require('../assets/fonts/Inter-Regular.ttf'),
        'inter-500': require('../assets/fonts/Inter-Medium.ttf'),
        'inter-700': require('../assets/fonts/Inter-Bold.ttf'),
    });

    return (
        <StyledView className="flex flex-col gap-[5px] mb-[20px] tablet:mx-[25px]">
            <Text className="text-gray-500 text-xs leading-[14.32px] px-[15px] font-sf-pro-d">
                Описание задачи:
            </Text>
            <StyledView className="flex flex-col rounded-[20px] p-[15px] bg-substrate">
                <Text className="mb-[10px] leading-[16.8px] font-medium font-sf-pro-d-m">
                    HDRT Fashion House
                </Text>
                <Text className="mb-[10px] leading-[16.8px] font-sf-pro-d">
                    Создание оригинального контента, демонстрирующего новую
                    линию весенних платьев XYZ Fashion House. Видеоролики должны
                    быть яркими и привлекательными, а фотографии - высокого
                    качества.{' '}
                </Text>
                <Text className="leading-[16.8px] font-sf-pro-d">
                    В описании каждого поста необходимо использовать хэштег{' '}
                    <Text className="text-main_blue">#HDRTFashionSpring</Text> и
                    упоминать бренд HDRT Corporation.
                </Text>
            </StyledView>
        </StyledView>
    );
}

export default withExpoSnack(Description);
