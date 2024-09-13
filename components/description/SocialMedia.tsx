// react-native
import { Image, Text, TouchableHighlight } from 'react-native';
// react
import { useState } from 'react';
// contants
import { StyledView } from '@/contants';
import { colors } from '@/contants/Colors';

type SocialMedia = 'Telegram' | 'Youtube' | 'Instagram' | '';

export default function SocialMedia() {
    const [selectedSocial, setSelectedSocial] = useState<SocialMedia>('');

    return (
        <StyledView className="mb-[20px] mx-[15px] tablet:mx-[25px]">
            <Text className="text-gray-500 mb-[5px] text-xs leading-[14.32px] font-sf-pro-d">
                Выберите социальную сеть для Рекламной Интеграции:
            </Text>
            <StyledView className="flex flex-row gap-x-[10px]">
                <TouchableHighlight
                    onPress={() => setSelectedSocial('Telegram')}>
                    <StyledView
                        className="flex flex-row items-center p-[10px] rounded-[15px]"
                        style={{
                            backgroundColor:
                                selectedSocial === 'Telegram'
                                    ? colors.main_blue
                                    : 'rgba(255 255 255 / 0.5)',
                        }}>
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/Telegram.png')}
                        />
                        <Text
                            className="ml-[10px] text-white leading-[16.71px] font-sf-pro-d-m"
                            style={{
                                color:
                                    selectedSocial === 'Telegram'
                                        ? '#FFFFFF'
                                        : '#00000080',
                            }}>
                            Telegram
                        </Text>
                    </StyledView>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => setSelectedSocial('Youtube')}>
                    <StyledView
                        className="flex flex-row items-center p-[10px] rounded-[15px]"
                        style={{
                            backgroundColor:
                                selectedSocial === 'Youtube'
                                    ? colors.main_blue
                                    : 'rgba(255 255 255 / 0.5)',
                        }}>
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/Youtube.png')}
                        />
                        <Text
                            className="ml-[10px] text-white leading-[16.71px] font-sf-pro-d-m"
                            style={{
                                color:
                                    selectedSocial === 'Youtube'
                                        ? '#FFFFFF'
                                        : '#00000080',
                            }}>
                            Youtube
                        </Text>
                    </StyledView>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => setSelectedSocial('Instagram')}>
                    <StyledView
                        className="flex flex-row items-center p-[10px] rounded-[15px]"
                        style={{
                            backgroundColor:
                                selectedSocial === 'Instagram'
                                    ? colors.main_blue
                                    : 'rgba(255 255 255 / 0.5)',
                        }}>
                        <Image
                            resizeMode="contain"
                            source={require('../../assets/icons/Instagram.png')}
                        />
                        <Text
                            className="ml-[10px] text-white leading-[16.71px] font-sf-pro-d-m"
                            style={{
                                color:
                                    selectedSocial === 'Instagram'
                                        ? '#FFFFFF'
                                        : '#00000080',
                            }}>
                            Instagram
                        </Text>
                    </StyledView>
                </TouchableHighlight>
            </StyledView>
        </StyledView>
    );
}
