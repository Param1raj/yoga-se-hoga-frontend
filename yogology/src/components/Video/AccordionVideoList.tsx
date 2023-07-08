import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

function AccordionVideoList({
  title,
  List,
}: {
  title: string;
  List: string[];
}) {
  const { push, replace } = useRouter();
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
  const [colored, setColored] = useState(0);
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
          {List.map((VideoTitle, i) => (
            <motion.div
              key={VideoTitle}
              variants={item}
              onClick={() => {
                replace("/videos");
                setColored(i);
              }}
            >
              <ListItemButton
                sx={{
                  border:
                    colored === i ? "2px solid #5F2C70" : "2px solid white",
                  borderRadius: "5px",
                  color: colored === i ? "#5F2C70" : "black",
                  transition: "border 300ms ease",
                }}
              >
                <ListItemIcon>
                  <PlayCircleFilledIcon color={"inherit"} />
                </ListItemIcon>
                <ListItemText primary={VideoTitle} />
              </ListItemButton>
            </motion.div>
          ))}
        </motion.div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionVideoList;
