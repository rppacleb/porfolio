import React from 'react';
import ReactDOM from 'react-dom';
import { Core } from './Core';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import './assets/css/scrollbar.css';
import './assets/css/global.css';

const pageTheme = createMuiTheme({
	palette: {
        background: {
            default: '#ffffff'
        },
		primary: {
			light: '#f1ba83',
			main: '#1C2D50',
		},
		secondary: {
			light: '#e9ebee',
			main: '#1F6075',
			dark: '#eeedf3'
		},
		// error: {
		// 	main: '#DA4B1B',
		// },
		// warning: {
		// 	main: '#DA4B1B',
		// },
		// info: {
		// 	light: '#0a2d33',
		// 	main: '#15616D',
		// },
		// success: {
		// 	main: '#4caf50',
		// },
	},
    typography: {
		fontFamily: [
		  '-apple-system',
		  '"Nunito"',
		//   '"Segoe UI"',
		//   'sans-serif'
		].join(','),
	},
})

ReactDOM.render(<React.StrictMode><ThemeProvider theme={pageTheme}><CssBaseline /><Core /></ThemeProvider></React.StrictMode>, document.getElementById('root'));
