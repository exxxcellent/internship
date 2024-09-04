import { styled, useTailwind } from 'nativewind';
import { Image, Text, View } from 'react-native';

const StyledView = styled(View);

export default function IntegrationVideo() {
    return (
        <StyledView>
            <Text className="text-gray-500 mb-[5px] text-xs mx-[15px]">
                Выделите фрагмент видео с Рекламной Интеграцией:
            </Text>
            <StyledView className="bg-white/50 border-substrate border-2 rounded-[20px] py-[15px]">
                <Text className="px-[10px] text-sm mb-[10px]">
                    <Text>
                        <Text className="text-main_blue">Этап 1</Text> из 2:{' '}
                    </Text>
                    <Text>
                        Выберите фрагмент видео, где вы рассказываете о
                        Рекламной Интеграции или продукте
                    </Text>
                </Text>
                {/* video */}
                <StyledView className="mb-[10px]">
                    {/* video snippet */}
                    <Image
                        resizeMode="contain"
                        source={require('../assets/images/video-snippet.png')}
                    />
                    {/* controls */}
                    <StyledView className="absolute left-0 bottom-2 mx-auto w-full px-[15px]">
                        {/* timeline */}
                        <StyledView className="w-full h-[20px]">
                            <StyledView className="bg-substrate w-full h-[2px] absolute top-2"></StyledView>
                            {/* line */}
                            <StyledView className="absolute top-2 bg-main_blue w-1/3 h-[2px]"></StyledView>
                            {/* circle */}
                            <StyledView className="w-2 h-2 absolute left-10 top-1 rounded-full bg-main_blue"></StyledView>
                        </StyledView>
                        {/* video controls */}
                        <StyledView className="flex flex-row">
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/play.svg')}
                                className="mr-[10px]"
                            />
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/replay.svg')}
                                className="mr-[10px]"
                            />
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/forward.svg')}
                                className="mr-[10px]"
                            />
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/volume.svg')}
                                className="mr-[10px]"
                            />
                        </StyledView>
                    </StyledView>
                </StyledView>
                {/* controls */}
                <StyledView className="flex flex-row justify-between p-[15px] bg-substrate">
                    <StyledView className="flex flex-row gap-[5px] items-center">
                        {/* timer */}
                        <StyledView className="px-[10px] py-[7px] bg-white rounded-[5px]">
                            <Text>0:00:00</Text>
                        </StyledView>
                        {/* return button */}
                        <StyledView className="flex flex-row items-center px-[10px] py-[7px] bg-white rounded-[5px]">
                            <Image
                                resizeMode="contain"
                                source={require('../assets/icons/return.svg')}
                                className="mr-[5px]"
                            />
                            <Text className="text-gray-500">Отменить</Text>
                        </StyledView>
                    </StyledView>
                    {/* zoom controls */}
                    <StyledView className="flex flex-row items-center bg-white rounded-[5px] px-[10px] py-[7px]">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/zoom_out.svg')}
                            className="mr-[10px]"
                        />
                        <StyledView className="flex flex-row items-center mr-[10px]">
                            <StyledView className="w-full h-[1px] bg-gray-500 absolute top-auto"></StyledView>
                            <StyledView className="w-2 h-2 rounded-full bg-main_blue mr-[10px]"></StyledView>
                            <StyledView className="w-1 h-1 rounded-full bg-black mr-[10px]"></StyledView>
                            <StyledView className="w-1 h-1 rounded-full bg-black mr-[10px]"></StyledView>
                            <StyledView className="w-1 h-1 rounded-full bg-black mr-[10px]"></StyledView>
                            <StyledView className="w-1 h-1 rounded-full bg-black"></StyledView>
                        </StyledView>
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/zoom_in.svg')}
                        />
                    </StyledView>
                </StyledView>
                {/* video timeline */}
                <StyledView className="bg-substrate p-[15px] flex flex-row items-center">
                    {/* controls */}
                    <StyledView className="flex flex-col mr-[20px]">
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/volume_up.svg')}
                            className="mb-[10px]"
                        />
                        <Image
                            resizeMode="contain"
                            source={require('../assets/icons/videocam.svg')}
                            className="mb-[10px]"
                        />
                    </StyledView>
                    {/* timeline */}
                    <StyledView className="h-[120px] flex flex-col justify-between">
                        <StyledView className="flex flex-row">
                            {new Array(4).fill(0).map((_) => (
                                <StyledView className="w-[120px]">
                                    <StyledView className="absolute h-[120px] w-[2px] bg-gray-300"></StyledView>
                                    <Text className="text-gray-500 px-[5px]">
                                        0:00:00
                                    </Text>
                                    <StyledView className="absolute top-0 w-full h-[80px] flex flex-row items-end gap-x-[2px] px-1 overflow-hidden">
                                        {new Array(40).fill(0).map(() => {
                                            const height = Math.round(
                                                Math.random() * 5
                                            );
                                            const className = `h-[${height}0px] w-[2px] bg-gray-300`;
                                            return (
                                                <StyledView
                                                    className={
                                                        className
                                                    }></StyledView>
                                            );
                                        })}
                                    </StyledView>
                                </StyledView>
                            ))}
                        </StyledView>
                        <StyledView className="flex flex-row">
                            {new Array(40).fill(0).map((item) => (
                                <Image
                                    resizeMode="contain"
                                    source={require('../assets/images/video-snippet.png')}
                                    className="w-[53px] h-[30px] mr-[-30px]"
                                />
                            ))}
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>
        </StyledView>
    );
}
