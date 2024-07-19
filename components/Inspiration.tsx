import { Button } from "@/components/ui/button"

export default function Inspirations() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-8 md:px-16 bg-muted">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ameublement Marrakech-Salon marocain</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Meublez votre maison, appartement ou villa avec une variété de salons marocains modernes et traditionnels de
          meilleure qualité de bois, mousses et tissus.
        </p>
        <Button className="mt-4">Explorer Plus</Button>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-md">
          <div className="absolute bottom-0 left-0 bg-background/50 text-foreground px-4 py-2 rounded-tr-md">
            <span className="font-bold">01</span> - <span>salon</span> - <span>confortable</span>
          </div>
          <img src="/placeholder.svg" alt="Salon 1" className="w-full h-full object-cover" width={800} height={600} />
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-4 h-4 bg-muted rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-4 h-4 bg-muted rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-4 h-4 bg-primary rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <div className="w-4 h-4 bg-muted rounded-full" />
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline" size="sm">
            &lt;
          </Button>
          <Button variant="outline" size="sm">
            &gt;
          </Button>
        </div>
      </div>
    </section>
  )
}