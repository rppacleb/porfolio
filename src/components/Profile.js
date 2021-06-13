import { Box, Grid } from "@material-ui/core"

import me2 from '../assets/images/me2.jpg'

export const Profile = ({ classes}) => {
    return (
        <Box className={classes.canvas2} height="100%" pt="7%">
            <Box mb="15%" textAlign="center" className="f-20" style={{letterSpacing: '2px'}}></Box>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img src={me2} alt="me2" />
                </Grid>
            </Grid>
        </Box>
    )
}