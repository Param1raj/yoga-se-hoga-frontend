import HoverInput from "@/components/HoverInput";
import { Grid } from "@mui/material";
import React from "react";

function SignupInput({
  handleChange,
  formData,
}: {
  handleChange: Function;
  formData: {
    name?: string;
    email: string;
    password: string;
    phone?: string;
  };
}) {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
        <HoverInput
          width={"80%"}
          label={"Name"}
          handleChange={handleChange}
          name="name"
          value={formData.name || ""}
        />
      </Grid>
      <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
        <HoverInput
          width={"80%"}
          label={"Email"}
          handleChange={handleChange}
          name="email"
          value={formData.email}
        />
      </Grid>
      <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
        <HoverInput
          width={"80%"}
          label={"Password"}
          handleChange={handleChange}
          name="password"
          value={formData.password}
        />
      </Grid>
      <Grid item xs={12} marginTop={{ xs: "10px", md: "30px" }}>
        <HoverInput
          width={"80%"}
          label={"Phone"}
          handleChange={handleChange}
          name="phone"
          value={formData.phone || ""}
        />
      </Grid>
    </Grid>
  );
}

export default SignupInput;
