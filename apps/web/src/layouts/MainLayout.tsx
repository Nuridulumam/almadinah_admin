import React  from 'react';
import { Outlet } from "react-router-dom";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Image,
    Divider,
} from '@chakra-ui/react';
import {
    FiUsers,
    FiSettings,
    FiMenu,
    FiGrid,
    FaMoneyCheck,
    HiOutlineInformationCircle,
    TiDocumentText,
    FaPrint,
    FaUser, FiLogOut
} from 'react-icons/all';
import { IconType } from 'react-icons';

import Logo from '../assets/al-madinah-rbg.svg';

interface LinkItemProps {
    name: string;
    icon: IconType;
    url: string;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiGrid, url: "/dashboard"},
    //*user-pendaftaran
    { name: 'Beranda', icon: FiGrid, url: "/beranda"},
    { name: 'Informasi Pendaftaran', icon: HiOutlineInformationCircle, url: ""},
    { name: 'Formulir Pendaftaran', icon: TiDocumentText, url: ""},
    { name: 'Cetak Bukti Pendaftaran', icon: FaPrint, url: ""},
    //*admin-pendaftaran
    { name: 'Calon Santri', icon: FiUsers, url: "/santri" },
    { name: 'Pendaftaran SMA', icon: FaUser, url: "" },
    { name: 'Pendaftaran SMP', icon: FaUser, url: "" },
    { name: 'Pembayaran', icon: FaMoneyCheck, url: "" },
    { name: 'Manajemen', icon: FiSettings, url: "/manajemen" },
];

export default function SimpleSidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }}>
                <Outlet/>
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('teal.500', 'teal.900')}
            color={useColorModeValue('white', 'white.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            overflowY={'auto'}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '0.6rem',
                    borderRadius: '8px',
                    backgroundColor: `rgba(0, 0, 0, 0.05)`,
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '8px',
                    backgroundColor: `rgba(255, 255, 255, 0.7)`,
                },
            }}
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Image
                    w={['20px','20px','40px','40px']}
                    objectFit='cover'
                    src={Logo}
                    alt='logo-almadinah'
                />
                <Divider orientation={'vertical'} height={'50%'} borderColor={'white'}/>
                <Text
                    fontWeight={700}
                    fontSize={20}
                >Admin</Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} url={link.url}>
                    {link.name}
                </NavItem>
            ))}
            <Box position={'sticky'} bottom={'0'}>
                <NavItem icon={FiLogOut} url={"/"}>{"Logout"}</NavItem>
            </Box>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    url: string;
}
const NavItem = ({ icon, children, url }: NavItemProps) => {
    return (
        <Link href={url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx={icon === FiLogOut ? 0 : 4}
                borderRadius={icon === FiLogOut ? "" : "lg"}
                role="group"
                cursor="pointer"
                _hover={{
                    bg: icon === FiLogOut ? "" : "teal.400",
                    color: 'white',
                }}
                bgColor={icon === FiLogOut ? 'red.500' : ''}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                Admin
            </Text>
        </Flex>
    );
};