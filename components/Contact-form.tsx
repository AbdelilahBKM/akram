import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="bg-orange-200  px-4 py-6 md:px-6 md:py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-orange-500">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
            <p className="max-w-[700px] text-lg md:text-xl">
              Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="contact" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto max-w-3xl px-4 md:px-6 text-slate-800">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" type="text" placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                  </div>
                  <Button
                    className="w-[245px] h-[48px] rounded-none bg-white text-orange-400 border transition-colors border-orange-400 hover:bg-orange-400 hover:text-white"
                    type="submit">envoyer</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}