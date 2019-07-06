import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Built with love by '}
            <Link color="inherit" href="https://material-ui.com/">
                Prabhjot Summan
      </Link>
            {''}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '30vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#2E3B55',
        color: 'white'
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}
            {/* <Container component="main" className={classes.main} maxWidth="sm">
            </Container> */}
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Site is created by @prabhnith</Typography>
                    {/* <MadeWithLove /> */}
                </Container>
            </footer>
        </div>
    );
}