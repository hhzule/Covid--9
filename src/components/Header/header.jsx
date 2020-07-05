import React  from 'react';
import {CssBaseline, Typography, Container, makeStyles, Grid} from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import styles from './header.module.css';
import headimg from '../../header.gif';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 70}px,0)`
const trans2 = (x, y) => `translate3d(${x / 6 + 105}px,${y / 8 - 100}px,0)`
const trans3 = (x, y) => `translate3d(${x / 4 - 20}px,${y / 6 - 90}px,0)`
const trans4 = (x, y) => `translate3d(${x / 4 - 100}px,${y / 6 - 1}px,0)`
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
   
  },
}));

function Card() {
  
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class={styles.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div class={styles.card1} style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div class={styles.card2} style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div class={styles.card3} style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div class={styles.card4} style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
}
  
export default function Header() {
  const classes = useStyles();

  
  return (
    <React.Fragment>
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <CssBaseline />
        </Grid>
        <Grid item xs={12}>
        <Container maxWidth="xl">
       <Typography component="div" style={{ backgroundImage: `url(${headimg})`, height: '30vh', opacity: '0.7' }} > 
     <div className={styles.headertext}>COVID '19 TRACKER APP</div>
       </Typography>
     </Container>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.animatediv}>
        <div className={styles.parallexdiv}> <Card /></div>
        </div>
        </Grid>
       
        <Grid item xs={9}>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}
