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
    constructor(name) {
        this.name = name;
        this.listSelect = document.createElement("select");
    }

    createSelectList() {
        this.listSelect.name = this.id;
        this.listSelect.id = this.id;
        this.listSelect.classList.add("select-list");

        taskSeven.appendChild(this.listSelect)
    }
}

const nameCountriesList = "countries"
const nameCitiesList = "cities"

const contriesList = new SelectList(nameCountriesList);
contriesList.createSelectList();
const citiesList = new SelectList(nameCitiesList);
citiesList.createSelectList();