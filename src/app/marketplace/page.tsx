'use client';

import { Header } from '@/components/pokemint/header';
import { MobileNav } from '@/components/pokemint/mobile-nav';
import { PokemonCard } from '@/components/pokemint/pokemon-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockCards, getCardsForTrade } from '@/lib/data/mock-data';
import { Search, Filter, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tradeCards = getCardsForTrade();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Community Marketplace</h1>
          <p className="text-muted-foreground">Browse and trade verified Pokemon card NFTs</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by Pokemon name, card number, or rarity..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('all')}
            >
              All Cards
            </Button>
            <Button
              variant={selectedFilter === 'instant' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('instant')}
            >
              <DollarSign className="h-4 w-4 mr-1" />
              Instant Buy
            </Button>
            <Button
              variant={selectedFilter === 'auction' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('auction')}
            >
              <Clock className="h-4 w-4 mr-1" />
              Auctions
            </Button>
            <Button
              variant={selectedFilter === 'trending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedFilter('trending')}
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              Trending
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              More Filters
            </Button>
          </div>

          {/* Active Filters Summary */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{tradeCards.length} cards available</span>
            {selectedFilter !== 'all' && (
              <Badge variant="secondary" className="capitalize">
                {selectedFilter}
              </Badge>
            )}
          </div>
        </div>

        {/* Trading Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tradeCards.map((card) => (
            <PokemonCard key={card.id} card={card} />
          ))}
        </div>

        {/* Empty State */}
        {tradeCards.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">No cards found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Trending Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Trending This Week</h2>
              <p className="text-sm text-muted-foreground">Most popular cards in the marketplace</p>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mockCards.slice(0, 6).map((card) => (
              <PokemonCard key={card.id} card={card} size="small" />
            ))}
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
