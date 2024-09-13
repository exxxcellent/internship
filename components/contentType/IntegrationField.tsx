// react-native
import { Image, Platform, Text, TextInput } from 'react-native';
// react
import { useState } from 'react';
// constants
import { StyledView } from '@/contants';
// helpers
import { validateUrl } from '@/helpers/validateUrl';

export default function IntegrationField() {
    const [isValid, setIsValid] = useState(false);

    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px] flex-1">
            <Text className="text-gray-500 mb-[5px] text-xs leading-[14.32px] font-sf-pro-d">
                Вставьте ссылку на вашу Рекламную Интеграцию:
            </Text>
            <StyledView className="flex flex-row justify-between items-center bg-[#F7F9FB] rounded-[20px] p-[10px]">
                <TextInput
                    className="border-[1] border-substrate text-main_blue flex-1 mr-[10px] leading-[16.94px]"
                    style={[
                        Platform.OS === 'web' && {
                            outlineStyle: 'none',
                        },
                    ]}
                    inputMode="url"
                    onChangeText={(event) => {
                        if (validateUrl(event.valueOf())) {
                            setIsValid(true);
                        } else {
                            setIsValid(false);
                        }
                    }}
                />
                {isValid && (
                    <Image
                        resizeMode="contain"
                        className="w-6 h-6"
                        source={require('../../assets/icons/done.png')}
                    />
                )}
            </StyledView>
        </StyledView>
    );
}
