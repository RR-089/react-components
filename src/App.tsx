import Button from "./components/Button";

function App() {
  return (
    <main className="flex justify-center items-center h-screen gap-4 p-4">
      <Button onClick={() => alert("Primary clicked!")}>Primary</Button>
      <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
        Secondary
      </Button>
      <Button variant="outline" onClick={() => alert("Outline clicked!")}>
        Outline
      </Button>
    </main>
  );
}

export default App;
