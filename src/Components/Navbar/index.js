import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ title, path }) => {
  const isActive = useLocation().pathname === path;

  return (
    <Text
      fontWeight="600"
      marginRight="24px"
      color={isActive ? "blueGray.900" : "blueGray.700"}
    >
      <Link to={path}>{title}</Link>
    </Text>
  );
};

const Navbar = () => (
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
      <Link to="/">
        NameandShame
      </Link>
    </Text>
    <Box display="flex" flexDirection="row" marginLeft="64px">
      <NavItem title="Browse" path="/" />
      <NavItem title="About" path="/about" />
      <NavItem title="Careers" path="/careers" />
    </Box>
    <Button
      marginLeft="auto"
      variantColor="primary"
      borderRadius="6px"
      px="16px"
    >
      Submit a Report
    </Button>
  </Box>
);

export default Navbar;
