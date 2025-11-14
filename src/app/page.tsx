'use client';

import { Header } from '@/components/pokemint/header';
import { MobileNav } from '@/components/pokemint/mobile-nav';
import { PokemonCard } from '@/components/pokemint/pokemon-card';
import { Button } from '@/components/ui/button';
import { mockCards } from '@/lib/data/mock-data';
import { Camera, Users, TrendingUp, Zap, Twitter, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const featuredCards = mockCards.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Hero Content */}
            <div className="space-y-6 z-10">
              <div className="inline-block">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase border border-primary/30 rounded-full px-3 py-1">
                  #PokemonNFTTrading
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                COLLECT, TRADE & BATTLE
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  IN THE DIGITAL REALM
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Transform your physical Pokemon cards into verified NFTs. Join a vibrant community of collectors and traders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-6">
                  JOIN NOW
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-sm font-semibold px-6">
                  EXPLORE MARKETPLACE
                </Button>
              </div>
            </div>

            {/* Right: Hero Pokemon Images */}
            <div className="relative h-[400px] md:h-[500px]">
              {/* Charizard */}
              <div className="absolute top-0 left-0 w-64 h-64 card-float">
                <Image
                  src="/generated/charizard-hero.png"
                  alt="Charizard"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Blastoise */}
              <div className="absolute bottom-0 right-0 w-56 h-56 card-float" style={{ animationDelay: '0.5s' }}>
                <Image
                  src="/generated/blastoise-hero.png"
                  alt="Blastoise"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Phone Mockup (overlay) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 z-10">
                <div className="bg-card rounded-3xl p-4 shadow-2xl border-4 border-primary/20">
                  <div className="bg-background rounded-2xl p-2">
                    <Image
                      src="/generated/card-holographic-1.png"
                      alt="Card Preview"
                      width={200}
                      height={280}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Floating card count badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-lg">
                <p className="text-xs font-semibold">LAST MINTED 3 MINS AGO</p>
                <p className="text-xl font-bold">Base Set</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">FEATURED COLLECTIONS</h2>
            <p className="text-muted-foreground">Trending cards from our community</p>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {featuredCards.map((card) => (
              <PokemonCard key={card.id} card={card} />
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background rounded-lg p-4 text-center border border-border/50">
              <p className="text-3xl font-bold text-primary">193</p>
              <p className="text-sm text-muted-foreground">Total Mints</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center border border-border/50">
              <p className="text-3xl font-bold text-secondary">8,583</p>
              <p className="text-sm text-muted-foreground">Total Value</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center border border-border/50">
              <p className="text-3xl font-bold text-primary">12,321</p>
              <p className="text-sm text-muted-foreground">Total Cards</p>
            </div>
            <div className="bg-background rounded-lg p-4 text-center border border-border/50">
              <p className="text-3xl font-bold text-secondary">5,632</p>
              <p className="text-sm text-muted-foreground">Active Traders</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">HOW IT WORKS</h2>
            <p className="text-muted-foreground">Start your NFT journey in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">1. MINT YOUR CARD</h3>
              <p className="text-sm text-muted-foreground">
                Take a photo of your physical Pokemon card and mint it as an NFT
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">2. TRADE & DISCOVER</h3>
              <p className="text-sm text-muted-foreground">
                Browse the marketplace and trading with verified collectors
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">3. BUILD YOUR COLLECTION</h3>
              <p className="text-sm text-muted-foreground">
                Complete sets, earn achievements, and showcase your collection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              READY TO START YOUR
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NFT JOURNEY?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of collectors transforming their physical cards into digital treasures
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold px-8 py-6">
              <Zap className="w-5 h-5 mr-2" />
              START MINTING NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/40 py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-4">COMPANY</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press Kit</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-4">SUPPORT</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="font-bold text-lg mb-4">LEARN</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>How to Mint</li>
                <li>Trading Guide</li>
                <li>Community Rules</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                Copyright © NFT Collect 2025. Exclusive Support Info
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>

      <MobileNav />
    </div>
  );
}
