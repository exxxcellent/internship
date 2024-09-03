import Description from '@/components/Description';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import IntegrationField from '@/components/IntegrationField';
import IntegrationText from '@/components/IntegrationText';
import IntegrationType from '@/components/IntegrationType';
import KeywordsForAdvertising from '@/components/KeywordsForAdvertising';
import SocialMedia from '@/components/SocialMedia';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <ScrollView className="bg-[#EFF2F7]">
            <Header />
            <Description />
            <KeywordsForAdvertising />
            <Gallery />
            <SocialMedia />
            <IntegrationType />
            <IntegrationField />
            <IntegrationText />
        </ScrollView>
    );
}
