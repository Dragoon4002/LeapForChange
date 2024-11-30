"use client";

import Link from "next/link";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { FishIcon as Frog, Leaf, Droplets, Thermometer } from 'lucide-react'
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const client = createThirdwebClient({
    clientId: '3e76e10a04eadb82eff1642ad0b035dd',});

    return (
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-200">
        <main className="container mx-auto px-4">
          <section className="text-center py-20">
            <h1 className="text-5xl font-bold text-green-800 mb-4">Start Your Journey to Save the Earth with Frogs!</h1>
            <p className="text-xl text-green-700 mb-8">Join the Quest to Protect Our Oceans, Land, and Climate.</p>
            <div className="flex justify-center gap-4 mb-8">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">Start Now</Button>
              <Button size="lg" variant="outline" className="bg-green-500 hover:bg-green-600">Learn More</Button>
            </div>
            <div className="max-w-md mx-auto">
              <Progress value={0} className="h-2 bg-green-200" />
              <p className="text-sm text-green-700 mt-2">0% complete - Start your journey!</p>
            </div>
          </section>
  
          <section className="grid md:grid-cols-3 gap-8 py-12">
            {[
              { icon: Droplets, title: "Protect Oceans", description: "Learn about marine conservation and take action to save our seas." },
              { icon: Leaf, title: "Preserve Forests", description: "Discover the importance of forests and help in reforestation efforts." },
              { icon: Thermometer, title: "Combat Climate Change", description: "Understand climate change and reduce your carbon footprint." },
            ].map((goal, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex justify-center mb-4">
                  <goal.icon className="w-16 h-16 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">{goal.title}</h2>
                <p className="text-green-700">{goal.description}</p>
              </div>
            ))}
          </section>
        </main>
  
        <footer className="bg-green-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">FroggyLearning</h3>
                <p>Join the Global Frog Community</p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h4 className="font-bold mb-2">Quick Links</h4>
                <ul>
                  <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h4 className="font-bold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-green-300"><Frog className="w-6 h-6" /></Link>
                  <Link href="#" className="hover:text-green-300"><Leaf className="w-6 h-6" /></Link>
                  <Link href="#" className="hover:text-green-300"><Droplets className="w-6 h-6" /></Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}