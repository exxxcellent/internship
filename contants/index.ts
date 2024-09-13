// react-native
import { View } from 'react-native';
// nativewind
import { styled } from 'nativewind';

export const StyledView = styled(View);

interface Keyword {
    id: number;
    title: string;
}

export const keywords: Keyword[] = [
    {
        id: 0,
        title: 'Товар',
    },
    {
        id: 1,
        title: 'Потрясающий',
    },
    {
        id: 2,
        title: 'Качественный',
    },
    {
        id: 3,
        title: 'Платье',
    },
];

interface GalleryItem {
    id: number;
    title: string;
}

export const gallery: GalleryItem[] = [
    {
        id: 0,
        title: '1',
    },
    {
        id: 1,
        title: '2',
    },
    {
        id: 2,
        title: '3',
    },
];
