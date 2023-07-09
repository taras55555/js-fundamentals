// Task #7
const countryList = {
    ger: "Germany",
    usa: "USA",
    ukr: "Ukraine"
};

const cityList = {
    ger: ["Berlin", "Hamburg", "Munchen", "Koln", "Frankfurt am Main", "Stuttgart", "Dusseldorf", "Leipzig", "Dortmund", "Essen", "Bremen", "Dresden", "Hannover"],
    usa: ["Albuquerque", "Austin", "Baltimore", "Boston", "Charlotte", "Chicago", "Columbus", "Dallas", "Denver", "Detroit", "El Paso", "Fort Worth", "Houston", "Indianapolis", "Jacksonville", "Las Vegas", "Los Angeles", "Louisville", "Memphis", "Milwaukee", "Nashville", "New York", "Oklahoma City", "Philadelphia", "Phoenix", "Portland", "San Antonio", "San Diego", "San Francisco", "San Jose", "Seattle", "Washington"],
    ukr: ["Cherkasy", "Chernihiv", "Chernivtsi", "Dnipro", "Donetsk", "Ivano-Frankivsk", "Kharkiv", "Kherson", "Khmelnytskyi", "Kropyvnytskyi", "Kyiv", "Luhansk", "Lutsk", "Lviv", "Mykolaiv", "Odesa", "Poltava", "Rivne", "Simferopol", "Sumy", "Ternopil", "Uzhhorod", "Vinnytsia", "Zaporizhzhia", "Zhytomyr"]
}

class selectListCountries {
    constructor(id, options) {
        this.id = id;
        this.options = options;
        this.listSelect = document.createElement("select");
    }
    createSelectListCountries() {
        this.listSelect.name = this.id;
        this.listSelect.id = this.id;
        this.listSelect.classList.add("select-list");

        for (let key in this.options) {
            let currentElement = document.createElement("option");
            currentElement.value = key;
            currentElement.text = this.options[key];
            this.listSelect.add(currentElement);
        }
        taskSeven.appendChild(this.listSelect)
    }
    dropList() {
        this.listSelect.parentNode.removeChild(this.listSelect);
    }
}

class selectListCities extends selectListCountries {
    constructor(id, options) {
        super(id, options);
    }
    setOptions(newOptions) {
        this.options = newOptions;
    }

    createSelectListCities() {
        const countryKey = document.querySelector("#countries").value;
        const citiesInCountry = {};
        for (const index in this.options[countryKey]) {
            citiesInCountry[parseInt(index) + 1] = this.options[countryKey][index];
        }
        this.setOptions(citiesInCountry);
        this.createSelectListCountries();
    }
}

const countries = new selectListCountries("countries", countryList)
countries.createSelectListCountries()

let cities = new selectListCities("cities", cityList)
cities.createSelectListCities()

const countryElement = document.querySelector("#countries");
let cityElement;

countryElement.addEventListener('change', updateCountry);

updateCountry();

function updateCountry() {
    cities.dropList();
    cities = new selectListCities("cities", cityList)
    cities.createSelectListCities();
    cityElement = document.querySelector("#cities");
    cityElement.addEventListener('change', updateCity);
    updateCity();
}

function updateCity() {
    cityElement = document.querySelector("#cities");
    const selectedOptionCity = cityElement.querySelector("option[value='" + cityElement.value + "']");
    const selectedOptionCountry = countryElement.querySelector("option[value='" + countryElement.value + "']");
    taskSevenText.textContent = `${selectedOptionCountry.textContent}, ${selectedOptionCity.textContent}`;
}