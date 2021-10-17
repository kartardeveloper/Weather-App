class LS {
    constructor(city , country) {
        this.city = city;
        this.country = country;
    }
    
    getLocation() {
        let locations;
        if(localStorage.getItem('locations') === null) {
            locations = [];
        } else {
            locations = JSON.parse(localStorage.getItem('locations'));
        }
        localStorage.push({city: this.city , country: this.country});
        localStorage.setItem('locations' , JSON.stringify(locations));
    }

    setLocation() {
        // let locations;
        // if(localStorage.getItem('locations') === null) {
        //     locations = [];
        // } else {
        //     locations = JSON.parse(localStorage.getItem('locations'));
        // }
        // localStorage.push({city: this.city , country: this.country});
        localStorage.setItem('locations' , JSON.stringify({city: this.city , country: this.country}));
    }
}