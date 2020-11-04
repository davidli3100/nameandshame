import React from "react";
import { Box, Icon, Image, Text, Button, Tooltip } from "@chakra-ui/core";
import { Link } from "react-router-dom";

/**
 * Handler to redirect the user when clicking on the company card's buttons
 * @param {"report" | "view"} type type of action taken
 * @param {string} id ID of the company/employer
 * @returns {string} redirect uri
 */
const handleClick = (type, id) => {
    switch (type) {
        case "report":
            return `/report/${id}`;
        case "view":
            return `/employer/${id}`;
        default:
            return `/`;
    }
};

const CompanyCard = (props) => {
    const { objectID: id, name, imageURL, numReports, score } = props.hit;
    return (
        <Box
            width="100%"
            px="20px"
            py="20px"
            borderColor="blueGray.100"
            borderWidth="1px"
            borderRadius="8px"
            height="fit-content"
        >
            <Image
                objectFit="cover"
                height="75px"
                width="75px"
                borderRadius="8px"
                src={imageURL}
                alt={name}
            />
            <Text
                pt="12px"
                fontSize="18px"
                color="blueGray.900"
                fontWeight="700"
            >
                {name}
            </Text>
            <Box display="flex" flexDirection="row" mt="6px" fontWeight="600">
                <Tooltip
                    fontWeight="600"
                    label="Number of reports"
                    placement="bottom"
                >
                    <Box
                        color="blueGray.600"
                        mr="32px"
                        display="flex"
                        flexDirection="row"
                    >
                        <Icon mt="2px" mr="8px" size="20px" name="reports" />
                        <Text>{numReports}</Text>
                    </Box>
                </Tooltip>
                <Tooltip
                    fontWeight="600"
                    label="Toxicity Score (0-10)"
                    placement="bottom"
                >
                    <Box
                        color="blueGray.600"
                        display="flex"
                        flexDirection="row"
                    >
                        <Icon mt="2px" size="20px" mr="8px" name="score" />
                        <Text>{score}</Text>
                    </Box>
                </Tooltip>
            </Box>
            <Box mt="24px">
                <Button
                    as={Link}
                    to={handleClick("report", id)}
                    variantColor="primary"
                    width="calc(50% - 8px)"
                    mr="16px"
                    borderRadius="6px"
                    aria-label="Report"
                >
                    Report
                </Button>
                <Button
                    as={Link}
                    to={handleClick("view", id)}
                    color="blueGray.600"
                    width="calc(50% - 8px)"
                    borderRadius="6px"
                    aria-label="View"
                >
                    View
                </Button>
            </Box>
        </Box>
    );
};

export default CompanyCard;
