import * as React from 'react';
import { Grid } from "@mui/material";



import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {

    return (
        <Grid container spacing={2}>

            <Grid item xs={12} sm={12}>
                <Appointments ></Appointments>
            </Grid>

        </Grid>

    );
};

export default DashboardHome;