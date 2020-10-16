import React from "react";
import { Box, Heading, Text, PseudoBox } from "@chakra-ui/core";
import Tag from "../Tag";
import Dotdotdot from "react-dotdotdot";

const Report = ({ hit }) => {
    const { title, description, dateMillis, categories } = hit;
    const dateObj = new Date(dateMillis);
    const dateString = dateObj.toLocaleString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <PseudoBox
            border="1px solid #F0F4F8"
            px="28px"
            py="24px"
            maxWidth="600px"
            overflow="hidden"
            borderRadius="8px"
            transition="transform .5s"
            _hover={{ transform: "scale(1.025)" }}
        >
            <Heading size="md" fontWeight="600" color="blueGray.900">
                {title}
            </Heading>
            <Heading size="sm" color="blueGray.400" fontWeight="600">
                {dateString}
            </Heading>
            <Box mt="20px" display="flex" flexDirection="row">
                {categories.map((category) => (
                    <Tag name={category} />
                ))}
            </Box>
            <Box mt="20px" textAlign="justify">
                <Dotdotdot clamp={4}>
                    <Text lineHeight="20px" color="blueGray.400">
                        {description}
                    </Text>
                </Dotdotdot>
            </Box>
        </PseudoBox>
    );
};

export default Report;
