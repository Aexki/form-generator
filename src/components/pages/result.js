import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";

function Result() {
    const globalContext = useGlobalContext();

    useEffect(() => {
        // console.log(globalContext.data);
        document.getElementById("formData").innerHTML = globalContext.data;
    }, []);

    return (
        <div>
            <Grid container>
                <Grid xs={12} md={9} textAlign={"left"}>
                    Your system generated form is here :
                </Grid>
                <Grid xs={12} md={3} textAlign={"right"}>
                    <Button variant="contained">Edit Config file</Button>
                </Grid>
                {/* <TextField
                    label="Generated Form"
                    multiline
                    rows={30}
                    sx={{ marginY: "20px" }}
                    fullWidth
                /> */}
                <Box id="formData"></Box>
            </Grid>
        </div>
    );
}

export default Result;
