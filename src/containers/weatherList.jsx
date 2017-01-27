import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';
import GoogleMap from '../components/googleMap.jsx';

function convertKelvinToF(temp) {
    return _.round(((9 / 5) * (temp - 273)) + 32);
}

class WeatherList extends Component {



    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weatherReading) => { return convertKelvinToF(weatherReading.main.temp) });
        const pressures = cityData.list.map((weatherReading) => { return weatherReading.main.pressure });
        const humidities = cityData.list.map((weatherReading) => { return weatherReading.main.humidity });
        
        const { lon, lat } = cityData.city.coord;
        
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={ lon } lat={ lat } />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="F" />
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPA" />
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Hummidty</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);