
var vm = new Vue({
    el: '#eltemps',
    data: {
        selectedCity: "",
        ciutatActual: null,
		ciutats: [
				"Barcelona",
				"Lleida",
				"Zaragoza",
				"Sevilla",
				"Madrid",
				"Paris",
				"Melbourne",
				"Moscow",
				"Pekin",
				"Marrakech"]
    },
    created: function () {
        this.selectedCity = this.ciutats[0]
    },
    watch: {
        selectedCity: function (){
            this.getWeather(this.selectedCity)
        }
    },
    methods: {
        getWeather(city) {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&lang=ca&appid=8660dddfbe5f16ee37dbd6883d8f07d5';
            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (item) {
                    vm.ciutatActual = item;
                })
                .catch(function(error) {
                    console.log(error);
                })
        },
        itemClicked: function(item) {
            this.getWeather();
            this.onClick(item);
        }

    }
    

})


