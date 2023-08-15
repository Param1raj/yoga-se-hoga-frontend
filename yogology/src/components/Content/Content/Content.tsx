import React, { useCallback, useEffect, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import MediaCard from "./YogaCrad";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const data = [
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
  {
    title: "Lizard",
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    uuid: "lasjflasjlfjasldflasdfa",
  },
];
function Content({ contentType }: { contentType: string }) {
  const searchParams = useSearchParams();
  const [page, setPage] = useState<number>(
    +searchParams.toString().split("=")[1]
  );
  const { push } = useRouter();
  const pathName = usePathname();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    push(pathName + "?page=" + value);
  };
  useEffect(() => {
    // console.log()
    // here we have to call function for fetching data on first time and whenever page changes
  }, []);
  return (
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
              ? "Yoga & Meditations For Better Life Style"
              : contentType
              ? "Find your solutions to daily life problems"
              : "Yoga & Meditations For Better Life Style"}
          </Typography>
        </Box>
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
        >
          {data.map((item, i) => {
            return (
              <MediaCard
                title={item.title}
                description={item.description}
                key={i}
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
            count={10}
            size={"large"}
            variant="outlined"
            color="secondary"
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Content;
