// react-native
import { Image, StyleSheet, Text, View } from 'react-native';
// react
import { useState } from 'react';
// nativewind
import { styled } from 'nativewind';
// constants
import { colors } from '@/contants/Colors';
// fonts
import { fonts } from '@/assets/fonts/font';
// dropdown
import { Dropdown } from 'react-native-element-dropdown';

const StyledView = styled(View);

export interface IntegrationObj {
    label: string;
    value: string;
}

interface IntegrationTypeProps {
    integration: IntegrationObj;
    setIntegration: (integration: IntegrationObj) => void;
}

function IntegrationType({
    integration,
    setIntegration,
}: IntegrationTypeProps) {
    const [isFocus, setIsFocus] = useState(false);

    const options: IntegrationObj[] = [
        { label: 'Текстовый контент', value: 'text' },
        { label: 'Графический контент', value: 'image' },
        { label: 'Видео контент', value: 'video' },
    ];

    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px] flex-1">
            <Text
                className="text-gray-500 mb-[5px] text-xs"
                style={fonts.font}>
                Выберите тип контента Рекламной Интеграции:
            </Text>
            <Dropdown
                style={[
                    styles.dropdown,
                    isFocus && { borderColor: colors.main_blue },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={options}
                labelField="label"
                valueField="value"
                value={integration}
                placeholder="Выберите тип контента"
                onChange={(item) => {
                    setIntegration(item);
                }}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                renderLeftIcon={() => {
                    if (integration?.value === 'text') {
                        return (
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/text.svg')}
                                className="mr-2"
                            />
                        );
                    } else if (integration?.value === 'image') {
                        return (
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/image.svg')}
                                className="mr-2"
                            />
                        );
                    } else if (integration?.value === 'video') {
                        return (
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/video.svg')}
                                className="mr-2"
                            />
                        );
                    }
                }}
            />
        </StyledView>
    );
}

const styles = StyleSheet.create({
    dropdown: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#EFF2F7',
        padding: 10,
        backgroundColor: colors.inputs,
        fontSize: 14,
    },
    icon: {
        marginRight: 10,
    },
    placeholderStyle: {
        color: '#BDBDBD',
    },
    selectedTextStyle: {
        color: colors.main_blue,
    },
    iconStyle: {
        width: 21,
        height: 21,
    },
});

// export default withExpoSnack(IntegrationType);
export default IntegrationType;
