import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Image } from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import { BsSearch, BsMinecartLoaded } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { CgHome } from 'react-icons/cg';

const Navbar = () => (
    <Flex paddingX='2' paddingY='5' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize={{ base:'2xl', sm:'3xl' }} color='gray.600' fontWeight='bold' display='flex' alignItems='center' paddingLeft='2'>
            <Link href='/' passHref><Box w={10} paddingX='1' cursor='pointer'><Image src='/logo.png' /></Box></Link>
            <Link href='/' passHref>Toronto Realty</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<GrMenu />} variant='outline' _focus={{ border: 'none' }} />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<CgHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?TransactionTypeId=2' passHref>
                        <MenuItem icon={<BsMinecartLoaded />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?TransactionTypeId=3' passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;