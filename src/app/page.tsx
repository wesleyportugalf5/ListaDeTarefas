import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input />
          <Button variant="outline">Cadastrar</Button>
        </div>

        <Separator />

      </Card>
    </main>
  );
};

export default Home;
