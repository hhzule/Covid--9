
import React from 'react';
import {Typography, Grid, Paper, Link, Divider } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#36a8f5',
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#36a8f5',
      },
  }));

const About= () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}><Typography variant='h3'>ABOUT CORONA VIRUS</Typography></Paper>
          </Grid>
      
          <Grid item xs={12}>
             
          <Paper className={classes.paper}> <Typography variant='h4'>SYMPTOMS</Typography>It can take up to 14 days for symptoms of coronavirus to appear. The main symptoms to look out for are:

          </Paper>
          </Grid>
          <Grid item xs={12}>
           <Paper className={classes.paper}> <Typography variant='h4'>PRECAUTIONS</Typography>
           <Typography> Prevent the spread of COVID-19: Clean your hands often. Use soap and water, or an alcohol-based hand rub.Maintain a safe distance from anyone who is coughing or sneezing.Wear a mask when physical distancing is not possible.Don’t touch your eyes, nose or mouth.Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.Stay home if you feel unwell.If you have a fever, cough and difficulty breathing, seek medical attention</Typography>.</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}><Typography  variant='h4'>MYTHS BUSTERS</Typography>
            <ul><li>FACT: Most people who get COVID-19 recover from it</li>
            <li>FACT: Thermal scanners CANNOT detect COVID-19</li>
            <li>FACT: There are currently no drugs licensed for the treatment or prevention of COVID-19</li>
            <li>FACT: 5G mobile networks DO NOT spread COVID-19</li>
            <li>FACT: Exposing yourself to the sun or temperatures higher than 25°C DOES NOT protect you from COVID-19</li>
            <li>The COVID-19 virus CANNOT be spread through mosquito bites</li>
            <li>FACT: People of all ages can be infected by the COVID-19 virus</li>
            <li>FACT: There are no medicines that can prevent or treat COVID-19</li></ul>
            </Paper>
          </Grid>
       
         
          <Grid item xs={12}>
            <Paper className={classes.paper2}> <Typography variant="h3">
                BOOTCAMP ASSIGNMENT
            </Typography>
            <Divider />
           <Link href='https://www.facebook.com/huma.hanif.9469' ><FacebookIcon /></Link>
           <Divider />
           <Link href='https://www.github.com/hhzule' ><GitHubIcon /> </Link>
           </Paper>
           
          </Grid>
        </Grid>
      </div>
    );
  }


  export default About;