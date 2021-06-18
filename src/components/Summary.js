import { Box, Container, Typography, Avatar } from "@material-ui/core"
import { LayersRounded as ILayers, LocalCafeRounded as ILocalCafe, HowToRegRounded as IHowToReg, CodeRounded as ICode } from '@material-ui/icons';

import me1 from '../assets/images/me1.jpg'

export const Counts = ({ classes }) => {
    return (
        <Box mt="7%" display="flex" alignItems="center" className="f-20" height="30%" bgcolor="secondary.dark">
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box color="gray"><ILayers className="f-md-60 f-30" /> </Box>
                        <strong className="f-15">09</strong>
                        <Typography className="f-13">Projects</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box color="gray"><IHowToReg className="f-md-60 f-30" /> </Box>
                        <strong className="f-15">08</strong>
                        <Typography className="f-13">Recognitions</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box color="gray"><ICode className="f-md-60 f-30" /> </Box>
                        <strong className="f-15">12</strong>
                        <Typography className="f-13">Technologies</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Box color="gray"><ILocalCafe className="f-md-60 f-30" /> </Box>
                        <strong className="f-15">800+</strong>
                        <Typography className="f-13">Coffees</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export const TechBelief = ({ classes }) => {
    return (
        <Box mt="7%" display="flex" alignItems="center" className="f-20" height="50%" bgcolor="secondary.dark">
            <Container>
                <Box display="flex" flexDirection="column" textAlign="center" alignItems="center">
                    <Box mb={2}>
                        <Avatar alt="me1" src={me1} style={{width: '100px', height: '100px'}} />
                    </Box>
                    <Typography className="f-md-20 f-14">
                        <strong>Programming is like exercising.</strong> It's hard to get started, and it takes a while to progress.<br></br>
                        You'll see many people who are more advanced than you.<br></br>
                        But<strong> the longer you do it, the better you'll get.</strong>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}