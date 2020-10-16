import React from "react";
import {
    Box,
    Heading,
    Text,
    PseudoBox,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/core";
import Tag from "../Tag";
import Dotdotdot from "react-dotdotdot";

const Report = ({ title, date, desc }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <PseudoBox
                border="1px solid #F0F4F8"
                px="28px"
                py="24px"
                overflow="hidden"
                borderRadius="8px"
                transition="transform .5s"
                _hover={{ transform: "scale(1.025)" }}
                onClick={onOpen}
                cursor="pointer"
            >
                <Heading size="md" fontWeight="600" color="blueGray.900">
                    {title}
                </Heading>
                <Heading size="sm" color="blueGray.400" fontWeight="600">
                    {date}
                </Heading>
                <Box mt="20px" display="flex" flexDirection="row">
                    <Tag name="Racism" />
                    <Tag name="Gender" />
                    <Tag name="Sexuality" />
                </Box>
                <Box mt="20px" textAlign="justify">
                    <Dotdotdot clamp={4}>
                        <Text lineHeight="20px" color="blueGray.400">
                            {desc}
                        </Text>
                    </Dotdotdot>
                </Box>
            </PseudoBox>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    borderRadius="8px"
                    border="1px solid #F0F4F8"
                    maxWidth="800px"
                    p="12px"
                >
                    <ModalHeader width="80%">
                        <Heading
                            size="md"
                            fontWeight="600"
                            color="blueGray.900"
                        >
                            {title}
                        </Heading>
                        <Heading
                            size="sm"
                            color="blueGray.400"
                            fontWeight="600"
                        >
                            {date}
                        </Heading>
                        <Box mt="20px" display="flex" flexDirection="row">
                            <Tag name="Racism" />
                            <Tag name="Gender" />
                            <Tag name="Sexuality" />
                        </Box>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text
                            lineHeight="20px"
                            color="blueGray.400"
                            textAlign="justify"
                        >
                            {desc}
                        </Text>
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    );
};

export default Report;
