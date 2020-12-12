import React, { useContext } from 'react';
import { RepoContext } from '../contexts/RepoContext'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { FormHelperText, withTheme } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        minWidth: 350,
        margin: 20
    },
    mainDiv: {
        margin: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    text: {
        color: 'white'
    }
});

const RepoCard = () => {
    const classes = useStyles();
    const { repos, setRepo } = useContext(RepoContext);

    return (
        <Container maxWidth="md">
        <div className={classes.mainDiv}>
            {repos[0] ?
                repos.map((repo) =>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={repo.owner.avatar_url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {repo.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {repo.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link href={repo.html_url} target="_blank">
                                <Button>
                                    Repo Link
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
                :
                <h1 className={classes.text}>Search Above To Fetch Repos</h1>
            }
        </div>
        </Container>
    )
}


export default RepoCard;