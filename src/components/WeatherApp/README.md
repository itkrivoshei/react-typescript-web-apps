# 🌦️ Weather App

<p align="center">
  <img src="https://github.com/itkrivoshei/react-typescript-web-apps/blob/main/media/WeatherApp.gif?raw=true" height="600">
</p>

The [Weather App](https://itkrivoshei.github.io/react-typescript-web-apps/#/WeatherApp) is a dynamic web application providing real-time weather forecasts, developed as part of an assignment for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-weather-app). Using React, TypeScript, and Redux Toolkit, it features a user-friendly interface with Material UI components and a custom CyberPunk Font. The app uses the [Weather API](https://www.weatherapi.com/) and [Giphy API](https://developers.giphy.com/) to display weather data and related GIFs. Users can search for weather forecasts by city and experience an adaptive UI.

## 🌟 Key Features

- **Real-time Weather Data**: Fetches current weather forecasts for any specified location using the Weather API.
- **Unit Conversion**: Toggle between metric (°C, km/h) and imperial (°F, mph) units.
- **Interactive Weather GIFs**: Weather-themed GIFs from the Giphy API, adapting to current conditions.
- **State Management with Redux Toolkit**: Ensures a responsive user experience.
- **City Search Functionality**: Search for weather information by city.

## 💻 Technologies

- **React**: For the user interface.
- **TypeScript**: Enhances type safety and maintainability.
- **Redux Toolkit**: Manages application state.
- **Weather API & Giphy API**: Provides weather data and GIFs.
- **Material UI**: For modern component styling.
- **Custom CyberPunk Font**: Unique UI experience.

## 🚀 Usage

- **Location Search**: Enter a city for weather forecasts.
- **Toggle Temperature Units**: Switch between Fahrenheit and Celsius.
- **Weather GIFs**: Displays GIFs related to current weather.

## 🔒 API Keys and Security

- **API Key Security**: Secure WeatherAPI and Giphy API keys using environment variables.
- **Prevent API Key Exposure**: Do not commit API keys to public repositories. Manage them with `.env` files or server-side configurations.

## ⚙️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itkrivoshei/react-typescript-web-apps.git
   ```
2. Navigate to the App directory:
   ```bash
   cd react-typescript-web-apps
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## 🤝 How to Contribute

Contributions to the Weather App are welcome:

1. Fork the [main repository](https://github.com/itkrivoshei/react-typescript-web-apps).
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add AmazingFeature'`).
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

For more details, refer to the [CONTRIBUTING.md](https://github.com/itkrivoshei/react-typescript-web-apps/blob/master/CONTRIBUTING.md) in the main repository.

## 📜 License

This project is open source, licensed under the [MIT License](https://github.com/itkrivoshei/react-typescript-web-apps/blob/master/LICENSE).

## 🌟 Acknowledgments

- Inspired by and developed as a part of the assignment for [The Odin Project's JavaScript course](https://www.theodinproject.com/lessons/node-path-javascript-weather-app).
- Special thanks to [Weather API](https://www.weatherapi.com/) and [Giphy API](https://developers.giphy.com/) for providing the data and media resources.

## 📚 Assignment from The Odin Project

As part of the assignment from [The Odin Project's JavaScript course](https://www.theodinproject.com/lessons/node-path-javascript-weather-app), this Weather App was created to demonstrate skills in using APIs and building a dynamic user interface. The assignment included:

- Creating a weather forecast site using the weather API.
- Implementing a search function for specific locations and toggling between Fahrenheit and Celsius.
- Designing the page based on the weather data, such as changing background color or adding relevant images or GIFs.
- Using promises or async/await in the code.
- Ensuring API keys and secrets are managed securely.
