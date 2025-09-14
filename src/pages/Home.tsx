import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card>
        <h2 className="text-lg font-bold mb-2">Card 1</h2>
        <p className="text-sm text-gray-600 mb-4">This is simple card.</p>
        <Button>Action</Button>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-2">Card 2</h2>
        <p className="text-sm text-gray-600 mb-4">Cards are reuseable!</p>
        <Button variant="secondary">Secondary</Button>
      </Card>

      <Card>
        <h2 className="text-lg font-bold mb-2">Card 3</h2>
        <p className="text-sm text-gray-600 mb-4">Responsive grid layout</p>
        <Button variant="outline">Outline</Button>
      </Card>
    </main>
  );
}
