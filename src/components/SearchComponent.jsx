import React, { useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import handleFormHook from "../hooks/handleFormHook";
import { RepoContext } from '../contexts/RepoContext'
import * as githubAPI from '../utils/github_API';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        width: '100%'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            marginLeft: theme.spacing(50),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    submitButton: {
        float: 'right'
    }
}));

const SearchComponent = () => {
    const classes = useStyles();
    const [githubUsername, handleChange, reset] = handleFormHook({ username: '' })
    const { repos, setRepo } = useContext(RepoContext);

    const handleSubmit = async (e) => {
        let _repos = await githubAPI.getRepos(githubUsername.username);
        if (_repos.length === 0) alert("not a valid github username")
        setRepo(_repos)
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Enter GitHub Username To Fetch Repos
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                            reset();
                        }}>
                            <InputBase
                                placeholder="spanosc1"
                                name='username'
                                value={githubUsername.username}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onChange={handleChange}
                            />
                            <Button variant="contained" type="submit" className={classes.submitButton}>Fetch Repos</Button>
                        </form>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default SearchComponent;