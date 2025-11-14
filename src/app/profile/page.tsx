'use client';

import { Header } from '@/components/pokemint/header';
import { MobileNav } from '@/components/pokemint/mobile-nav';
import { PokemonCard } from '@/components/pokemint/pokemon-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUsers, getCardsByOwner } from '@/lib/data/mock-data';
import { Settings, Share2, Trophy, ShoppingBag, Heart } from 'lucide-react';

export default function ProfilePage() {
  const currentUser = mockUsers[0]; // Mock current user
  const userCards = getCardsByOwner(currentUser.id);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container px-4 py-8">
        {/* Profile Header */}
        <div className="bg-card rounded-xl p-6 mb-8 border border-border/50">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Avatar */}
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.displayName} />
              <AvatarFallback className="text-2xl font-bold">{currentUser.displayName[0]}</AvatarFallback>
            </Avatar>

            {/* User Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{currentUser.displayName}</h1>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Verified
                </Badge>
              </div>
              <p className="text-muted-foreground mb-1">@{currentUser.username}</p>
              <p className="text-sm text-muted-foreground mb-4">{currentUser.bio}</p>

              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-bold text-foreground">{currentUser.cardsOwned}</span>
                  <span className="text-muted-foreground ml-1">Cards</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">{currentUser.tradesCompleted}</span>
                  <span className="text-muted-foreground ml-1">Trades</span>
                </div>
                <div>
                  <span className="font-bold text-foreground">{currentUser.achievements.length}</span>
                  <span className="text-muted-foreground ml-1">Achievements</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button className="bg-primary text-primary-foreground">
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Achievements</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentUser.achievements.map((achievement, i) => (
                <Badge key={i} variant="outline" className="border-primary/30">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="collection" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
            <TabsTrigger value="collection">Collection</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          </TabsList>

          {/* Collection Tab */}
          <TabsContent value="collection">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">My Collection</h2>
              <p className="text-muted-foreground">{userCards.length} cards owned</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {userCards.map((card) => (
                <PokemonCard key={card.id} card={card} />
              ))}
            </div>

            {userCards.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">No cards yet</h3>
                <p className="text-muted-foreground mb-4">Start by minting your first card!</p>
                <Button>Mint Your First Card</Button>
              </div>
            )}
          </TabsContent>

          {/* Trading Tab */}
          <TabsContent value="trading">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Active Trades</h2>
              <p className="text-muted-foreground">Cards currently listed for trade</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {userCards.filter(card => card.isForTrade).map((card) => (
                <PokemonCard key={card.id} card={card} />
              ))}
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Wishlist</h2>
              <p className="text-muted-foreground">Cards you're looking to acquire</p>
            </div>

            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wishlist Empty</h3>
              <p className="text-muted-foreground mb-4">Browse the marketplace to add cards to your wishlist</p>
              <Button>Browse Marketplace</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <MobileNav />
    </div>
  );
}
