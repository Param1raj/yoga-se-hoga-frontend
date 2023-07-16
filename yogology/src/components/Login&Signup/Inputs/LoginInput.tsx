import React from "react";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import HoverInput from "@/components/HoverInput";
function LoginInput({
  isForLogin,
  handleChange,
  formData,
}: {
  isForLogin: boolean;
  handleChange: Function;
  formData: {
    email: string;
    password: string;
  };
}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
        >
          <HoverInput
            width={"80%"}
            label={isForLogin ? "Email" : "Phone"}
            handleChange={handleChange}
            name="email"
            value={formData.email}
            type="email"
          />
        </motion.div>
      </Grid>
      <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: ["100px", "50px", "0px"], opacity: 1 }}
        >
          <HoverInput
            width={"80%"}
            label={"Password"}
            handleChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
          />
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default LoginInput;
