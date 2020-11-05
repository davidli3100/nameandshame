import React, { useState } from "react";
import {
    Box,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Button,
    useToast,
    AspectRatioBox,
    Image,
} from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import * as firebase from "firebase";

const AddEmployer = () => {
    const toast = useToast();
    /**
     * What follows is not best practice
     * but we probably don't have the time to set up formik
     * or a similar form management library
     */
    const photoForm = new FormData();
    const bannerForm = new FormData();
    const logoInputRef = React.useRef(null);
    const bannerInputRef = React.useRef(null);

    const [numEmployees, setNumEmployees] = useState(null);
    const [employer, setEmployer] = useState("");
    const [image, setImage] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const [banner, setBanner] = useState(null);
    const [bannerURL, setBannerURL] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const uploadLogo = () => {
        logoInputRef.current.click();
    };

    const uploadBanner = () => {
        bannerInputRef.current.click();
    };

    const photoOnChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const file = e.target.files[0];
        photoForm.append("file", file);
        setImage(file);
        setImageURL(URL.createObjectURL(file));
    };

    const bannerOnChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const file = e.target.files[0];
        bannerForm.append("file", file);
        setBanner(file);
        setBannerURL(URL.createObjectURL(file));
    };

    const uploadPhoto = async (photoObj, id) => {
        const refName = `employers/${id || Date.now()}`;
        try {
            const uploadTask = await firebase
                .storage()
                .ref(refName)
                .put(photoObj);
            const photoURL = await uploadTask.ref.getDownloadURL();
            return photoURL;
        } catch (err) {
            throw new Error(err);
        }
    };

    const submit = async () => {
        setIsSubmitting(true);

        // Make sure all fields are filled
        if (employer === "" || !numEmployees || !image) {
            toast({
                title: "Missing Fields",
                description: "You must fill out all fields!",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
            setIsSubmitting(false);
            return;
        }

        // handling the photos
        let logoURL = "";
        let bannerURL = "";
        if (image) {
            logoURL = await uploadPhoto(image, `${employer}-logo`);
        }

        if (banner) {
            bannerURL = await uploadPhoto(banner, `${employer}-banner`);
        }

        var requestHeaders = new Headers();
        requestHeaders.append("Content-Type", "application/json");

        var rawData = JSON.stringify({
            employer: employer,
            numEmployees: numEmployees,
            imageURL: logoURL,
            backgroundImageURL: bannerURL,
        });

        var requestOptions = {
            method: "POST",
            headers: requestHeaders,
            body: rawData,
            redirect: "follow",
        };

        fetch(
            "https://us-central1-nameandshame-eedd0.cloudfunctions.net/addEmployer",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                setIsSubmitting(false);
                setTimeout(() => {
                    history.push(`/employer/${result}`);
                }, 2000);
                toast({
                    title: "Employer created",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                console.log(result);
            })
            .catch((error) => {
                setIsSubmitting(false);
                toast({
                    title: "Error creating employer",
                    description: "Please try again",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                console.log("error", error);
            });
    };
    return (
        <Box px={["20px", "50px", "10vw", null]} py="50px">
            <Heading color="blue.900">Add an Employer</Heading>
            <Box
                mt="50px"
                display="grid"
                gridTemplateColumns={[
                    "repeat(auto-fit, minmax(280px, 1fr))",
                    null,
                    "repeat(auto-fit, minmax(400px, 1fr))",
                    null,
                ]}
                gridColumnGap={5}
                gridRowGap={5}
            >
                <Box>
                    <FormControl>
                        <FormLabel htmlFor="employer">
                            <Heading color="blue.900" size="sm">
                                Employer *
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="Acme Corp."
                            id="employer"
                            value={employer}
                            onChange={(e) => {
                                setEmployer(e.target.value);
                            }}
                        />
                        <FormLabel htmlFor="employerPictureUpload" mt="20px">
                            <Heading color="blue.900" size="sm">
                                Employer Logo *
                            </Heading>
                        </FormLabel>
                        {imageURL ? (
                            <>
                                <AspectRatioBox
                                    maxWidth={["400x", "150px"]}
                                    my="12px"
                                    ratio={1 / 1}
                                >
                                    <Image
                                        borderRadius="6px"
                                        objectFit="cover"
                                        src={imageURL}
                                    />
                                </AspectRatioBox>
                                <input
                                    onChange={photoOnChange}
                                    type="file"
                                    id="employerPictureUpload"
                                    ref={logoInputRef}
                                    style={{ display: "none" }}
                                />
                                <Button
                                    display="block"
                                    mt="8px"
                                    color="blue.900"
                                    borderRadius="8px"
                                    onClick={uploadLogo}
                                >
                                    Change
                                </Button>
                            </>
                        ) : (
                            <>
                                <input
                                    onChange={photoOnChange}
                                    type="file"
                                    id="employerPictureUpload"
                                    ref={logoInputRef}
                                    style={{ display: "none" }}
                                />
                                <Button
                                    display="block"
                                    mt="8px"
                                    color="blue.900"
                                    borderRadius="8px"
                                    onClick={uploadLogo}
                                >
                                    Upload
                                </Button>
                            </>
                        )}
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel htmlFor="numEmployees">
                            <Heading color="blue.900" size="sm">
                                Num. Employees *
                            </Heading>
                        </FormLabel>
                        <Input
                            placeholder="10000"
                            id="numEmployees"
                            type="number"
                            value={numEmployees}
                            onChange={(e) => {
                                setNumEmployees(e.target.value);
                            }}
                        />
                        <FormLabel htmlFor="bannerPictureUpload" mt="20px">
                            <Heading color="blue.900" size="sm">
                                Employer Banner Photo
                            </Heading>
                        </FormLabel>
                        {bannerURL ? (
                            <>
                                <AspectRatioBox
                                    maxWidth={["400x", "250px"]}
                                    my="12px"
                                    ratio={16 / 9}
                                >
                                    <Image
                                        borderRadius="6px"
                                        objectFit="cover"
                                        src={bannerURL}
                                    />
                                </AspectRatioBox>
                                <input
                                    onChange={bannerOnChange}
                                    type="file"
                                    id="bannerPictureUpload"
                                    ref={bannerInputRef}
                                    style={{ display: "none" }}
                                />
                                <Button
                                    display="block"
                                    mt="8px"
                                    color="blue.900"
                                    borderRadius="8px"
                                    onClick={uploadBanner}
                                >
                                    Change
                                </Button>
                            </>
                        ) : (
                            <>
                                <input
                                    onChange={bannerOnChange}
                                    type="file"
                                    id="bannerPictureUpload"
                                    ref={bannerInputRef}
                                    style={{ display: "none" }}
                                />
                                <Button
                                    display="block"
                                    mt="8px"
                                    color="blue.900"
                                    borderRadius="8px"
                                    onClick={uploadBanner}
                                >
                                    Upload
                                </Button>
                            </>
                        )}
                    </FormControl>
                </Box>
            </Box>
            <Button
                variantColor="primary"
                mt="32px"
                isLoading={isSubmitting}
                onClick={() => {
                    submit();
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default AddEmployer;
