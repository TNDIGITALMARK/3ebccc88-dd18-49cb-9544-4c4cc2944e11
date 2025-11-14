// Mock data for PokeMint MVP

export interface MintedCard {
  id: string;
  cardName: string;
  cardNumber: string;
  pokemonType: 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'fighting';
  rarity: 'common' | 'uncommon' | 'rare' | 'holographic' | 'ultra_rare';
  condition: 'mint' | 'near_mint' | 'excellent' | 'good' | 'played';
  imageUrl: string;
  ownerId: string;
  ownerName: string;
  verificationStatus: 'verified' | 'pending' | 'rejected';
  verificationCount: number;
  mintDate: string;
  isForTrade: boolean;
  price?: number;
}

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  bio: string;
  cardsOwned: number;
  tradesCompleted: number;
  achievements: string[];
}

export interface Trade {
  id: string;
  cardId: string;
  sellerId: string;
  sellerName: string;
  tradeType: 'instant_buy' | 'auction' | 'offer';
  price?: number;
  currentBid?: number;
  bidCount: number;
  status: 'active' | 'completed' | 'cancelled';
  expiresAt?: string;
}

// Mock users
export const mockUsers: UserProfile[] = [
  {
    id: 'user1',
    username: 'pokemon_master_jake',
    displayName: 'Jake the Pokemon Master',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jake',
    bio: 'Collecting since Base Set. Love fire types!',
    cardsOwned: 87,
    tradesCompleted: 34,
    achievements: ['First Mint', '10 Trades', 'Verified Collector']
  },
  {
    id: 'user2',
    username: 'card_collector_sarah',
    displayName: 'Sarah - Card Collector',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Trading rare holographics. DM for offers!',
    cardsOwned: 156,
    tradesCompleted: 89,
    achievements: ['100 Cards', '50 Trades', 'Elite Trader']
  },
  {
    id: 'user3',
    username: 'shiny_hunter_mike',
    displayName: 'Mike | Shiny Hunter',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    bio: 'Only collecting shiny and holographic cards',
    cardsOwned: 43,
    tradesCompleted: 21,
    achievements: ['Shiny Collector', 'Fast Trader']
  }
];

// Mock cards
export const mockCards: MintedCard[] = [
  {
    id: 'card1',
    cardName: 'Charizard',
    cardNumber: '004',
    pokemonType: 'fire',
    rarity: 'holographic',
    condition: 'mint',
    imageUrl: '/generated/card-holographic-3.png',
    ownerId: 'user1',
    ownerName: 'pokemon_master_jake',
    verificationStatus: 'verified',
    verificationCount: 5,
    mintDate: '2024-01-15',
    isForTrade: true,
    price: 450
  },
  {
    id: 'card2',
    cardName: 'Blastoise',
    cardNumber: '009',
    pokemonType: 'water',
    rarity: 'holographic',
    condition: 'near_mint',
    imageUrl: '/generated/card-holographic-2.png',
    ownerId: 'user2',
    ownerName: 'card_collector_sarah',
    verificationStatus: 'verified',
    verificationCount: 4,
    mintDate: '2024-01-20',
    isForTrade: true,
    price: 320
  },
  {
    id: 'card3',
    cardName: 'Pikachu',
    cardNumber: '025',
    pokemonType: 'electric',
    rarity: 'rare',
    condition: 'excellent',
    imageUrl: '/generated/card-holographic-1.png',
    ownerId: 'user1',
    ownerName: 'pokemon_master_jake',
    verificationStatus: 'verified',
    verificationCount: 5,
    mintDate: '2024-02-01',
    isForTrade: true,
    price: 75
  },
  {
    id: 'card4',
    cardName: 'Mewtwo',
    cardNumber: '150',
    pokemonType: 'psychic',
    rarity: 'ultra_rare',
    condition: 'mint',
    imageUrl: '/generated/card-holographic-1.png',
    ownerId: 'user3',
    ownerName: 'shiny_hunter_mike',
    verificationStatus: 'verified',
    verificationCount: 5,
    mintDate: '2024-02-10',
    isForTrade: false
  },
  {
    id: 'card5',
    cardName: 'Eevee',
    cardNumber: '051',
    pokemonType: 'grass',
    rarity: 'uncommon',
    condition: 'good',
    imageUrl: '/generated/card-holographic-3.png',
    ownerId: 'user2',
    ownerName: 'card_collector_sarah',
    verificationStatus: 'pending',
    verificationCount: 2,
    mintDate: '2024-02-15',
    isForTrade: true,
    price: 25
  }
];

// Mock trades
export const mockTrades: Trade[] = [
  {
    id: 'trade1',
    cardId: 'card1',
    sellerId: 'user1',
    sellerName: 'pokemon_master_jake',
    tradeType: 'auction',
    currentBid: 450,
    bidCount: 12,
    status: 'active',
    expiresAt: '2024-03-01T18:00:00Z'
  },
  {
    id: 'trade2',
    cardId: 'card3',
    sellerId: 'user1',
    sellerName: 'pokemon_master_jake',
    tradeType: 'instant_buy',
    price: 75,
    bidCount: 0,
    status: 'active'
  },
  {
    id: 'trade3',
    cardId: 'card2',
    sellerId: 'user2',
    sellerName: 'card_collector_sarah',
    tradeType: 'offer',
    bidCount: 5,
    status: 'active'
  }
];

// Helper functions
export function getCardById(id: string): MintedCard | undefined {
  return mockCards.find(card => card.id === id);
}

export function getCardsForTrade(): MintedCard[] {
  return mockCards.filter(card => card.isForTrade);
}

export function getCardsByOwner(ownerId: string): MintedCard[] {
  return mockCards.filter(card => card.ownerId === ownerId);
}

export function getUserById(id: string): UserProfile | undefined {
  return mockUsers.find(user => user.id === id);
}

export function getTradeByCardId(cardId: string): Trade | undefined {
  return mockTrades.find(trade => trade.cardId === cardId);
}
