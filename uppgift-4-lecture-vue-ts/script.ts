declare var Vue:any;

type Forecast = {
    hourly: HourForecast[];
}

type HourForecast = {
    weather: Weather[];
}

type Weather = {
    main: string;
}

type Screening = {
    title: string;
    image: string;
    time: number;
}

start();

async function start() {
    let forecast = await getWeatherData();

    let response = await fetch("screenings.json");
    let screenings: Screening[] = await response.json();

    Vue.createApp({
        data() {
            return {
                screenings: screenings,
                tickets: []
            };
        },
        methods: {
            formatTime(time: number): string {
                let hours = Math.floor(time);
                let hourString = hours.toString().padStart(2, '0');
            
                let minuteRatio = time - hours;
                let minutes = Math.round(60 * minuteRatio);
                let minuteString = minutes.toString().padStart(2, '0');
            
                return hourString + ':' + minuteString;
            },
            getWeatherForScreening(screening: Screening): string {
                let hoursUntilScreening = Math.round(screening.time - new Date().getHours());
                let weatherDescription = forecast.hourly[hoursUntilScreening].weather[0].main;
                return weatherDescription;
            },
            buyTicket(screening) {
                this.tickets.push(screening);
            },
            removeTicket(ticket) {
                let index = this.tickets.indexOf(ticket);
                this.tickets.splice(index, 1);
            }
        }
    }).mount('main');

}

async function getWeatherData(): Promise<Forecast> {
    const openWeatherApiKey = '6b687856384e82c961928144d6eb2eda';
    let params = new URLSearchParams({
        lat: '57.7089',
        lon: '11.9746',
        units: 'metric',
        appid: openWeatherApiKey,
    });
    let response = await fetch('https://api.openweathermap.org/data/2.5/onecall?' + params.toString());
    let weather: Forecast = await response.json();
    return weather;
}
