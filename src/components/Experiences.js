import { Box, Container, Grid, Typography, Divider } from "@material-ui/core"

import img1 from '../assets/images/img1.gif'
import ed1 from '../assets/images/ed1.png'
import comp1 from '../assets/images/comp1.png'
import comp2 from '../assets/images/comp2.png'

export const Experiences = ({ classes }) => {
    return (
        <Box height="auto" pt="7%">
            <Box mb="5%" textAlign="center" className="f-20" style={{letterSpacing: '2px'}}><strong>MY EDUCATION & EXPERIENCES</strong></Box>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={5}>
                        <img src={img1} width="100%" alt="img1" />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Box display="flex" alignItems="start">
                            <Box width="12%" minWidth="12%" display="flex" flexDirection="column" alignItems="center">
                                <img src={ed1} alt="comp1" width="100%" />
                                <Box m={1}>
                                    <Divider orientation="vertical" style={{height: '200px', width: '2px', backgroundColor: 'grey'}} />
                                </Box>
                            </Box>
                            <Box ml={2} bgcolor="secondary.dark" p={2} borderRadius={20} width="100%">
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography className="f-md-20 f-14"><strong>BS Information Technology</strong></Typography>
                                    <Box color="secondary.main" className="f-md-18 f-10"><strong>Aug '15 - May '19</strong></Box>
                                </Box>
                                <Typography className="f-md-18 f-13">Saint Louis Collage - La Union</Typography>
                                <Typography className="f-md-14 f-10">Education</Typography>
                                <Box mt={1} width="100%" className="f-md-18 f-12">
                                    <Box style={{textAlign: 'justify'}}>
                                       Studied BSIT for 4 years Majoring Graphics Design and Web Design
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="start">
                            <Box width="12%" minWidth="12%" display="flex" flexDirection="column" alignItems="center">
                                <img src={comp1} alt="comp1" width="100%" />
                                <Box m={1}>
                                    <Divider orientation="vertical" style={{height: '200px', width: '2px'}} />
                                </Box>
                            </Box>
                            <Box ml={2} bgcolor="secondary.light" p={2} borderRadius={20} width="100%">
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography className="f-md-20 f-14"><strong>Web Developer</strong></Typography>
                                    <Box color="secondary.main" className="f-md-18 f-10"><strong>Aug '19 - Mar '20</strong></Box>
                                </Box>
                                <Typography className="f-md-18 f-13">Dadas Litson</Typography>
                                <Typography className="f-md-14 f-10">Experience</Typography>
                                <Box mt={1} width="100%" className="f-md-18 f-12">
                                    <Box style={{textAlign: 'justify'}}>
                                        Responsible for participating and developing in the full time life cycle of new web app development projects of  main and sister companies, and for implement and maintaining best practices procedures in all areas of work.
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="start">
                            <Box width="12%" minWidth="12%" display="flex" flexDirection="column" alignItems="center">
                                <img src={comp1} alt="comp1" width="100%" />
                                <Box m={1}>
                                    <Divider orientation="vertical" style={{height: '200px', width: '2px'}} />
                                </Box>
                            </Box>
                            <Box ml={2} bgcolor="secondary.light" p={2} borderRadius={20} width="100%">
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography className="f-md-20 f-14"><strong>Lead Web Developer</strong></Typography>
                                    <Box color="secondary.main" className="f-md-18 f-10"><strong>Mar '20 - Dec '20</strong></Box>
                                </Box>
                                <Typography className="f-md-18 f-13">Dadas Litson</Typography>
                                <Typography className="f-md-14 f-10">Experience</Typography>
                                <Box mt={1} width="100%" className="f-md-18 f-12">
                                    <Box style={{textAlign: 'justify'}}>
                                        Building up and enhancing the integration and implementation of new and existing web app projects. Responsible for monitoring and maintaining  deployed projects. Handling and managing subordinates to achieve one goal.  
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="start">
                            <Box width="12%" minWidth="12%" display="flex" flexDirection="column" alignItems="center">
                                <img src={comp2} alt="comp1" width="100%" />
                            </Box>
                            <Box ml={2} bgcolor="secondary.light" p={2} borderRadius={20} width="100%">
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography className="f-md-20 f-14"><strong>Senior Web Developer</strong></Typography>
                                    <Box color="secondary.main" className="f-md-18 f-10"><strong>Jan '21 - Present</strong></Box>
                                </Box>
                                <Typography className="f-md-18 f-13">I4One Inc.</Typography>
                                <Typography className="f-md-14 f-10">Experience</Typography>
                                <Box mt={1} width="100%" className="f-md-18 f-12">
                                    <Box style={{textAlign: 'justify'}}>
                                        Responsible for planning, monitoring and managing subordinates and their handled projects and owned projects assigned. Coordinating with other teams such as Graphics, QC,  BPA’s and Team Heads to provide and maintain standard procedures. In charge of learning and implementing new technologies, practices and development structu12s.
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}