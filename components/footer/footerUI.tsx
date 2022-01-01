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
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


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
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Reach Us</ListHeader>
            <Link>Birla Insitute of Technology,
            </Link>
            <Link>Mesra, Ranchi - 835215</Link>
            <Link>epac@bitmesra.ac.in
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Link>Dr. R. Naresh Kumar</Link>
            <Link>(+91-9801160279)</Link>
            <Link>{" "}</Link>

            <Link>Mahima Prasad</Link>
            <Link>(+91-7070173556)</Link>
            <Link>{" "}</Link>

            <Link>Sudarshan</Link>
            <Link>(+91-9505505276​)</Link>
            <Link>{" "}</Link>


            <Link>Shivani</Link>
            <Link>(+91-7366912904)</Link>
            <Link>{" "}</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14645.335331194405!2d85.439901!3d23.412305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1640932553544!5m2!1sen!2sin" width="450vw" height="350vw" loading="lazy"></iframe>

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
          <Text>© 2021 All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}