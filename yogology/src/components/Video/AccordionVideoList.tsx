import React, { useEffect, useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Video } from "../Admin/pannel/tables/VideoTable";
import { getVideosByCategory } from "@/Utils/query/getVideosByCategory";
import { getFirstVideoByCategory } from "@/Utils/query/getFirstVideo";
import { useRouter } from "next13-progressbar";

function AccordionVideoList({
  title,
  id,
  setId,
  nextId,
}: {
  title: string;
  id: string;
  setId: (id: string) => void;
  nextId?: string;
}) {
  let List: Video[] = [];
  const { push } = useRouter();
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [colored, setColored] = useState(id);
  // const [needToChanges, setNeedToChanges] = useState(false);
  const category = title === "Beginner" ? "Intermediate" : "Advance";

  // useEffect(() => {}, [needToChanges]);

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: [title],
    queryFn: () => {
      return getVideosByCategory(title);
    },
  });

  if (isError) {
    return (
      <Accordion sx={{ marginTop: "10px" }}>
        <AccordionSummary
          id="panel1d-header"
          onClick={() => setIsOpen(!isOpen)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "100%", height: "100%", marginTop: -2 }}>
          <motion.div
            initial="hidden"
            variants={list}
            animate={isOpen ? "visible" : "hidden"}
          >
            <Typography color={"red"} fontFamily={["Nunito", "sans-serif"]}>
              {" "}
              Failed to get {title} level videos.
            </Typography>
          </motion.div>
        </AccordionDetails>
      </Accordion>
    );
  }
  if (isLoading) {
    return (
      <Accordion sx={{ marginTop: "10px" }}>
        <AccordionSummary
          id="panel1d-header"
          onClick={() => setIsOpen(!isOpen)}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ width: "100%", height: "100%", marginTop: -2 }}>
          <motion.div
            initial="hidden"
            variants={list}
            animate={isOpen ? "visible" : "hidden"}
          >
            <Typography> Loading...</Typography>
          </motion.div>
        </AccordionDetails>
      </Accordion>
    );
  }
  if (isSuccess) {
    List = data.data.data.videos;
    console.log("#############LIST#############", List);
  }
  return (
    <Accordion sx={{ marginTop: "10px" }}>
      <AccordionSummary
        id="panel1d-header"
        onClick={() => setIsOpen(!isOpen)}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ width: "100%", height: "100%", marginTop: -2 }}>
        <motion.div
          initial="hidden"
          variants={list}
          animate={isOpen ? "visible" : "hidden"}
        >
          {List &&
            List.map(({ _id, title }, i) => {
              if (_id === id && i + 1 < List.length) {
                setId(List[i + 1]._id);
              } else if (_id === id && i + 1 === List.length) {
                nextId && setId(nextId);
              }
              return (
                <motion.div
                  key={_id}
                  variants={item}
                  onClick={() => {
                    push(`/videos/${_id}`);
                  }}
                >
                  <ListItemButton
                    sx={{
                      border:
                        colored === _id
                          ? "2px solid #5F2C70"
                          : "2px solid white",
                      borderRadius: "5px",
                      color: colored === _id ? "#5F2C70" : "black",
                      backgroundColor: colored === _id ? "#67377763" : "",
                      transition: "border 300ms ease",
                    }}
                  >
                    <ListItemIcon>
                      <PlayCircleFilledIcon color={"inherit"} />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </motion.div>
              );
            })}
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionVideoList;
