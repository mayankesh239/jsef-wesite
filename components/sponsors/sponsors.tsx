import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    chakra,
} from '@chakra-ui/react';

const NEEV =
    'https://res.cloudinary.com/mayankesh/image/upload/v1645210365/jsef/neev_r9k9q5.jpg'

const AGLASEM =
    'https://res.cloudinary.com/mayankesh/image/upload/v1645210371/jsef/aglasem_onycnk.jpg'

    export default function ProductSimple() {
    return (
        <>
            <chakra.h1
                py={5}
                fontSize={48}
                fontFamily={'Work Sans'}
                fontWeight={'bold'}
                justifyContent={'center'}
                textAlign={'center'}
            >
                OUR SPONSORS
            </chakra.h1>
            <Center py={10}>

                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${NEEV})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={NEEV}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            NEEV
                        </Text> */}
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            NEEV
                        </Heading>
                        {/* <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack> */}
                    </Stack>
                </Box>


                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${AGLASEM})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={AGLASEM}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text> */}
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            AGLASEM
                        </Heading>
                        {/* <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack> */}
                    </Stack>
                </Box>
                {/* <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box> */}
            </Center>

            {/* <Center py={10}> */}
                {/* <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box> */}


                {/* <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box> */}
                {/* <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            alt="image"
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                $57
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                $199
                            </Text>
                        </Stack>
                    </Stack>
                </Box> */}
            {/* </Center> */}
        </>
    );
}