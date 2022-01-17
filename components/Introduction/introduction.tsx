import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function SplitWithImage() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'2vw'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Introduction
                    </Text>
                    <Heading>Environment Protection and Awareness Club, BIT Mesra
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        The Environment Protection and Awareness Club, of BIT Mesra,
                        popularly known as EPAC, is a club whose motive is to in fuse
                        awareness about the detrimental effects caused by overexploitation
                        of natural resources. We as a student body aim to improvise the
                        existing systems to favour nature. We create awareness fun events
                        and choose to never stop even if the world shuts down.
                        <br />Because the Earth needs us! And we firmly believe that the young
                        minds of today&apos;s generation can be the start of a massive change
                        that helps humanity to survive longer on their beloved planet.
                    </Text>

                    <Heading>Jharkhand Science and Environment Festival (JSEF)

                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        JSEF is our flagship event held every year in January and February.
                        With this event, we aim to encourage the young generation to protect
                        and preserve the environment. JSEF is a multi-day fest filled with
                        enthralling events such as debates, model making and AdSense.
                        JSEF is also one of the largest Science-Environmental fests in the
                        East zone with the participation of more than 25+ schools and 500
                        students.
                        <br />JSEF has been restricted to the East zone for the past few years but
                        this year we have decided to spread our wings to the entire country.
                        JSEF 2022 will be held online.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        {/* <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Business Planning'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Financial Planning'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Market Analysis'}
                        /> */}
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://res.cloudinary.com/mayankesh/image/upload/v1640925001/jsef/intro_w7pive.webp'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}