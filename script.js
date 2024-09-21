document.getElementById('calculateBtn').addEventListener('click', calculateAge);

document.getElementById('settingsBtn').addEventListener('click', showSettings);

document.getElementById('closeBtn').addEventListener('click', closeSettings);

document.querySelectorAll('.color-btn').forEach(btn => {

    btn.addEventListener('click', changeBackgroundColor);

});

document.getElementById('countrySelect').addEventListener('change', changeLanguageByCountry);

const translations = {

    ar: {

        title: "حاسب العمر",

        prompt: "يرجى إدخال تاريخ الميلاد.",

        result: "عمرك هو: ",

        settings: "الإعدادات",

        color: "اختر اللون الخلفي:",

        selectCountry: "اختر الدولة:",

        calculate: "احسب عمري",

    },

    en: {

        title: "Age Calculator",

        prompt: "Please enter your birth date.",

        result: "Your age is: ",

        settings: "Settings",

        color: "Choose Background Color:",

        selectCountry: "Select Country:",

        calculate: "Calculate My Age",

    },

    fr: {

        title: "Calculateur d'âge",

        prompt: "Veuillez entrer votre date de naissance.",

        result: "Votre âge est: ",

        settings: "Paramètres",

        color: "Choisir la couleur de fond:",

        selectCountry: "Sélectionner le pays:",

        calculate: "Calculez mon âge",

    },

};

let currentLanguage = 'en'; // اللغة الافتراضية

function calculateAge() {

    const birthdateInput = document.getElementById('birthdate').value;

    const resultDiv = document.getElementById('result');

    if (!birthdateInput) {

        resultDiv.textContent = translations[currentLanguage].prompt;

        return;

    }

    const birthdate = new Date(birthdateInput);

    const today = new Date();

    

    let age = today.getFullYear() - birthdate.getFullYear();

    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {

        age--;

    }

    resultDiv.textContent = `${translations[currentLanguage].result} ${age} سنة`;

}

function showSettings() {

    document.getElementById('settingsPopup').style.display = 'flex';

}

function closeSettings() {

    document.getElementById('settingsPopup').style.display = 'none';

}

function changeBackgroundColor(event) {

    const color = event.target.dataset.color;

    document.body.style.backgroundColor = color;

}

function changeLanguageByCountry() {

    const countrySelect = document.getElementById('countrySelect');

    const country = countrySelect.value;

    switch (country) {

        case "مصر":

        case "الأردن":

        case "الإمارات العربية المتحدة":

            currentLanguage = "ar";

            break;

        case "أمريكا":

        case "كندا":

        case "بريطانيا":

            currentLanguage = "en";

            break;

        case "فرنسا":

            currentLanguage = "fr";

            break;

        default:

            currentLanguage = "en"; // العودة إلى اللغة الافتراضية

    }

    setLanguage(currentLanguage);

}

function setLanguage(lang) {

    document.getElementById('appTitle').textContent = translations[lang].title;

    document.getElementById('calculateBtn').textContent = translations[lang].calculate;

    document.getElementById('closeBtn').textContent = "×";

    document.querySelector('.popup-content h2').textContent = translations[lang].settings;

    document.querySelector('.popup-content h3:nth-of-type(1)').textContent = translations[lang].color;

    document.querySelector('.popup-content h3:nth-of-type(2)').textContent = translations[lang].selectCountry;

}

// التأكد من بدء التطبيق باللغة الافتراضية

setLanguage(currentLanguage);