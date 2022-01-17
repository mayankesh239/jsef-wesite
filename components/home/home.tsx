import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Link
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
                                    strings: ['JSEF 2022', 'FOR EAST ZONE'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
                        JSEF is our flagship event held every year in January and February.
                        With this event, we aim to encourage the young generation to protect
                        and preserve the environment. JSEF is a multi-day fest filled with
                        enthralling events such as debates, model making and AdSense.
                        JSEF is also one of the largest Science-Environmental fests in the
                        East zone with the participation of more than 25+ schools and 500
                        students.
                        {/* <Link
                            href="/"
                        >
                            Click Me
                        </Link> */}
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