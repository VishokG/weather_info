import moment from 'moment';
import React, { useState } from 'react';
import InputFields from './components/InputFields/InputFields';
import MainInfo from './components/MainInfo/MainInfo';
import SubInfo from './components/SubInfo/SubInfo';
import { Container, Header } from './styled/App.styled';
import GlobalStyles from './styled/Global';

function App() {
	const mainData = {
		city: "Mumbai",
		country: "IN",
		time: moment().format("LTS"),
		temp: 28
	}

	const subData = {
		temp: {
			max: 28,
			min: 27
		},
		wind: 14,
		humidity: 88,
		direction: 270,
		pressure: 1005,
		sunrise: "6:26:20 AM",
		visibility: 4,
		sunset: "6:41:27 PM"
	}

	const [data, setData] = useState({
		main: mainData,
		sub: subData
	});

	async function handleInput(arg: {
		country: string,
		city: string
	}) {
		console.log(arg);
		const key = "5230a46ba502a0345854c111e6e2c254";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${arg.city},${arg.country}&appid=${key}&units=metric`;

		const data = await fetch(url).then(res => res);
		const json = await data.json();
		const weatherInfo = json;
		
		const newData = {
			main: {
				city: weatherInfo.name,
				country: weatherInfo.sys.country,
				time: moment().format("LTS"),
				temp: weatherInfo.main.temp
			},

			sub: {
				temp: {
					max: weatherInfo.main.temp_max,
					min: weatherInfo.main.temp_min,
				},
				wind: weatherInfo.wind.speed,
				humidity: weatherInfo.main.humidity,
				direction: weatherInfo.wind.deg,
				pressure: weatherInfo.main.pressure,
				sunrise: moment.unix(weatherInfo.sys.sunrise).format("LTS"),
				visibility: 4,
				sunset: moment.unix(weatherInfo.sys.sunset).format("LTS")
			}
		}

		setData(newData);
	}	

	const inputProps = {
		handleInput: handleInput
	}

	return (
		<div className="App">
			<GlobalStyles />
			<Container>
				<Header>
					Weather App
				</Header>
				<InputFields {...inputProps} />
				<MainInfo {...data.main}/>
				<SubInfo {...data.sub}/>
			</Container>
		</div>
	);
}

export default App;
