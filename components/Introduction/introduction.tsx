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
                        The Environment Protection and Awareness Club (EPAC) is a registered club of this hallowed institution and was set up in BIT, Mesra on 5th of September 2011 and has been one of the most industrious clubs of BIT Mesra ever since. It has been expanding its activities by leaps and bounds and has been deeply influencing the youth of BIT to work towards the holy and all-important cause of protection of the Environment. In this hallowed institution shall EPAC’s endeavour begin, which shall never culminate because protecting the environment is not just a journey that is destined to end, it’s a sacred responsibility for each and every one.
                    </Text>

                    <Heading>Jharkhand Science and Environment Festival (JSEF)

                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                    The Jharkhand Science and Environment Festival or The JSEF as it is popularly known, is EPAC (Environment Protection & Awareness Club) BIT Mesra’s flagship event which is organised in the month of January. This is an annual competition which has been organised successively for the past 9 years for school and college students. The fest features a plethora of enthralling events related to science and environment conservation. For the first time ever, JSEF ’20 will be expanding into East India into the states of Bihar, West Bengal, Odisha and Chattisgarh after multiple requests for involvement from premier institutions of these states.                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
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
                        />
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