import "./App.scss";
import Button from "./components /Button";
import RadioCheckboxInput from "./components /RadioCheckboxInput";
import TextInput from "./components /TextInput";

function App() {
  return (
    <div className="App">
      <form>
        <RadioCheckboxInput
          type="checkbox"
          name="villa"
          id="villa"
          value="villa"
          lableText="VILLA"
        />
        <RadioCheckboxInput
          type="checkbox"
          name="hus"
          id="hus"
          value="hus"
          lableText="HUS"
        />
        <TextInput name="adress" id="adress" lableText="Enter your adress:" />
        <Button
        text="Nästa"
        />
      </form>
    </div>
  );
}

export default App;
