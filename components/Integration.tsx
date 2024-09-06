// react-native
import { View } from 'react-native';
// nativewind
import { styled } from 'nativewind';
// types
import { type IntegrationObj } from './IntegrationType';
// components
import IntegrationText from './IntegrationText';
import IntegrationVideo from './IntegrationVideo';
import IntegrationGraphics from './IntegrationGraphics';

const StyledView = styled(View);

interface IntegrationProps {
    integration: IntegrationObj;
}

function Integration({ integration }: IntegrationProps) {
    return (
        <StyledView className="mb-[20px]">
            {integration.value === 'text' && <IntegrationText />}
            {integration.value === 'video' && <IntegrationVideo />}
            {integration.value === 'image' && <IntegrationGraphics />}
        </StyledView>
    );
}

export default Integration;
