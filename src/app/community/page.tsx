'use client';

import { Header } from '@/components/pokemint/header';
import { MobileNav } from '@/components/pokemint/mobile-nav';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { mockUsers } from '@/lib/data/mock-data';
import { MessageCircle, Users, TrendingUp, Send, Hash, Plus } from 'lucide-react';

export default function CommunityPage() {
  const channels = [
    { id: 1, name: 'general', members: 247, active: true },
    { id: 2, name: 'trading', members: 189, active: false },
    { id: 3, name: 'base-set-collectors', members: 156, active: false },
    { id: 4, name: 'shiny-hunters', members: 89, active: false },
  ];

  const messages = [
    {
      id: 1,
      user: mockUsers[0],
      content: 'Just minted my Charizard! This is amazing!',
      timestamp: '2 minutes ago',
      reactions: ['🔥', '⚡']
    },
    {
      id: 2,
      user: mockUsers[1],
      content: 'Looking to trade my Blastoise for a good fire type. DM me!',
      timestamp: '5 minutes ago',
      reactions: ['💧', '👍']
    },
    {
      id: 3,
      user: mockUsers[2],
      content: 'The marketplace is so smooth! Love the interface',
      timestamp: '12 minutes ago',
      reactions: ['❤️']
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <div className="container px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Community</h1>
          <p className="text-muted-foreground">Connect with collectors, share your passion, and stay updated</p>
        </div>

        <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr_300px] gap-6">
          {/* Left Sidebar: Channels */}
          <div className="hidden md:block">
            <div className="bg-card rounded-xl p-4 border border-border/50 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Channels</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-1">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      channel.active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <Hash className="h-4 w-4" />
                    <span className="flex-1 text-left">{channel.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {channel.members}
                    </Badge>
                  </button>
                ))}
              </div>

              {/* Active Users */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" />
                  Online ({mockUsers.length})
                </h4>
                <div className="space-y-2">
                  {mockUsers.map((user) => (
                    <div key={user.id} className="flex items-center gap-2">
                      <div className="relative">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={user.avatarUrl} />
                          <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card"></div>
                      </div>
                      <span className="text-sm truncate">{user.username}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="bg-card rounded-xl border border-border/50 flex flex-col h-[calc(100vh-12rem)]">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Hash className="h-5 w-5 text-primary" />
                  <h2 className="font-bold">general</h2>
                  <Badge variant="secondary" className="text-xs">247 members</Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  View Members
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarImage src={message.user.avatarUrl} />
                    <AvatarFallback>{message.user.username[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{message.user.displayName}</span>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-sm text-foreground mb-2">{message.content}</p>
                    <div className="flex gap-1">
                      {message.reactions.map((reaction, i) => (
                        <button
                          key={i}
                          className="px-2 py-1 rounded bg-muted hover:bg-muted/80 text-xs"
                        >
                          {reaction} {Math.floor(Math.random() * 5) + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <Input
                  placeholder="Message #general"
                  className="flex-1"
                />
                <Button size="icon" className="bg-primary text-primary-foreground">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Activity */}
          <div className="hidden lg:block">
            <div className="bg-card rounded-xl p-4 border border-border/50 sticky top-20">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Recent Activity
              </h3>

              <div className="space-y-4">
                {[
                  { user: mockUsers[0], action: 'minted a new card', time: '2m ago' },
                  { user: mockUsers[1], action: 'completed a trade', time: '15m ago' },
                  { user: mockUsers[2], action: 'joined the community', time: '1h ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarImage src={activity.user.avatarUrl} />
                      <AvatarFallback>{activity.user.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-foreground">
                        <span className="font-semibold">{activity.user.username}</span>
                        {' '}
                        <span className="text-muted-foreground">{activity.action}</span>
                      </p>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Community Stats */}
              <div className="mt-6 pt-6 border-t border-border/50 space-y-3">
                <h4 className="font-semibold text-sm">Community Stats</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="font-semibold">5,632</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Online Now</span>
                    <span className="font-semibold text-green-500">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Messages Today</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
