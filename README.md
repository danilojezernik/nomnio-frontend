# Frontend task for NOMNIO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3. I decided to make a backend to hide API key. It is a good practice that I have learned the hard way from my mentor and that is NEWER REVEAL YOUR API KEY TO PUBLIC. Design is made according to the instructions. 

- So it is responsive and main color is where it should be.
- It has basic functionality.
- It uses ngx-translator to translate page to Slovenian or English.
- it has a button that refreshes the data without reloading the button.
- Data are stored in local storage and when saved data from local storage are shown on the page.

### [NOMNIO hosted on web](https://nomnio.danilojezernik.com/)

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Production server

Run `npm run prod` for a prod server. Navigate to `http://localhost:4200/`. Data will be sent from `https://nomnio-api-0cacfbde4021.herokuapp.com/<endpoint-name>`. Use endpoint name: `weather-forecast` or `weather-current`; to see data received from API.

## Backend

Backend is made with Python in FastAPI framework.

[Backend](https://github.com/danilojezernik/nomnio-backend)

## Reference

- [ngx-translation](https://github.com/ngx-translate/core)
- [OpenWeather](https://openweathermap.org/)
- [OpenWeather image](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
