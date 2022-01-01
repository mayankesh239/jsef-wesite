import {
    Button,
    Flex,
    Heading,
    // Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import styles from './home.module.scss'

import coverPic from '../../public/cover.webp'
export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} className={styles.bgcol}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                zIndex: -1,
                            }}>
                            <Typewriter
                                options={{
                                    strings: ['JSEF 2021', 'FOR EAST ZONE'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
                        The Jharkhand Science and Environment Festival or The JSEF as it is popularly known, is EPAC (Environment Protection and Awareness Club) BIT Mesra’s flagship event which is organised in the month of January.
                    </Text>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={coverPic}
                />
            </Flex>
        </Stack>
    );
}