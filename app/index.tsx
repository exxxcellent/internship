// react-native
import { Button, Modal, ScrollView } from 'react-native';
// react
import { useState } from 'react';
// components
import Header from '@/components/Header';
import Description from '@/components/Description';
import KeywordsForAdvertising from '@/components/KeywordsForAdvertising';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';
import SendButton from '@/components/SendButton';
import IntegrationType, {
    type IntegrationObj,
} from '@/components/contentType/IntegrationType';
import IntegrationField from '@/components/contentType/IntegrationField';
import Integration from '@/components/contentType/Integration';
// contants
import { StyledView } from '@/contants';
// lib
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// expo
import { useFonts } from 'expo-font';

export default function HomeScreen() {
    const [loaded, error] = useFonts({
        'sf-pro-display': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
        'sf-pro-display-500': require('../assets/fonts/SF-Pro-Display-Medium.otf'),
        'sf-pro-display-700': require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
        inter: require('../assets/fonts/Inter-Regular.ttf'),
        'inter-500': require('../assets/fonts/Inter-Medium.ttf'),
        'inter-700': require('../assets/fonts/Inter-Bold.ttf'),
    });

    const [modal, setModal] = useState(false);

    const [integration, setIntegration] = useState<IntegrationObj>({
        label: '',
        value: '',
    });

    return (
        <GestureHandlerRootView className="bg-[#EFF2F7] flex-1 w-full items-center justify-center">
            {modal && (
                <Modal className="bg-[#EFF2F7]">
                    <ScrollView>
                        <Header setModal={setModal} />
                        <Description />
                        <KeywordsForAdvertising />
                        <Gallery />
                        <SocialMedia />
                        <StyledView className="flex tablet:flex-row justify-between tablet:gap-x-[20px] ml-0">
                            <IntegrationType
                                integration={integration}
                                setIntegration={setIntegration}
                            />
                            <IntegrationField />
                        </StyledView>
                        <Integration integration={integration} />
                        <SendButton setModal={setModal} />
                    </ScrollView>
                </Modal>
            )}
            {!modal && (
                <Button
                    title="Открыть интеграцию"
                    onPress={() => setModal(true)}
                />
            )}
        </GestureHandlerRootView>
    );
}
