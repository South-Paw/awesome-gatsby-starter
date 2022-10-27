import {
  Box,
  Button,
  ButtonProps,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  forwardRef,
  HStack,
  IconButton,
  IconButtonProps,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { Container } from '../Container';
import { Logo } from '../Logo';

const NavItem = forwardRef<ButtonProps, 'button'>((props, ref) => (
  <Button
    ref={ref}
    variant="link"
    color="white"
    opacity={0.7}
    _hover={{ opacity: 1 }}
    _focus={{ opacity: 1 }}
    _active={{ color: 'white' }}
    sx={{ '&.active': { opacity: 1 } }}
    {...props}
  />
));

const NavIconItem = forwardRef<IconButtonProps, 'button'>((props, ref) => (
  <IconButton
    ref={ref}
    variant="link"
    color="white"
    opacity={0.7}
    _hover={{ opacity: 1 }}
    _focus={{ opacity: 1 }}
    _active={{ color: 'white' }}
    {...props}
  />
));

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Box as="header" borderBottomWidth={4} bgGradient="linear(135deg, purple.900, blue.700)">
        <Container py={4}>
          <HStack spacing={8} justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex as="nav" flex="1" justify="space-between">
                <HStack spacing={8}>
                  <NavItem as={Link} to="/" activeClassName="active">
                    Home
                  </NavItem>
                </HStack>

                <HStack spacing={8}>
                  <NavIconItem
                    as="a"
                    href="//github.com/South-Paw/awesome-gatsby-starter"
                    target="_blank"
                    icon={<SiGithub fontSize="1.5rem" />}
                    aria-label="GitHub"
                  />
                </HStack>
              </Flex>
            ) : (
              <IconButton
                aria-label="Menu"
                icon={<HiMenu fontSize="1.25rem" />}
                variant="link"
                color="white"
                _active={{ color: 'white' }}
                onClick={onOpen}
              />
            )}
          </HStack>
        </Container>
      </Box>

      {!isDesktop && (
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent maxW="80vw">
            <Box borderBottomWidth={4} bgGradient="linear(135deg, purple.900, blue.700)">
              <Container py={4}>
                <HStack spacing={8} justify="space-between">
                  <Logo />
                </HStack>
              </Container>
            </Box>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
