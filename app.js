document.addEventListener('DOMContentLoaded' , getWeather)

const weather = new Weather('Delhi' , 'India');

function getWeather() {
    weather.getWeather()
    .then(
    givenRes => {
        console.log(givenRes)
        const ui = new UI();
        ui.paint(givenRes);
    }
    ).catch(
        err => {
            if(err == 'TypeError: Failed to fetch') {
                ui.showError('Please Check Your Internet Connection!' , 'red');
            } else {
                ui.showError(`ERROR : ${err}` , 'red');
            }
        }
    )
    let ls = new LS();
    ls.getLocation();
}