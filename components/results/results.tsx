import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const PENolution = {
    imageURL:
        'https://res.cloudinary.com/mayankesh/image/upload/v1645944811/jsef/penolution_lovoyq.jpg',
};

const S = {
    imageURL:
        'https://res.cloudinary.com/mayankesh/image/upload/v1645946045/jsef/adsense_j8mojk.jpg',
};



const Lucky_Brainiacs = {
    imageURL:
        'https://res.cloudinary.com/mayankesh/image/upload/v1645944810/jsef/luckybrainiacs_vohwvn.jpg',
};


const Speak_to_Lead = {
    imageURL:
        'https://res.cloudinary.com/mayankesh/image/upload/v1645944811/jsef/speaktolead_grufvw.jpg',
};



function ProductAddToCart() {
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
                RESULTS
            </chakra.h1>
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={PENolution.imageURL}
                        roundedTop="lg"
                    />
                </Box>


                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={S.imageURL}
                        roundedTop="lg"
                    />
                </Box>
            </Flex>

            <Flex p={50} w="full" alignItems="center" justifyContent="center">
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={Lucky_Brainiacs.imageURL}
                        roundedTop="lg"
                    />
                </Box>


                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">

                    <Image
                        src={Speak_to_Lead.imageURL}
                        roundedTop="lg"
                    />
                </Box>
            </Flex>

        </>
    );
}

export default ProductAddToCart;