import Card from "../components/Card";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <Card
          title="Card 1"
          description="This is simple card."
          onClick={() => alert("Card 1")}
        />
        <Card
          title="Card 2"
          description="Cards are reuseable!"
          onClick={() => alert("Card 2")}
        />
        <Card
          title="Card 3"
          description="Responsive grid layout"
          onClick={() => alert("Card 3")}
        />
      </main>
    </>
  );
}
