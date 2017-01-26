import { combineReducers } from 'redux';
import WeatherReducer from './reducerWeather.jsx';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
