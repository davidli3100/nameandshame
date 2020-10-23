import React from "react";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    Text,
    useDisclosure,
    DrawerCloseButton,
} from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";
import { Desktop, Mobile, isMobile } from "../MediaQueries";

const NavItem = ({ title, path, highlight }) => {
    // uses inline equality op to match pathnames to active path
    const isActive = useLocation().pathname === path;

    return (
        <Text
            fontWeight={highlight ? "700" : "600"}
            marginRight="24px"
            margin={isMobile() && "auto"}
            fontSize={isMobile() && "20px"}
            marginBottom={isMobile() && "16px"}
            color={
                isActive
                    ? "blueGray.900"
                    : highlight
                    ? "blue.600"
                    : "blueGray.700"
            }
            marginTop={highlight && "24px"}
        >
            <Link to={path}>{title}</Link>
        </Text>
    );
};

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Desktop>
                <Box
                    display="flex"
                    flexDirection="row"
                    width="100%"
                    px="80px"
                    height="72px"
                    alignItems="center"
                    boxShadow="0px 1.25px 0px #F3F4F4"
                >
                    <Text
                        fontWeight="black"
                        color="blue.900"
                        fontSize={["20px", null, null, "24px"]}
                    >
                        <Link to="/">NameandShame</Link>
                    </Text>
                    <Box display="flex" flexDirection="row" marginLeft="64px">
                        <NavItem title="Browse" path="/" />
                        <NavItem title="About" path="/about" />
                        <NavItem title="Careers" path="/careers" />
                    </Box>
                    <Button
                        as={Link}
                        to="/report"
                        marginLeft="auto"
                        variantColor="primary"
                        borderRadius="6px"
                        px="16px"
                    >
                        Submit a Report
                    </Button>
                </Box>
            </Desktop>
            <Mobile>
                <Box
                    width="100%"
                    px="20px"
                    height="52px"
                    boxShadow="0px 1.25px 0px #F3F4F4"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                >
                    <IconButton
                        onClick={onOpen}
                        icon="hero_menu"
                        fontSize="22px"
                        color="blue.900"
                        variantColor="blue.900"
                    />
                    <Text
                        fontWeight="black"
                        color="blue.900"
                        fontSize={["20px", null, null, "24px"]}
                        position="relative"
                        margin="auto"
                        left="-12px"
                    >
                        <Link to="/">NameandShame</Link>
                    </Text>
                </Box>
                <Drawer
                    placement="left"
                    isOpen={isOpen}
                    onClose={onClose}
                    size="xs"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Box
                                display="flex"
                                flexDirection="column"
                                marginTop="24px"
                            >
                                <NavItem title="Browse" path="/" />
                                <NavItem title="About" path="/about" />
                                <NavItem title="Careers" path="/careers" />
                                <NavItem
                                    title="Submit a Report"
                                    path="/report"
                                    highlight
                                />
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Mobile>
        </>
    );
};

export default Navbar;
