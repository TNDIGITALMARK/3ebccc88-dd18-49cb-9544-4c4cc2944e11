'use client';

import { MintedCard } from '@/lib/data/mock-data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';

interface PokemonCardProps {
  card: MintedCard;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

const typeColors = {
  fire: 'border-[#F4B93E] shadow-glow-gold',
  water: 'border-[#3B9DD9] shadow-glow-blue',
  grass: 'border-[#10B981]',
  electric: 'border-[#F4B93E] shadow-glow-gold',
  psychic: 'border-purple-500',
  fighting: 'border-red-500 shadow-glow-red',
};

const rarityLabels = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  holographic: 'Holographic',
  ultra_rare: 'Ultra Rare',
};

export function PokemonCard({ card, onClick, size = 'medium' }: PokemonCardProps) {
  const sizeClasses = {
    small: 'w-32 h-44',
    medium: 'w-40 h-56',
    large: 'w-48 h-64',
  };

  const borderColor = typeColors[card.pokemonType] || 'border-gray-500';

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl bg-card relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:rotate-1 border-4 ${borderColor}`}
      onClick={onClick}
    >
      {/* Card Image */}
      <div className="relative w-full h-full">
        <Image
          src={card.imageUrl}
          alt={card.cardName}
          fill
          className="object-cover"
        />

        {/* Overlay with card info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-3">
          {/* Verification Badge */}
          {card.verificationStatus === 'verified' && (
            <div className="absolute top-2 right-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
          )}
          {card.verificationStatus === 'pending' && (
            <div className="absolute top-2 right-2">
              <Clock className="w-5 h-5 text-yellow-500" />
            </div>
          )}

          {/* Card Name */}
          <h3 className="text-white font-bold text-sm mb-1 truncate">{card.cardName}</h3>

          {/* Card Number */}
          <p className="text-gray-300 text-xs mb-1">#{card.cardNumber}</p>

          {/* Rarity Badge */}
          <Badge variant="secondary" className="text-xs w-fit">
            {rarityLabels[card.rarity]}
          </Badge>

          {/* Price (if for trade) */}
          {card.isForTrade && card.price && (
            <div className="mt-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
              ${card.price}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
