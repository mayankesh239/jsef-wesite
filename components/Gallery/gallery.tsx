import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  chakra,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930372/jsef/crousel/gallery1_cahb2o.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930372/jsef/crousel/gallery2_h3p7ef.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930362/jsef/crousel/galllery3_axsqni.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930376/jsef/crousel/gallery4_qusiu5.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930398/jsef/crousel/gallery5_vfl92f.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930383/jsef/crousel/gallery6_qrjdsl.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930380/jsef/crousel/gallery7_v0khtz.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930383/jsef/crousel/gallery8_xf2guu.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930384/jsef/crousel/gallery9_be1xrb.webp'
    },
    {
      image:
        'https://res.cloudinary.com/mayankesh/image/upload/v1640930357/jsef/crousel/gallery10_dycfrj.webp'
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        // charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <chakra.h1
        py={5}
        fontSize={48}
        fontFamily={'Work Sans'}
        fontWeight={'bold'}
        justifyContent={'center'}
        textAlign={'center'}
      >
        GALLERY
      </chakra.h1>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'100vm'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
               {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}