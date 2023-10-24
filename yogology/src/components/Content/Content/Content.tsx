import React, { useEffect, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import MediaCard from "./YogaCrad";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getSolutionVideos } from "@/Utils/query/getSolutionVideos";
import { getYogaVideos } from "@/Utils/query/getYogaVideos";
import LoginProtects from "@/app/RouteProtects/LoginProtects";
import SubscriptionModal from "./modal/SubscriptionModal";
import { getMeditationVideos } from "@/Utils/query/getMeditationVideos";
// import SubscriptionModal from "./modal/SubscriptionModal";
type Video = {
  _id: string;
  thumbnail: string;
  createdBy: {
    _id: string;
    name: string;
  };
  isPaid: boolean;
  category: string;
  isSolution: boolean;
  url: string;
  Long_description: string;
  Short_description: string;
  title: string;
};
let data: Video[] = [];
function Content() {
  const [open, setOpen] = useState(false);
  const { content: contentType } = useParams();
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(
    +searchParams.toString().split("=")[1]
  );

  let count = 10;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };
  const { push } = useRouter();
  const pathName = usePathname();
  const {
    isError,
    isLoading,
    data: loadedData,
    isSuccess,
    isPaused,
    status,
  } = useQuery({
    queryKey: ["videos", page, contentType],
    queryFn: () => {
      return contentType === "yoga"
        ? getYogaVideos(page)
        : contentType === "meditation"
        ? getMeditationVideos(page)
        : getSolutionVideos(page);
    },
  });

  if (isSuccess) {
    data = loadedData.data.data.videos || [];
    console.log("############data##############", data);
    count = loadedData.data.data.count;
  }

  return (
    // <LoginProtects>
    <Box
      width={"100%"}
      height={{
        xs: "245rem",
        sm: "135rem",
        md: "118rem",
        lg: "90rem",
        xl: "62rem",
      }}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      // border={"1px solid red"}
    >
      <Box
        width={{ xs: "85%", sm: "90%", md: "95%", lg: "90%", xl: "85%" }}
        // border={"1px solid red"}
        height={"100%"}
      >
        <Box
          // border={"1px solid black"}
          height={{ xs: "2%", sm: "8%", md: "10%", lg: "10%", xl: "13%" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Typography
            fontSize={{ sm: "1.5rem", md: "2rem", lg: "2.3rem" }}
            fontFamily={["Kumbh Sans", "sans-serif"]}
            fontWeight={"bold"}
            color={"#5F2C70"}
          >
            {contentType === "yoga"
              ? "Yoga For Better Life Style"
              : contentType === "solutions"
              ? "Find your solutions to daily life problems"
              : "Meditations For Better Life Style"}
          </Typography>
        </Box>
        {isLoading && <Typography>Loading...</Typography>}
        {isError && (
          <Typography color={"red"}>Something unexpected happend!</Typography>
        )}
        {isSuccess && (
          <>
            <Box
              width={"100%"}
              display={"grid"}
              gridTemplateColumns={{
                xs: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(4,1fr)",
                xl: "repeat(5,1fr)",
              }}
              rowGap={"20px"}
              columnGap={"20px"}
              height={{ xs: "94%", sm: "86%", md: "80%", lg: "80%", xl: "75%" }}
              // border={"1px solid black"}
              gridTemplateRows={{ xl: "repeat(2,1fr)" }}
            >
              {
                <SubscriptionModal
                  open={open}
                  onClose={() => {
                    setOpen(false);
                  }}
                />
              }
              {data &&
                data.map((item, i) => {
                  return (
                    <MediaCard
                      image={item.thumbnail}
                      title={item.title}
                      description={item.Short_description}
                      key={item._id}
                      uuid={item._id}
                      paid={item.isPaid}
                      setOpen={() => {
                        setOpen(true);
                      }}
                    />
                  );
                })}
            </Box>
            <Box
              // border={"1px solid black"}
              height={{ xs: "4%", sm: "8%", md: "10%", lg: "10%", xl: "12%" }}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Pagination
                count={count / 10}
                size={"large"}
                variant="outlined"
                color="secondary"
                page={page}
                onChange={handleChange}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
    // </LoginProtects>
  );
}

export default Content;
