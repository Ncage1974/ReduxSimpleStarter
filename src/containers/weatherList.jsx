import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.jsx';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weatherReading) => { return weatherReading.main.temp });
        const pressures = cityData.list.map((weatherReading) => { return weatherReading.main.pressure });
        const humidities = cityData.list.map((weatherReading) => { return weatherReading.main.humidity });

        console.log(cityData.list[0]);
        return (
            <tr key={name}>
                <td>
                    { cityData.city.name }
                </td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
                <td>
                    <Chart data={pressures} color="green" />
                </td>
                <td>
                    <Chart data={humidities} color="black" />
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