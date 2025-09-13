import Label from "./components/Label";

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Label text="Hello World" size="lg" />
      <Label text="This is Red" size="sm" color="red" />
    </div>
  );
}

export default App;
