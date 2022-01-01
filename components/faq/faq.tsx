import React from 'react'
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    chakra,
} from '@chakra-ui/react';
const faq = () => {
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
                FAQs
            </chakra.h1>
            <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Is JSEF'20 a two-day fest?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Yes, JSEF'21 is being held on 1st February for school students and on 2nd February for College students.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Will on-spot registrations be entertained?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Yes, but are not encouraged.

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Will the travelling charges be reimbursed?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            No.

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Where will the students and teachers stay if they seek accommodation?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Accommodations shall be provided in girls and boys hostel respectively.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    What is the registration fee and payment process for school students?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            You can find the registration and payment details here: http://bit.ly/35eug0l
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    Which class-group students can participate?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            School students from grades 6 to 12 can participate.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </>
    )
}

export default faq
