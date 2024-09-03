import { fonts } from '@/assets/fonts/font';
import { colors } from '@/contants/Colors';
import { styled, withExpoSnack } from 'nativewind';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const StyledView = styled(View);

interface IntegrationObj {
    label: string;
    value: string;
}

function IntegrationType() {
    const [integration, setIntegration] = useState<IntegrationObj>();
    const [isFocus, setIsFocus] = useState(false);

    const options: IntegrationObj[] = [
        { label: 'Текстовый контент', value: 'text' },
        { label: 'Графический контент', value: 'image' },
        { label: 'Видео контент', value: 'video' },
    ];

    return (
        <StyledView className="px-[15px] mb-[20px]">
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
                onChange={(item) => setIntegration(item)}
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

export default withExpoSnack(IntegrationType);
