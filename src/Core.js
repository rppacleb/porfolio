import { Box, Link, Typography, Grid, makeStyles } from "@material-ui/core"

import { Experiences } from "./components/Experiences";
import { Counts, TechBelief } from "./components/Summary";
import { Work } from "./components/Work";
import { Expertise } from "./components/Expertise";
import { Recognitions } from "./components/Recognitions";
import { Contact } from "./components/Contact";

import bg1 from './assets/images/bg1.jpg'
import me1 from './assets/images/me2.jpg'
import cv from './assets/files/rppacleb_cv.pdf'

let styles = makeStyles(theme => ( {
	bg1: {
		backgroundPosition: 'left',
		[theme.breakpoints.up('sm')]: {
			backgroundImage: `url(${bg1})`,
		},
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',
		overflow: 'hidden'
	},
	bg2: {
		backgroundPosition: 'center',
		backgroundImage: `url(${me1})`,
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',
		// backgroundImage: `url(${me1})`,
		// backgroundSize: '120%',
		// borderRadius: '300px 0 0 300px'
		padding: `150px`
	},
	start: {
		borderRadius: '150px 150px 0 0'
	},
	canvas2: {
		borderRadius: '300px 0 0 0'
	},
	core1: {
		padding: '5% 0 0 5%',
		[theme.breakpoints.up('sm')]: {
			padding: '25% 0 0 20%',
		},
	}
}))

export const Core = () => {
	let classes = styles()
	return (
		<Box height="100%">
			<Box display="flex" justifyContent="space-between" height="100%" className={classes.bg1}>
				<Grid container spacing={3}>
					<Grid item sm={6} xs={12}>
						<Box className={classes.core1}>
							<Box mb="15%" className="f-20" style={{letterSpacing: '2px'}}><strong>RPPACLEB</strong></Box>
							<Box color="primary.main" borderRadius={10} className="f-md-20 f-15">Hola. Kumusta. Hi.</Box>
							<Typography className="f-md-50 f-30">I'M <strong>RAMON PACLEB</strong></Typography>
							<Box mt={-1} mb={3}>
								<Typography className="f-md-20 f-15">A UI/UX Designer and a Fullstack Web Developer</Typography>
							</Box>
							<Box bgcolor="primary.main" color="white" p={0.5} borderRadius={10} width="150px" mb="15%" />
							<Box display="flex" justifyContent="center">
								<Link href={cv} target="_blank">
									<Box bgcolor="primary.main" color="white" p={1} pl={4} pr={4} borderRadius={10} className="f-17" mr={5}><strong>View my CV</strong></Box>
								</Link>
								<Box color="primary.main" p={1} borderRadius={10} className="f-17" mr={5}><strong>scroll down</strong></Box>
							</Box>
						</Box>
					</Grid>
					<Grid item sm={6} xs={12}>
						<Box height="9%" bgcolor="#ffffff"></Box>
						<Box height="91%" className={classes.bg2}></Box>
					</Grid>
				</Grid>
			</Box>
			<Experiences classes={classes} style={{overflow: 'hidden'}} />
			<Counts classes={classes} style={{overflow: 'hidden'}} />
			<Work classes={classes} style={{overflow: 'hidden'}} />
			<TechBelief classes={classes} style={{overflow: 'hidden'}} />
			<Expertise classes={classes} style={{overflow: 'hidden'}} />
			<Recognitions classes={classes} style={{overflow: 'hidden'}} />
			<Contact classes={classes} style={{overflow: 'hidden'}} />
		</Box>
	)
}