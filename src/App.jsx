import Input from "./components/input";

export default function App() {
  return (
    <main className="mt-16 flex justify-center gap-x-8">
      <Input
        label="Celsius"
        handleChange={() => {
          console.log("Celsius changed");
        }}
      />
      <Input
        label="Fahrenheit"
        handleChange={() => {
          console.log("Fahrenheit changed");
        }}
      />
    </main>
  );
}
