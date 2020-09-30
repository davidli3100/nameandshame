import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import Tag from "../Tag";
import Dotdotdot from "react-dotdotdot";

const Report = ({ title, date, desc }) => (
    <Box
        border="2px solid #F0F4F8"
        padding="20px"
        width="500px"
        overflow="hidden"
    >
        <Heading size="md" fontWeight="600">
            {title}
        </Heading>
        <Heading size="sm" color="blueGray.500" fontWeight="500">
            {date}
        </Heading>
        <Box mt="10px" display="flex" flexDirection="row">
            <Tag name="Racism" />
            <Tag name="Gender" />
            <Tag name="Sexuality" />
        </Box>
        <Box mt="10px" textAlign="justify">
            <Dotdotdot clamp={5}>
                <Text color="blueGray.400">{desc}</Text>
            </Dotdotdot>
        </Box>
    </Box>
);

export default Report;
