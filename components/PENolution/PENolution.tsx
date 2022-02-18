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
    Button,
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
                PENolution</Heading>
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
                                    'https://res.cloudinary.com/mayankesh/image/upload/v1643109260/jsef/PENolution_cdqggz.jpg'
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
                        “The pen is mightier than the sword.”
                        <br />Revolutions and radical ideas are best conveyed via simple words understood en masse. Not everyone writes words that sway people and win them over; only a certain few have the skill to do so. In “PENolution” (a concatenation of pen and revolution), the participants&apos; grasp on environmental issues and eco-friendly practices are tested in the form of an essay where their eloquence and their hand on language will be deciding factor. The topic of the essay will be shared the day before the event.           </Text>
                    <br /> <a href="https://forms.gle/7G8gXyGZD1Ry796x6">
                        <Button colorScheme='teal' size='md'>
                            SUBMIT HERE
                        </Button>
                    </a>
                </Box>
            </Box>
            <Divider marginTop="5" />
            {/* <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
                <Heading as="h2">SUBMISSION</Heading>

            </VStack> */}
        </Container>
    );
};

export default ArticleList;