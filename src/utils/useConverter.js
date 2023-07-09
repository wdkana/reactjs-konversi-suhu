import { useState } from "react";
const FIXED_CALC = 32;

export default function useConverter(temperatureInput, temperatureType) {
    const [temperature, setTemperature] = useState(0);

    const handleTemperature = () => {
        const FahrenheitToCelcius = ((temperatureInput - FIXED_CALC) * 5) / 9;
        const CelciusToFahrenheit = temperatureInput * (9 / 5) + FIXED_CALC;

        temperatureType == "celcius"
            ? setTemperature(CelciusToFahrenheit)
            : setTemperature(FahrenheitToCelcius);
    };
    
    return [temperature, handleTemperature];
}
