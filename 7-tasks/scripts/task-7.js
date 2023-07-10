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

class SelectList {
    setOptionsList(newOptions) { this.optionsList = newOptions; }

    getOptionsList() { return this.optionsList; }

    appendSelectList() {
        const [[firstKey, firstValue]] = Object.entries(this.optionsList);
        if (Array.isArray(firstValue)) {
            this.extractArray();
            this.buildOptionElements();
        } else {
            this.buildOptionElements();
        }
    }

    buildOptionElements() {
        for (let key in this.getOptionsList()) {
            const currentOption = document.createElement("option");
            currentOption.value = key;
            currentOption.text = this.getOptionsList()[key];
            this.listSelect.add(currentOption);
        }
        taskSeven.appendChild(this.listSelect);
    }
    extractArray() {
        const countryKey = document.querySelector("#countries").value
        const objectCities = {};
        for (let val in this.getOptionsList()[countryKey]) {
            objectCities[parseInt(val) + 1] = this.getOptionsList()[countryKey][val];
        }
        this.setOptionsList(objectCities);
    }
    clearOptions(cityList) {
        while (this.listSelect.firstChild) {
            this.listSelect.remove(this.listSelect.firstChild);
        }
        this.setOptionsList(cityList);
        this.appendSelectList();
        this.printInfo();
    }
    printInfo() {
        const countryPrint = countries.options[countries.selectedIndex].textContent;
        const cityPrint = cities.options[cities.selectedIndex].textContent;
        taskSevenText.textContent = `${countryPrint}, ${cityPrint}`;
    }
}

class FillingContryiesSelect extends SelectList {
    constructor(name, optionsList) {
        super();
        this.name = name;
        this.optionsList = optionsList;
        this.listSelect = document.createElement("select");
    }

    createSelectList() {
        this.listSelect.name = this.name;
        this.listSelect.id = this.name;
        this.listSelect.classList.add("select-list");
        super.appendSelectList();
    }
}

const nameCountriesList = "countries";
const nameCitiesList = "cities";

const contriesList = new FillingContryiesSelect(nameCountriesList, countryList);
contriesList.createSelectList();
const citiesList = new FillingContryiesSelect(nameCitiesList, cityList);
citiesList.createSelectList();
citiesList.printInfo();
countries.addEventListener('change', () => {
    citiesList.clearOptions(cityList);
});
cities.addEventListener('change', () => {
    citiesList.printInfo();
});