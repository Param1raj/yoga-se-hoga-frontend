"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import ButtonComp from "@/src/components/ButtonComp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { TabList } from "@mui/lab";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HoverImage from "@/src/components/Home/WhatWeDo/HoverImage";
import image1 from "@/assets/images/loginbackground.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import image2 from "@/assets//images/side-bend.gif";
// import image3 from "@/assets//images/side-bend.gif";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import LockIcon from "@mui/icons-material/Lock";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Link from "next/link";
// import { intializeRazorpay } from "./utils";
// import Script from "next/script";

function Body() {
  async function intializeRazorpay() {
    return new Promise((resolve) => {
      const form = document.createElement("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      // form.action = "";
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // script[data-payment_button_id]= "pl_MFggYUrkakZvQg";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      form.appendChild(script);
      document.body.appendChild(form);
    });
  }

  const makePayment = async () => {
    const res = await intializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api", { method: "POST" }).then((t) => t.json());
    console.log(data, "data");
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Yogaratha",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      handler: function (response: any) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
    };
    const paymentObject = (window as any).Razorpay(options);
    paymentObject.open();
  };
  const [value, setValue] = useState("2");
  const forPreview = true;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box width={"100%"}>
      <Container
        sx={{
          height: "fit-content",
          position: "relative",
          bottom: 70,
          borderRadius: "10px",
          backgroundColor: "#FFF8FD",
          padding: { xs: "30px", sm: "50px" },
        }}
        // maxWidth="lg"
      >
        <Grid
          // container
          // border={"1px solid blue"}
          width={"100%"}
          height={{ xs: "45rem", sm: "fit-content" }}
          display={"grid"}
          gridTemplateColumns={{ sm: "100%", md: "65% 35%", lg: "70% 30%" }}
          gridTemplateRows={{ xs: "55% 45%", sm: "50% 50%", md: "100%" }}
          rowGap={"15px"}
        >
          <Grid>
            <Box
              width={{ xs: "80%", sm: "50%" }}
              // margin={"auto"}
              // border={"1px solid blue"}
              height={{ xs: "15%", sm: "13%" }}
              display={"flex"}
              columnGap={"5px"}
            >
              <AccountCircleIcon
                sx={{
                  height: { xs: "100%", sm: "70%" },
                  width: { xs: "18%", sm: "13%" },
                }}
              />
              <Box>
                <Typography
                  fontSize={"1.3rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontWeight={"500"}
                  color={"#5F2C70"}
                >
                  Teacher
                </Typography>
                <Typography
                  fontSize={"1.3rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontWeight={"500"}
                  // color={"#5F2C70"}
                  lineHeight={"1rem"}
                >
                  Manish Kumar
                </Typography>
              </Box>
            </Box>

            <Stack
              // border={"1px solid blue"}
              width={"98%"}
              height={"87%"}
              padding={"10px"}
              rowGap={{ xs: "1rem", sm: "20px", md: "30px" }}
            >
              <Typography
                fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={"500"}
                // color={"#FFF"}
                variant="h2"
                component={"h2"}
              >
                Yamas and Niyamas
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.3rem" }}
                fontFamily={["Nunito", "sans-serif"]}
                fontWeight={"500"}
                // color={"#FFF"}
                variant="body1"
                component={"p"}
              >
                Learn the foundations of yoga in this online course
              </Typography>
              <Typography
                fontSize={{ xs: "0.7rem", sm: "0.7rem", md: "1rem" }}
                fontFamily={["Nunito", "sans-serif"]}
                fontWeight={"500"}
                color={"#5E5E5E"}
                textAlign={"justify"}
                variant="body2"
                component={"p"}
              >
                The practice of yoga has been thought to date back to pre-vedic
                Indian traditions; possibly in the Indus valley civilization
                around 3000 BCE. Yoga is mentioned in the Rigveda and referenced
                in the Upanishads,. Although, yoga most likely developed as a
                systematic study around the 5th centuries.
              </Typography>
              <Grid
                display={"grid"}
                gridTemplateColumns={{
                  xs: "repeat(2,1fr)",
                  sm: "repeat(3,1fr)",
                }}
                height={{ xs: "120px", sm: "60px" }}
              >
                <Grid
                  item
                  xs={4}
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"5px"}
                >
                  <AlarmOnIcon
                    sx={{
                      fontSize: { sm: "2.3rem", md: "2.5rem" },
                      color: "#5F2C70",
                    }}
                  />
                  <Typography
                    variant="body2"
                    component={"p"}
                    fontSize={{ sm: "0.9rem", md: "1rem" }}
                    fontFamily={["Nunito", "sans-serif"]}
                    fontWeight={"500"}
                    // color={"#5E5E5E"}
                  >
                    Duration
                  </Typography>
                  <Typography
                    variant="body2"
                    component={"p"}
                    fontSize={{ sm: "0.7rem", md: "1rem" }}
                    fontFamily={["Nunito", "sans-serif"]}
                    fontWeight={"500"}
                    color={"#5E5E5E"}
                  >
                    7 Week
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"5px"}
                >
                  <MenuBookIcon
                    sx={{
                      fontSize: { sm: "2.3rem", md: "2.5rem" },
                      color: "#5F2C70",
                    }}
                  />
                  <Typography
                    variant="body2"
                    component={"p"}
                    fontSize={{ sm: "0.9rem", md: "1rem" }}
                    fontFamily={["Nunito", "sans-serif"]}
                    fontWeight={"500"}
                    // color={"#5E5E5E"}
                  >
                    Lectures
                  </Typography>
                  <Typography
                    variant="body2"
                    component={"p"}
                    fontSize={{ sm: "0.9rem", md: "1rem" }}
                    fontFamily={["Nunito", "sans-serif"]}
                    fontWeight={"500"}
                    color={"#5E5E5E"}
                  >
                    7
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  display={"flex"}
                  alignItems={"center"}
                  columnGap={"10px"}
                >
                  <AssistantPhotoIcon
                    sx={{
                      fontSize: { sm: "2.3rem", md: "2.5rem" },
                      color: "#5F2C70",
                    }}
                  />
                  <Typography
                    variant="body2"
                    component={"p"}
                    fontSize={{ sm: "0.7rem", md: "1rem", lg: "1.1125rem" }}
                    fontFamily={["Nunito", "sans-serif"]}
                    fontWeight={"500"}
                    // color={"#5E5E5E"}
                  >
                    Full Life Access
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid display={"flex"} justifyContent={"center"}>
            <Stack
              width={{ xs: "100%", sm: "60%", md: "94%" }}
              height={{ xs: "100%", sm: "100%", md: "90%", lg: "100%" }}
              borderRadius={"10px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              sx={{
                // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                boxShadow:
                  " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
              textAlign={"center"}
              padding={{ xs: "2rem", sm: "3rem", md: "1.5rem", lg: "3rem" }}
              rowGap={{ xs: "10px", sm: "10px", md: "15px", lg: "30px" }}
            >
              <Typography
                fontSize={{
                  xs: "3rem",
                  sm: "3rem",
                  md: "3.5rem",
                  lg: "4rem",
                }}
                fontFamily={["Kumbh Sans", "sans-serif"]}
                fontWeight={"500"}
                color={"#5F2C70"}
              >
                700&#8377;
              </Typography>

              <Box width={"100%"}>
                {/* <Link
                  href={"https://pages.razorpay.com/pl_MFgcnv4ZsQncBl/view"}
                > */}
                <Button
                  onClick={makePayment}
                  // data-payment_button_id="pl_MFggYUrkakZvQg"
                  variant="contained"
                  sx={{ borderRadius: "0px", background: "#5F2C70" }}
                >
                  buy now
                </Button>
                {/* </Link> */}
                {/* <form>
                  <Script
                    src="https://checkout.razorpay.com/v1/payment-button.js"
                    data-payment_button_id="pl_MFggYUrkakZvQg"
                    async
                  ></Script>
                </form> */}
              </Box>
              {/* </Button> */}
              <Typography
                fontSize={{
                  xs: "0.7rem",
                  sm: "0.7rem",
                  md: "0.9rem",
                  lg: "1rem",
                }}
                fontFamily={["Nunito", "sans-serif"]}
                color={"#5F2C70"}
                textAlign={"center"}
              >
                Like yoga, the osteopathic approach to wellness focuses on your
                body’s natural tendency toward health.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box
          width={"100%"}
          height={"fit-content"}
          // border={"2px solid #5F2C70"}
          // padding={"10px"}
          // sx={{
          //   // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          //   boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
          // }}
          borderRadius={"10px"}
          mt={"20px"}
        >
          <TabContext value={value}>
            <Box width={"100%"} height={"20%"}>
              <TabList
                sx={{ borderBottom: "1px solid #847988" }}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value={"1"} label="Curriculum" />
                <Tab value={"2"} label="Instructor" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: "0px", marginTop: "20px" }}>
              <Typography variant="body1" component={"p"} color={"red"}>
                {/* <AccordionVideoList title={"Beginner"} List={VideoList} />
            <AccordionVideoList title={"Intermediate"} List={VideoList} />
            <AccordionVideoList title={"Advance"} List={VideoList} /> */}
              </Typography>
              <Accordion sx={{ background: "transparent" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography fontWeight={"700"} color={"#5F2C70"}>
                    Beginner
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #5F2C70",
                      padding: "5px",
                      backgroundColor: "white",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <PlayCircleFilledIcon sx={{ color: "#5F2C70" }} />
                      <Typography
                        fontWeight={"500"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        marginLeft={"10px"}
                        color={"#5F2C70"}
                      >
                        Some Video Title
                      </Typography>
                    </Box>
                    {forPreview ? (
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#5F2C70",
                          fontWeight: "700",
                          borderColor: "#5F2C70",
                        }}
                      >
                        Preview
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ width: "98px", borderColor: "#5F2C70" }}
                      >
                        <LockIcon sx={{ color: "#5F2C70" }} />
                      </Button>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #5F2C70",
                      padding: "5px",
                      backgroundColor: "white",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <PlayCircleFilledIcon sx={{ color: "#5F2C70" }} />
                      <Typography
                        fontWeight={"500"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        marginLeft={"10px"}
                        color={"#5F2C70"}
                      >
                        Some Video Title
                      </Typography>
                    </Box>
                    {forPreview ? (
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#5F2C70",
                          fontWeight: "700",
                          borderColor: "#5F2C70",
                        }}
                      >
                        Preview
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ width: "98px", borderColor: "#5F2C70" }}
                      >
                        <LockIcon sx={{ color: "#5F2C70" }} />
                      </Button>
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #5F2C70",
                      padding: "5px",
                      backgroundColor: "white",
                      marginTop: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <PlayCircleFilledIcon sx={{ color: "#5F2C70" }} />
                      <Typography
                        fontWeight={"500"}
                        fontFamily={["Kumbh Sans", "sans-serif"]}
                        marginLeft={"10px"}
                        color={"#5F2C70"}
                      >
                        Some Video Title
                      </Typography>
                    </Box>
                    {false ? (
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#5F2C70",
                          fontWeight: "700",
                          borderColor: "#5F2C70",
                        }}
                      >
                        Preview
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ width: "98px", borderColor: "#5F2C70" }}
                      >
                        <LockIcon sx={{ color: "#5F2C70" }} />
                      </Button>
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ background: "transparent" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography fontWeight={"700"} color={"#5F2C70"}>
                    Intermediate
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Coming Soon</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ background: "transparent" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography fontWeight={"700"} color={"#5F2C70"}>
                    Advance
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Coming Soon</Typography>
                </AccordionDetails>
              </Accordion>
            </TabPanel>
            <TabPanel
              value="2"
              sx={{ height: "100%", padding: "0px", marginTop: "20px" }}
            >
              <Box
                // border={"1px solid black"}
                height={"100%"}
                width={"100%"}
                padding={"0px"}
                sx={{
                  // boxShadow:
                  // " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  display: "flex",
                }}
              >
                <AccountBoxIcon
                  sx={{
                    width: { xs: "15%", sm: "15%", md: "15%", lg: "10%" },
                    height: "100%",
                  }}
                />
                <Stack
                  rowGap={{ xs: "10px", sm: "20px", md: "10px" }}
                  paddingY={{ sm: "10px", md: "10px", lg: "10px" }}
                >
                  <Typography
                    fontSize={{ xs: "1.2rem", sm: "2rem" }}
                    variant="h5"
                    component={"h5"}
                    fontWeight={"700"}
                  >
                    Manish Kumar
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: "0.7rem",
                      sm: "0.9rem",
                      md: "1rem",
                      lg: "1.3rem",
                    }}
                    variant="body1"
                    component={"p"}
                    textAlign={"justify"}
                  >
                    Modern postural yoga consists largely but not exclusively of
                    the practice of asanas. There were very few standing asanas
                    before 1900.
                  </Typography>
                </Stack>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        <Stack
          // border={"1px solid black"}
          // height={"10vh"}
          rowGap={"40px"}
          marginTop={"50px"}
        >
          <Typography
            variant="h5"
            component={"h5"}
            fontWeight={"700"}
            color={"#5F2C70"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
          >
            Blogs you might like
          </Typography>
          <Grid
            display={"grid"}
            gridTemplateColumns={{
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
            }}
            columnGap={"10px"}
            rowGap={"20px"}
            height={{ xs: "100rem", sm: "50rem", md: "50vh" }}
            justifyContent={"space-between"}
          >
            <HoverImage forBlog={true} image={image1.src} title="Blog 1" />
            {/* </Grid> */}
            {/* <Grid item border={"1px solid blue"} xs={3.8}> */}
            <HoverImage forBlog={true} image={image1.src} title="Blog 2" />
            {/* </Grid> */}
            {/* <Grid item border={"1px solid blue"} xs={3.8}> */}
            <HoverImage forBlog={true} image={image1.src} title="Blog 3" />
            {/* </Grid> */}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

export default Body;
