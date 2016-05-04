import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(forecast) {
    const temps = forecast.list.map(w => w.main.temp);
    const pressure = forecast.list.map(w => w.main.pressure);
    const humidity = forecast.list.map(w => w.main.humidity);
    
    return (
      <tr key={forecast.city.name}>
        <td>{forecast.city.name}</td>
        <td>
          <Chart data={temps} color="orange" height={40} width={100} />
        </td>
        <td>
          <Chart data={pressure} color="red" height={40} width={100} />          
        </td>
        <td>
          <Chart data={humidity} color="blue" height={40} width={100} />
        </td>          
      </tr>
    );
  }
  
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>            
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
