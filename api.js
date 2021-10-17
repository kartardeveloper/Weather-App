class Weather {
    constructor(city , country) {
        this.apiKey = '00aac4e404c340119f684054210807';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`);

        const responseText = await response.json();
        return responseText;
    }

    changeLocation(city , country) {
        this.city = city;
        this.country = country;
    }
}