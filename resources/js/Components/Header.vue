<template>
  <header class="glass-subtle sticky top-0 z-50 border-b border-warm-orange/10">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3 group">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-floating group-hover:shadow-warm transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Star class="w-5 h-5 text-white" />
            </div>
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-warm-orange-light rounded-full animate-pulse opacity-80"></div>
          </div>
          <div class="relative">
            <span class="text-2xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
              Magic Rewards
            </span>
            <Sparkles class="absolute -top-2 -right-6 w-4 h-4 text-warm-orange animate-pulse" />
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <Link 
            href="/login" 
            class="hidden sm:inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 font-medium"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-warm text-white hover:bg-gradient-warm-hover shadow-warm hover:shadow-warm-hover h-10 px-4 py-2 font-semibold shadow-floating hover:shadow-warm"
          >
            Sign Up For Free
          </Link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { Star, Sparkles } from 'lucide-vue-next'
</script>