'use client';

import { Header } from '@/components/pokemint/header';
import { MobileNav } from '@/components/pokemint/mobile-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Camera, Upload, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function MintPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Card Minting Studio</h1>
          <p className="text-muted-foreground">Transform your physical Pokemon cards into verified NFTs</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 1 ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-muted-foreground'}`}>
                {step > 1 ? <CheckCircle2 className="w-6 h-6" /> : '1'}
              </div>
              <span className="text-xs text-center">Photo Upload</span>
            </div>

            <div className={`flex-1 h-0.5 mb-6 ${step >= 2 ? 'bg-primary' : 'bg-border'}`} />

            {/* Step 2 */}
            <div className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 2 ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-muted-foreground'}`}>
                {step > 2 ? <CheckCircle2 className="w-6 h-6" /> : '2'}
              </div>
              <span className="text-xs text-center">Card Details</span>
            </div>

            <div className={`flex-1 h-0.5 mb-6 ${step >= 3 ? 'bg-primary' : 'bg-border'}`} />

            {/* Step 3 */}
            <div className="flex flex-col items-center flex-1">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 3 ? 'bg-primary border-primary text-primary-foreground' : 'border-border text-muted-foreground'}`}>
                {step > 3 ? <CheckCircle2 className="w-6 h-6" /> : '3'}
              </div>
              <span className="text-xs text-center">Verification</span>
            </div>
          </div>
        </div>

        {/* Step 1: Photo Upload */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 border-2 border-dashed border-border/50 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Take Photo or Upload</h3>
              <p className="text-muted-foreground mb-4">
                Capture your Pokemon card with good lighting and clear visibility
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-primary text-primary-foreground">
                  <Camera className="w-4 h-4 mr-2" />
                  Open Camera
                </Button>
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Image
                </Button>
              </div>
            </div>

            {/* Photo Guidelines */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Photo Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Place card on a flat, contrasting surface</li>
                <li>✓ Ensure good, even lighting without glare</li>
                <li>✓ Capture the entire card within the frame</li>
                <li>✓ Card should be in focus and clearly readable</li>
                <li>✓ Include the card number visible in the photo</li>
              </ul>
            </div>

            <Button
              className="w-full bg-primary text-primary-foreground"
              onClick={() => setStep(2)}
            >
              Continue to Card Details
            </Button>
          </div>
        )}

        {/* Step 2: Card Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border/50 space-y-4">
              <div>
                <Label htmlFor="cardName">Pokemon Name *</Label>
                <Input id="cardName" placeholder="e.g., Charizard" />
              </div>

              <div>
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input id="cardNumber" placeholder="e.g., 004/102" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fire">Fire</SelectItem>
                      <SelectItem value="water">Water</SelectItem>
                      <SelectItem value="grass">Grass</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="psychic">Psychic</SelectItem>
                      <SelectItem value="fighting">Fighting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="rarity">Rarity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rarity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="common">Common</SelectItem>
                      <SelectItem value="uncommon">Uncommon</SelectItem>
                      <SelectItem value="rare">Rare</SelectItem>
                      <SelectItem value="holographic">Holographic</SelectItem>
                      <SelectItem value="ultra_rare">Ultra Rare</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="condition">Condition *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mint">Mint</SelectItem>
                    <SelectItem value="near_mint">Near Mint</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="played">Played</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
              <Button
                className="flex-1 bg-primary text-primary-foreground"
                onClick={() => setStep(3)}
              >
                Submit for Verification
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Verification */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 text-center border border-border/50">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Verification in Progress</h3>
              <p className="text-muted-foreground mb-6">
                Your card is being reviewed by our community verifiers. This typically takes 24 hours.
              </p>

              {/* Verification Progress */}
              <div className="max-w-md mx-auto mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Community Verification</span>
                  <span className="text-sm text-muted-foreground">3 of 5 approvals</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-secondary h-3 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <Badge variant="outline" className="mb-6">
                Estimated completion: 18-24 hours
              </Badge>

              <Button className="w-full max-w-sm bg-primary text-primary-foreground">
                View My Collection
              </Button>
            </div>

            {/* What Happens Next */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-bold mb-4">What Happens Next?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>5 community verifiers will review your card details and photo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Once approved, your card will be minted as an NFT on the blockchain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>You'll be notified and can start trading immediately</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      <MobileNav />
    </div>
  );
}
