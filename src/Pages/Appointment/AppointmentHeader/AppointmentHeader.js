import { Container, Grid } from "@mui/material";
import React from "react";

import Calender from "../../Shared/Calender/Calender";
const AppointmentHeader = ({ date, setDate }) => {

    return (
        <div>
            <img style={{ marginTop: '50', width: '100%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvhDfRDGCEuIE3kBsMvzN99YapWlYgpPE_w&usqp=CAU" />
            <Container>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={12}>
                        <Calender date={date} setDate={setDate}></Calender>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
};

export default AppointmentHeader;