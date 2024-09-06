// react-native
import { Text, View } from 'react-native';
// nativewind
import { styled, withExpoSnack } from 'nativewind';
// fonts
import { fonts } from '@/assets/fonts/font';

const StyledView = styled(View);

function Description() {
    return (
        <StyledView className="flex flex-col gap-[5px] mb-[20px] tablet:mx-[25px]">
            <Text
                className="text-gray-500 text-xs px-[15px]"
                style={fonts.font}>
                Описание задачи:
            </Text>
            <StyledView className="flex flex-col rounded-[20px] p-[15px] bg-substrate">
                <Text
                    className="mb-[10px]"
                    style={fonts.font}>
                    HDRT Fashion House
                </Text>
                <Text
                    className="mb-[10px]"
                    style={fonts.font}>
                    Создание оригинального контента, демонстрирующего новую
                    линию весенних платьев XYZ Fashion House. Видеоролики должны
                    быть яркими и привлекательными, а фотографии - высокого
                    качества.{' '}
                </Text>
                <Text style={fonts.font}>
                    В описании каждого поста необходимо использовать хэштег{' '}
                    <Text
                        className="text-main_blue"
                        style={fonts.font}>
                        #HDRTFashionSpring
                    </Text>{' '}
                    и упоминать бренд HDRT Corporation.
                </Text>
            </StyledView>
        </StyledView>
    );
}

export default withExpoSnack(Description);
