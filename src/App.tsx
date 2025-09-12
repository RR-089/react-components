import Label from "./components/Label";

function App() {
  return (
    <div className="h-screen bg-black flex justify-center items-center flex-col">
      <Label text="Hello World" size="lg" />
      <Label text="This is Gray" size="sm" color="gray" />
    </div>
  );
}

export default App;
