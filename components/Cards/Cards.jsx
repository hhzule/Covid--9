import React from 'react';
import {Typography } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';


const Cards = ({data: { confirmed, recovered, deaths, lastUpdate}}) => {
    
    if(!confirmed) {
        return 'Loading ...';
    }
    
  
    
    return(
        <div className={styles.container}>
        
         <div className={styles.containerb}>
  <div className={styles.circlewrapper}>
    <div className={styles.circlecontent}> <div className={styles.infected}>
                   
                   <Typography color="textSecondary" gutterBottom>Infected</Typography>
                   <Typography variant="h5">Real time Data<br />
                   <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                   </Typography>
                   <Typography color="textSecondary">Current Date<br />{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography variant="body2">Active cases</Typography>
               
           </div></div>
    <div className={styles.circleone}></div>
    <div className={styles.circletwo}></div>
    <div className={styles.circlethree}></div>
  </div>
</div>
<div className={styles.containerb}>
  <div className={styles.circlewrapper}>
    <div className={styles.circlecontent}> <div  className={styles.recovered}>
                   <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                   <Typography variant="h5">Real time Data<br />
                   <CountUp start={0} end={recovered.value} duration={2} separator="," className={cx(styles.neon, styles.digital)}/>
                   </Typography>
                   <Typography color="textSecondary">Current Date<br />{new Date(lastUpdate).toDateString()}</Typography>
                   <Typography variant="body2">Recovered cases</Typography>
               
               
           </div></div>
    <div className={styles.circleone}></div>
    <div className={styles.circletwo}></div>
    <div className={styles.circlethree}></div>
  </div>
</div>
<div className={styles.containerb}>
  <div className={styles.circlewrapper}>
    <div className={styles.circlecontent}> <div  className={styles.deaths}>
    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h6">Real time Data<br />
                        <CountUp start={0} end={deaths.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">Current Date<br />{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">deaths</Typography>
                    
           </div></div>
    <div className={styles.circleone}></div>
    <div className={styles.circletwo}></div>
    <div className={styles.circlethree}></div>
  </div>
</div>
    
     

        </div>
    )
}

export default Cards;
