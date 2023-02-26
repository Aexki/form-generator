import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";
import init, { get_form } from "form-creator";

function Home() {
    const navigate = useNavigate();
    const globalContext = useGlobalContext();

    const createForm = () => {
        // const requestOptions = {
        //     method: "GET",
        // };
        // fetch("http://127.0.0.1:8000/", requestOptions)
        //     .then((response) => {
        //         return response.text();
        //     })
        //     .then((data) => {
        //         globalContext.setData(data);
        //         navigate("/result");
        //     });
        // init().then(() => {
        console.log(get_form("form1.json"));
        // });
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Card sx={{ textAlign: "left" }}>
                        <CardHeader subheader="Actions" />
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                onClick={() => {
                                    createForm();
                                }}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <CardActions>
                                    <AddCircleIcon />
                                    &emsp; Add a new form.
                                </CardActions>
                            </div>
                            <Link
                                to="/result"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <CardActions>
                                    <FileOpenIcon />
                                    &emsp; Import an existing form.
                                </CardActions>
                            </Link>
                            <Link
                                to="/result"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <CardActions>
                                    <SendToMobileIcon />
                                    &emsp; Export form.
                                </CardActions>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid>
        </div>
    );
}

export default Home;
