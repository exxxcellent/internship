import { styled } from 'nativewind';
import { Text, View } from 'react-native';
import { IntegrationObj } from './IntegrationType';
import IntegrationText from './IntegrationText';

const StyledView = styled(View);

interface IntegrationProps {
    integration: IntegrationObj;
}

function Integration({ integration }: IntegrationProps) {
    return (
        <StyledView className="mb-[20px]">
            {integration.value === 'text' && <IntegrationText />}
            {integration.value === 'video' && (
                <Text className="mx-auto text-main_blue">Видео контент</Text>
            )}
            {integration.value === 'image' && (
                <Text className="mx-auto text-main_blue">
                    Графический контент
                </Text>
            )}
        </StyledView>
    );
}

// export default withExpoSnack(IntegrationType);
export default Integration;
