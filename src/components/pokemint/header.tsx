'use client';

import Link from 'next/link';
import { Camera, ShoppingBag, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            PokéMint
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            HOME
          </Link>
          <Link href="/marketplace" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            MARKETPLACE
          </Link>
          <Link href="/mint" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            MINTING
          </Link>
          <Link href="/profile" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            PROFILE
          </Link>
          <Link href="/community" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            COMMUNITY
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <LogIn className="h-4 w-4 mr-2" />
            LOG IN
          </Button>
        </div>
      </div>
    </header>
  );
}
