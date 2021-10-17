class UI {
    constructor() {
        this.city = document.querySelector('.city');
        this.temp = document.querySelector('.temp');
        this.humidity = document.querySelector('.humidity');
        this.wind = document.querySelector('.wind');
        this.feelsLike = document.querySelector('.feelslike');
        this.changeLocation = document.querySelector('.change-location');
        this.modal = document.querySelector('.modal');
        this.modalClose = document.querySelector('.btn-close');
        this.saveBtn = document.querySelector('.save-btn');
        this.cityChange = document.querySelector('.city-change');
        this.countryChange = document.querySelector('.country-change');
        this.condition = document.querySelector('.condition');
        this.error = document.querySelector('.error');
    }

    paint(weather) {
        this.city.innerText = `${weather.location.name} , ${weather.location.country}`;
        this.condition.innerText = `Condition: ${weather.current.condition.text}`;
        this.temp.innerText = `Temperature: ${weather.current.temp_c} deg (In C) , ${weather.current.temp_f} deg (In F)`;
        this.humidity.innerText = `Humidity: ${weather.current.humidity}`;
        this.wind.innerText = `Wind Speed: ${weather.current.wind_kph} (In K/H)`
        this.feelsLike.innerText = `Feels Like: ${weather.current.feelslike_c} deg (In C)`;
    }

    showError(msg , background) {
        this.error.style.display = 'block';
        this.error.style.background = background;
        this.error.innerText = msg;

        setTimeout(() => {
            this.error.style.display = 'none';
        } , 3000)
    }
}

const ui = new UI();

ui.changeLocation.addEventListener('click' , () => {
    ui.modal.style.display = 'block';
});

ui.modalClose.addEventListener('click' , () => {
    ui.modal.style.display = 'none';
});

ui.saveBtn.addEventListener('click' , () => {
    if(ui.cityChange.value === '' || ui.countryChange.value === '') {
        ui.showError('Please fill out all the fields for change the location!' , 'red');
    } else {
        ui.modal.style.display = 'none';
        weather.changeLocation(ui.cityChange.value , ui.countryChange.value);
        getWeather();  
        
        ui.cityChange.value = '';
        ui.countryChange.value = '';
        ui.showError('Location changed!' , 'green');
    }
})