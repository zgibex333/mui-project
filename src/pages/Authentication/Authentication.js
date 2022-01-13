import React from "react";
import Grid from "@mui/material/Grid";
import CommonBtn from "../../Components/common/CommonBtn";

const Authentication = () => {
  return (
    <Grid item xs={8}>
      Authentication
      <CommonBtn variant="contained" size={"large"}>
        Add user
      </CommonBtn>
      <CommonBtn variant="outlined" color="primary" size={"large"}>
        Add user
      </CommonBtn>
    </Grid>
  );
};

export default Authentication;
