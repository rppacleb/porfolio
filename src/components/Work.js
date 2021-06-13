import { Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Link } from "@material-ui/core"
import { LinkRounded as ILink } from '@material-ui/icons';

import work1 from '../assets/images/work1.png'
import work2 from '../assets/images/work2.png'
import work3 from '../assets/images/work3.png'
import work4 from '../assets/images/work4.png'
import work5 from '../assets/images/work5.png'
import work6 from '../assets/images/work6.png'
import work7 from '../assets/images/work7.png'

export const Work = ({ classes }) => {
    return (
        <Box height="auto" pt="7%">
            <Box mb="5%" textAlign="center" className="f-20" style={{letterSpacing: '2px'}}><strong>MY WORKS</strong></Box>
            <Container>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work7} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>POF Online Exam</strong>
                                        </Typography>
                                        <Link href="https://test-online-exam.v2.kabayantax.com/" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Aug '19 - Sept '19
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            POF Online Exam is an online platform to manage all type of examination, this includes creating, statistic monitoring and result generation.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work2} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>POFSIS Main</strong>
                                        </Typography>
                                        <Link href="https://dev-sls-pofsis.pofsis.com/" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Sep '19 - Oct '19
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            POFSIS Main is an authentication system that allows all accredited tools to retrieve pofsis users with UI/UX. 
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work1} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>POFPersonal</strong>
                                        </Typography>
                                        <Link href="https://pofsis.com" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Oct '19 - Dec '19
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            POFPersonal is a platform that helps your personal growth to be 10x Bigger, 10x Faster, and 10x Higher.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work3} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>POFBusiness</strong>
                                        </Typography>
                                        <Link href="https://business.pofsis.com" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Jan '20 - Apr '20
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            POFPersonal is a platform that helps your business to be 10x Bigger, 10x Faster, and 10x Higher.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work6} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>Dadas Online Ordering</strong>
                                        </Typography>
                                        <Link href="https://dadas.pofsis.com/category/market/all" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Feb '20
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            Is an Online Ordering system intended for Dadas to provide extraordinary services through online
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work4} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>Management Tool</strong>
                                        </Typography>
                                        <Link href="https://management.pofsis.com" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Apr '20 - Sep '20
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            MT is a an accreditation system helps all systems applied to be aligned to the standards of Pofsis. All Accredited tools will be given a permission to be sell and use the name of Pofsis.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card style={{borderRadius: '15px'}}>
                            <CardActionArea>
                                <CardMedia image={work5} title="Contemplative Reptile" style={{height: '200px'}} />
                                <CardContent>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography className="f-20">
                                            <strong>Pofsis for Developers</strong>
                                        </Typography>
                                        <Link href="https://developer.pofsis.com" target="_blank">
                                            <Box display="flex" alignItems="center">
                                                <ILink />Check now
                                            </Box>
                                        </Link>
                                    </Box>
                                    <Box height="80px">
                                        <Typography className="f-14">
                                            Sept '20 - Dev '21
                                        </Typography>
                                        <Typography className="f-12" style={{textAlign: 'justify'}}>
                                            Pofsis for developers provide all available API's for the integration of POFSIS for all accredited tools by Management Tool.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}