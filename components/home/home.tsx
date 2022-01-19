import {
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
    Link,
    Image,
} from '@chakra-ui/react';
import Img from 'next/image'
import Typewriter from "typewriter-effect";
import styles from './home.module.scss'
import { Button, ButtonGroup } from '@chakra-ui/react'
import coverPic from '../../public/cover.webp'
export default function SplitScreen() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} className={styles.bgcol}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Image boxSize='300px' src='https://res.cloudinary.com/mayankesh/image/upload/v1642593183/jsef/JSEFlogo_dsrxya.png' alt='JSEF' />
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
                                    strings: ['EPAC PRESENTS', 'JSEF 2022'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Text>
                        <br />{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black.500'}>
                        Jharkhand Science and Environment Festival (JSEF) is our flagship event held every year in January and February.
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
                    <a href="https://forms.gle/47gscWtv3CVUBAZH9">
                        <Button colorScheme='teal' size='md'>
                            REGISTER HERE
                        </Button>
                    </a>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Img
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={coverPic}
                />
            </Flex>
        </Stack>
    );
}