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

function AccordionVideoList({
  title,
  List,
}: {
  title: string;
  List: string[];
}) {
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
  return (
    <Accordion sx={{ marginTop: "10px" }} onClick={() => setIsOpen(!isOpen)}>
      <AccordionSummary id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ width: "100%", height: "100%", marginTop: -2 }}>
        <motion.div
          initial="hidden"
          variants={list}
          animate={isOpen ? "visible" : "hidden"}
        >
          {List.map((VideoTitle) => (
            <motion.div variants={item}>
              <ListItemButton>
                <ListItemIcon>
                  <PlayCircleFilledIcon />
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
