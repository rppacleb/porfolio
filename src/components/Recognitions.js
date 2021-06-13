import { Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Link } from "@material-ui/core"

export const Recognitions = ({ classes }) => {
    return (
        <Box height="auto" pt="7%" pb="7%">
            <Box mb="5%" textAlign="center" className="f-20" style={{letterSpacing: '2px'}}><strong>MY RECOGNITIONS</strong></Box>
            <Container style={{overflow: 'hidden'}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>Employee of the Month</strong>
                            </Typography>
                            <Typography className="f-14">
                                Dadas Litson
                            </Typography>
                            <Typography className="f-14">
                                October 2019
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>Employee of the Month</strong>
                            </Typography>
                            <Typography className="f-14">
                                Dadas Litson
                            </Typography>
                            <Typography className="f-14">
                                December 2019
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>Employee of the Month</strong>
                            </Typography>
                            <Typography className="f-14">
                                Dadas Litson
                            </Typography>
                            <Typography className="f-14">
                                January 2020
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>Employee of the Qaurter</strong>
                            </Typography>
                            <Typography className="f-14">
                                Dadas Litson
                            </Typography>   
                            <Typography className="f-14">
                                October 2019
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>React JS Training - Trainer</strong>
                            </Typography>
                            <Typography className="f-14">
                                Aktus Global Management Inc & I4One Inc.
                            </Typography>   
                            <Typography className="f-14">
                                February 2021
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Typography className="f-20">
                                <strong>AWS Back-end Training - Trainer</strong>
                            </Typography>
                            <Typography className="f-14">
                                Aktus Global Management Inc & I4One Inc.
                            </Typography>   
                            <Typography className="f-14">
                                March 2021
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}