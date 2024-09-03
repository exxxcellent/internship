// react-native
import { Button, Modal, ScrollView, View } from 'react-native';
// react
import { useState } from 'react';
// nativewind
import { styled } from 'nativewind';
// components
import Header from '@/components/Header';
import Description from '@/components/Description';
import KeywordsForAdvertising from '@/components/KeywordsForAdvertising';
import Gallery from '@/components/Gallery';
import SocialMedia from '@/components/SocialMedia';
import IntegrationType, {
    type IntegrationObj,
} from '@/components/IntegrationType';
import IntegrationField from '@/components/IntegrationField';
import Integration from '@/components/Integration';
import SendButton from '@/components/SendButton';

const StyledView = styled(View);

export default function HomeScreen() {
    const [modal, setModal] = useState(false);

    const [integration, setIntegration] = useState<IntegrationObj>({
        label: '',
        value: '',
    });

    return (
        <ScrollView className="bg-[#EFF2F7]">
            {modal && (
                <Modal>
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
        </ScrollView>
    );
}
