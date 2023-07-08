"use client";
import React, { useState } from "react";
import style from "./page.module.css";
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
import background from "../../../assets/images/nature.avif";
import ButtonComp from "@/components/ButtonComp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { TabList } from "@mui/lab";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HoverImage from "@/components/Home/WhatWeDo/HoverImage";
import image1 from "../../../assets/images/loginbackground.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image2 from "../../../assets/images/side-bend.gif";
import image3 from "../../../assets/images/side-bend.gif";
import LockIcon from "@mui/icons-material/Lock";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const VideoList = [
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
  "SomeListed Video",
];
function Page() {
  const [value, setValue] = useState("2");
  const forPreview = true;
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={style.main}>
      <Box
        width={"100%"}
        height={"34rem"}
        sx={{
          background: `url('${background.src}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "-406px",
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={"35%"} height={"30%"} textAlign={"center"}>
          <Typography
            variant="h2"
            component="h2"
            fontSize={"3.5rem"}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"500"}
            color={"#ffffff"}
          >
            Yamas and Niyamas
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            fontFamily={["Nunito", "sans-serif"]}
            fontSize={"1.5rem"}
            color={"#ffffff"}
          >
            Learn the foundations of yoga in this online course
          </Typography>
        </Stack>
      </Box>
      <Box width={"100%"}>
        <Container
          sx={{
            height: "fit-content",
            position: "relative",
            bottom: 70,
            borderRadius: "10px",
            backgroundColor: "#FFF8FD",
            padding: "50px",
          }}
          // maxWidth="lg"
        >
          <Grid
            container
            // border={"1px solid blue"}
            width={"100%"}
            height={"60%"}
          >
            <Grid
              item
              // border={"1px solid red"}
              xs={8}
            >
              {/* <Grid container width={"100%"} height={"13%"}>
                <Grid item xs={5}> */}
              <Box
                width={"50%"}
                // margin={"auto"}
                // border={"1px solid blue"}
                height={"13%"}
                display={"flex"}
                columnGap={"5px"}
              >
                <AccountCircleIcon sx={{ height: "70%", width: "13%" }} />
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
                rowGap={"30px"}
              >
                <Typography
                  fontSize={"2.5rem"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  fontWeight={"500"}
                  // color={"#FFF"}
                  variant="h2"
                  component={"h2"}
                >
                  Yamas and Niyamas
                </Typography>
                <Typography
                  fontSize={"1.3rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontWeight={"500"}
                  // color={"#FFF"}
                  variant="body1"
                  component={"p"}
                >
                  Learn the foundations of yoga in this online course
                </Typography>
                <Typography
                  fontSize={"1rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  fontWeight={"500"}
                  color={"#5E5E5E"}
                  textAlign={"justify"}
                  variant="body2"
                  component={"p"}
                >
                  The practice of yoga has been thought to date back to
                  pre-vedic Indian traditions; possibly in the Indus valley
                  civilization around 3000 BCE. Yoga is mentioned in the Rigveda
                  and referenced in the Upanishads,. Although, yoga most likely
                  developed as a systematic study around the 5th centuries.
                </Typography>
                <Grid container height={"60px"}>
                  <Grid
                    item
                    xs={4}
                    display={"flex"}
                    alignItems={"center"}
                    columnGap={"5px"}
                  >
                    <AlarmOnIcon
                      sx={{ fontSize: "2.5rem", color: "#5F2C70" }}
                    />
                    <Typography
                      variant="body2"
                      component={"p"}
                      fontSize={"1rem"}
                      fontFamily={["Nunito", "sans-serif"]}
                      fontWeight={"500"}
                      // color={"#5E5E5E"}
                    >
                      Duration
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      fontSize={"1rem"}
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
                      sx={{ fontSize: "2.5rem", color: "#5F2C70" }}
                    />
                    <Typography
                      variant="body2"
                      component={"p"}
                      fontSize={"1rem"}
                      fontFamily={["Nunito", "sans-serif"]}
                      fontWeight={"500"}
                      // color={"#5E5E5E"}
                    >
                      Lectures
                    </Typography>
                    <Typography
                      variant="body2"
                      component={"p"}
                      fontSize={"1rem"}
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
                      sx={{ fontSize: "2.5rem", color: "#5F2C70" }}
                    />
                    <Typography
                      variant="body2"
                      component={"p"}
                      fontSize={"1.125rem"}
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
            <Grid item xs={4}>
              <Stack
                width={"94%"}
                height={"100%"}
                borderRadius={"10px"}
                sx={{
                  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                  boxShadow:
                    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                }}
                textAlign={"center"}
                padding={"45px"}
                rowGap={"30px"}
              >
                <Typography
                  fontSize={"4.5rem"}
                  fontFamily={["Kumbh Sans", "sans-serif"]}
                  fontWeight={"500"}
                  color={"#5F2C70"}
                >
                  Free
                </Typography>
                <ButtonComp text="Start Now" />
                <Typography
                  fontSize={"1rem"}
                  fontFamily={["Nunito", "sans-serif"]}
                  color={"#5F2C70"}
                  textAlign={"center"}
                >
                  Like yoga, the osteopathic approach to wellness focuses on
                  your body’s natural tendency toward health.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Box width={"100%"} height={"fit-content"}>
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
              <TabPanel value="1">
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
                        borderBottom: "2px solid #526D82",
                        padding: "5px",
                        backgroundColor: "#DDE6ED",
                        marginTop: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <PlayCircleFilledIcon sx={{ color: "#526D82" }} />
                        <Typography
                          fontWeight={"500"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          marginLeft={"10px"}
                          color={"#526D82"}
                        >
                          Some Video Title
                        </Typography>
                      </Box>
                      {forPreview ? (
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#526D82",
                            fontWeight: "700",
                            borderColor: "#526D82",
                          }}
                        >
                          Preview
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ width: "98px", borderColor: "#526D82" }}
                        >
                          <LockIcon sx={{ color: "#526D82" }} />
                        </Button>
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "2px solid #526D82",
                        padding: "5px",
                        backgroundColor: "#DDE6ED",
                        marginTop: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <PlayCircleFilledIcon sx={{ color: "#526D82" }} />
                        <Typography
                          fontWeight={"500"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          marginLeft={"10px"}
                          color={"#526D82"}
                        >
                          Some Video Title
                        </Typography>
                      </Box>
                      {forPreview ? (
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#526D82",
                            fontWeight: "700",
                            borderColor: "#526D82",
                          }}
                        >
                          Preview
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ width: "98px", borderColor: "#526D82" }}
                        >
                          <LockIcon sx={{ color: "#526D82" }} />
                        </Button>
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "2px solid #526D82",
                        padding: "5px",
                        backgroundColor: "#DDE6ED",
                        marginTop: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <Box display={"flex"} alignItems={"center"}>
                        <PlayCircleFilledIcon sx={{ color: "#526D82" }} />
                        <Typography
                          fontWeight={"500"}
                          fontFamily={["Kumbh Sans", "sans-serif"]}
                          marginLeft={"10px"}
                          color={"#526D82"}
                        >
                          Some Video Title
                        </Typography>
                      </Box>
                      {false ? (
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#526D82",
                            fontWeight: "700",
                            borderColor: "#526D82",
                          }}
                        >
                          Preview
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ width: "98px", borderColor: "#526D82" }}
                        >
                          <LockIcon sx={{ color: "#526D82" }} />
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
              <TabPanel value="2" sx={{ height: "100%" }}>
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
                      width: "20%",
                      height: "100%",
                    }}
                  />
                  <Stack rowGap={"20px"} paddingY={"70px"}>
                    <Typography variant="h5" component={"h5"}>
                      Manish Kumar
                    </Typography>
                    <Typography variant="body1" component={"p"}>
                      Modern postural yoga consists largely but not exclusively
                      of the practice of asanas. There were very few standing
                      asanas before 1900.
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
            <Grid container height={"90%"} justifyContent={"space-between"}>
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
    </div>
  );
}

export default Page;
