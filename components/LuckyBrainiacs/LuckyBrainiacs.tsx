import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    Divider,
    HStack,
    Tag,
    Wrap,
    WrapItem,
    SpaceProps,
    useColorModeValue,
    Container,
    VStack,
} from '@chakra-ui/react';

interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
};

interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

const ArticleList = () => {
    return (
        <Container maxW={'7xl'} p="12">
            <Heading as="h1">
            Lucky Brainiacs</Heading>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://res.cloudinary.com/mayankesh/image/upload/v1640929513/jsef/quiz_lno4uk.webp'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    {/* <BlogTags tags={['Engineering', 'Product']} /> */}
                    <Heading marginTop="1">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {/* Themes: */}
                        </Link>
                    </Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        This year, we have introduced a novel event which is an amalgamation of an American BINGO, product restoration and wordplay on the theme of Environment. The first round is a BINGO followed by a round to fabricate a highly efficient restored product. The parameters for judgement will be the product&apos;s use to the environment and its cost-effectiveness. The final round will test the participant&apos;s wordplay and impromptu thinking skills.               </Text>
                </Box>
            </Box>
            <Divider marginTop="5" />
            <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">Join US (at 11 am) </Heading>
                <Text as="p" fontSize="lg">
                To join the video meeting, click this link: <Link href='https://meet.google.com/yur-cxiy-bej'>https://meet.google.com/yur-cxiy-bej</Link>
                {/* <br/>Otherwise, to join by phone, dial +1 347-754-5169 and enter this PIN: 840 912 218# */}
                </Text>
            </VStack>
        </Container>
    );
};

export default ArticleList;