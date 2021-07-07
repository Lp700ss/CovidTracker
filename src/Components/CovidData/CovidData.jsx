
import * as React from 'react';
import styles from '../../App.module.css';
import  Cards  from '../Cards/Cards';
import  Charts  from '../Charts/Chart';
import  CountryPicker  from '../CountryPicker/CountryPicker' ;
// import DateFilter from '../DateFilter/DateFilter';
import { fetchData } from '../../API/index';//we dont have to specify index file name if your file name is index
import coronaImage from '../../Images/coronaimage.png';

class CovidData extends React.Component {
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const data = await fetchData();
    //console.log(fetchedData);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container} >
        <img className={styles.image} src={coronaImage} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        {/* <DateFilter handleDateFilter={this.handleDateFilter}/> */}
      </div>
    )
  }
}





export default CovidData;