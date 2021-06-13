import { Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Link } from "@material-ui/core"
import { Facebook as IFacebook, Instagram as IInstagram, Twitter as ITwitter, LinkedIn as ILinkedIn, PlayArrowRounded as IPlayArrow } from '@material-ui/icons';

export const Contact = ({ classes }) => {
    return (
        <Box height="auto" pt="3%" pb="3%" bgcolor="secondary.dark">
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Box className="f-20" mb={2}>
                                <strong>Social Media</strong>
                            </Box>
                            <Link href="https://www.linkedin.com/in/rppacleb/" target="_blank" style={{marginRight: '20px'}}>
                                <ILinkedIn className="f-40" />
                            </Link>
                            <Link href="https://www.facebook.com/rj.pacleb.3/" target="_blank" style={{marginRight: '20px'}}>
                                <IFacebook className="f-40" />
                            </Link>
                            <Link href="https://www.instagram.com/monmon_san26/" target="_blank" style={{marginRight: '20px'}}>
                                <IInstagram className="f-40" />
                            </Link>
                            <Link href="https://twitter.com/pacleb_mon" target="_blank" style={{marginRight: '20px'}}>
                                <ITwitter className="f-40" />
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box p={2} borderRadius={15} bgcolor="secondary.dark">
                            <Box className="f-20" mb={2}>
                                <strong>Further Information</strong>
                            </Box>
                            <Typography className="f-18">
                                #2032 Pagkalinawan St., Ibayo-tipas, Taguig City, Metro Manila, Philippines
                            </Typography>
                            <Typography className="f-15">
                                paclebrj@gmail.com / monmonpacleb@yahoo.com
                            </Typography>
                            <Typography className="f-15">
                                +639369301184 / +639687448657
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}