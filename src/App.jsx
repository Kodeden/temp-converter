import { useState } from "react";
import Input from "./components/input";
import { tryConvert } from "./utils/convert-temp";

export default function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  return (
    <form className="mt-16 flex justify-center gap-x-8">
      <Input
        label="Celsius"
        value={celsius}
        handleChange={(event) => {
          setCelsius(event.target.value);
          setFahrenheit(tryConvert(event.target.value, "convert2Fahrenheit"));
        }}
      />
      <Input
        label="Fahrenheit"
        value={fahrenheit}
        handleChange={(event) => {
          setFahrenheit(event.target.value);
          setCelsius(tryConvert(event.target.value, "convert2Celsius"));
        }}
      />
    </form>
  );
}
