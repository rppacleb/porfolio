import { Box, Container, Grid, Typography, Divider } from "@material-ui/core"

import comp1 from '../assets/images/comp1.png'
import texp1 from '../assets/images/texp1.png'
import texp2 from '../assets/images/texp2.png'
import texp3 from '../assets/images/texp3.png'
import texp4 from '../assets/images/texp4.png'
import texp5 from '../assets/images/texp5.png'
import texp6 from '../assets/images/texp6.png'
import texp7 from '../assets/images/texp7.png'
import texp8 from '../assets/images/texp8.png'
import texp9 from '../assets/images/texp9.png'
import texp10 from '../assets/images/texp10.png'
import texp11 from '../assets/images/texp11.png'

export const Expertise = ({ classes }) => {
    return (
        <Box bgcolor="primary.main" color="#ffffff" height="auto" pt="7%" pb="7%">
            <Box mb="5%" textAlign="center" className="f-20" style={{letterSpacing: '2px'}}><strong>MY EXPERTISE</strong></Box>
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={4}>
                        <Box style={{letterSpacing: '2px'}} mb={3}><strong>Summary</strong></Box>
                        <Box textAlign="justify" className="f-md-17 f-14">
                            <strong>Web Application Developer with 2+ Years experience</strong> in Designing and Developing UI/UX, Backend Development, App Versioning, Quality Checking, Debugging, and Training Staffs within Development teams. Proven ability in optimizing web functionalities that improve data retrieval and manipulation, Fast Learner, Efﬁcient and Would do anything to provide the expected output and even better.
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box style={{letterSpacing: '2px'}} mb={3}><strong>Technical</strong></Box>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp1} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">HTML</strong></Typography>
                                        <Typography className="f-15">10/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp2} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">CSS</strong></Typography>
                                        <Typography className="f-15">10/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="35px" minWidth="35px" mr={1}>
                                        <img src={texp3} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">JS / Jquery</strong></Typography>
                                        <Typography className="f-15">10/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp4} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">Laravel 6 - 8</strong></Typography>
                                        <Typography className="f-15">10/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp5} alt="texp4" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">React JS</strong></Typography>
                                        <Typography className="f-15">8/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp6} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">Vue JS</strong></Typography>
                                        <Typography className="f-15">5/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp7} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">Python</strong></Typography>
                                        <Typography className="f-15">7/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp8} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">MYSQL</strong></Typography>
                                        <Typography className="f-15">8.8/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp9} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">Postgre SQL</strong></Typography>
                                        <Typography className="f-15">8.8/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp10} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">AWS Gateway</strong></Typography>
                                        <Typography className="f-15">9.5/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <Box display="flex" alignItems="center">
                                    <Box width="40px" minWidth="20px" mr={1}>
                                        <img src={texp11} alt="comp1" width="100%" />
                                    </Box>
                                    <Box>
                                        <Typography><strong className="f-md-20 f-15">AWS Lambda</strong></Typography>
                                        <Typography className="f-15">9/10</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}