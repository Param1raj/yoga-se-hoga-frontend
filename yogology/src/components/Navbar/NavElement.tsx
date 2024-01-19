import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
const container = {
  visible: {},
  hidden: {},
};
const child = {
  visible: { scaleX: 1 },
  hidden: { scaleX: 0 },
};
function NavbarElement({ pathName, name }: { pathName: string; name: string }) {
  // const { refresh } = useRouter();
  // const [visible, setVisible] = useState("visible");
  const path = usePathname();
  const visiblity = path === pathName ? true : false;
  console.log("visiblity", visiblity, pathName);
  // useEffect(() => {
  //   console.log(path, pathName, path === pathName, "Path Name Matched!!!");
  //   // refresh();
  //   if (path !== pathName) {
  //     setVisible("hiddent");
  //     console.log("State:", visible);
  //   }
  // }, [path]);
  return (
    <motion.div variants={container} initial={"hidden"} whileHover="visible">
      <Link href={pathName === "/blogs" ? pathName + "?page=1" : pathName}>
        <Box
          sx={{
            transition: "border 500ms ease",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          <Typography color={"#322038"}>{name}</Typography>
          <motion.div
            variants={child}
            style={{ border: "1px solid #5F2C70" }}
          ></motion.div>
          <Box
            sx={{
              border: visiblity ? "1px solid #5F2C70" : "0px solid",
              position: "relative",
              bottom: "2px",
            }}
          ></Box>
        </Box>
      </Link>
    </motion.div>
  );
}

export default NavbarElement;
