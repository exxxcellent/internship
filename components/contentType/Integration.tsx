// types
import { type IntegrationObj } from './IntegrationType';
// components
import IntegrationText from './Text/IntegrationText';
import IntegrationVideo from './Video/IntegrationVideo';
import IntegrationGraphics from './Graphics/IntegrationGraphics';
// constants
import { StyledView } from '@/contants';

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
