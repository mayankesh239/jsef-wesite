import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';


const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={20}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>REACH US</ListHeader>
            <Text>Birla Insitute of Technology,
            </Text>
            <Text>Mesra, Ranchi - 835215</Text>
            <Text>Email: epac@bitmesra.ac.in
            </Text>
            <Link href="https://epacbitmesra.in/" isExternal>
              Our Website <ExternalLinkIcon mx='2px' />
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CONTACTS</ListHeader>
            <Text>DHYAN</Text>
            <Text>(+91-9523952623)</Text>
            <Link>{" "}</Link>

            <Text>TANYA</Text>
            <Text>(+91-9934412901)</Text>
            <Link>{" "}</Link>

            <Text>PRIYANSH</Text>
            <Text>(+91-6203993196)</Text>
            <Link>{" "}</Link>

          </Stack>

          <Stack align={'flex-start'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14645.335331194405!2d85.439901!3d23.412305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1640932553544!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>

          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/epacbitmesra/'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/company/epac-bitmesra/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/epac.bitmesra/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Youtube'} href={'https://www.youtube.com/channel/UCRbqoNdFxhiyIfZ6sRLAknw'}>
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}