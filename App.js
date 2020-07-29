import React, { Component } from 'react';
import { Cards, Chart, Countryselect, About, Map} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import Header from './components/Header/header';
import { Grid } from '@material-ui/core';
//  import 'leaflet/dist/leaflet.css';

class App extends Component {
  state = {
    data : {},
  }

   async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
    
  }
  render() {
    const { data } = this.state;
  return (
    <div>
    <Header className={styles.header} />
    <div className={styles.container}>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Cards  data={data}/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <Chart/> 
        </Grid>
      
        <Grid item xs={12} sm={12}>
        <Countryselect />
        </Grid>
      <About />
        </Grid>
        <Map />
     
        </div>
        </div>
  );
}
}

export default App;

