<template>
  <section class="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-orange/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl animate-float" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-warm opacity-[0.03] rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-10 animate-fade-up">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full shadow-glass">
            <div class="w-2 h-2 bg-gradient-warm rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-warm-brown">Trusted by 50,000+ users</span>
          </div>
          
          <!-- Main heading -->
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Earn points
              <span class="relative inline-block">
                <span class="bg-gradient-to-r from-warm-orange to-warm-brown bg-clip-text text-transparent">
                  every time
                </span>
                <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-warm rounded-full transform scale-x-0 animate-scale-in" style="animation-delay: 1s"></div>
              </span>
              you buy
              <span class="relative">
                <span class="text-warm-orange">online</span>
                <Zap class="absolute -top-2 -right-6 w-6 h-6 text-warm-orange animate-pulse" />
              </span>
              or
              <span class="text-warm-orange">in-store</span>
            </h1>
            
            <p class="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Automatically earn loyalty points when you pay with your card or bank transfer 
              at partner merchant stores. 
              <span class="font-semibold text-warm-brown"> Redeem your points for cash.</span>
            </p>
          </div>
          
          <!-- Email signup -->
          <div class="space-y-4">
            <form @submit.prevent="handleSignup" class="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div class="relative flex-1">
                <input 
                  v-model="email"
                  type="email" 
                  placeholder="Enter your email address" 
                  class="flex h-14 w-full rounded-2xl border-2 border-warm-orange/20 bg-background px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-warm-orange shadow-subtle focus:shadow-soft transition-all duration-300 pr-12"
                />
                <Shield class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-warm-orange/60" />
              </div>
              <Link 
                href="/register" 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white border border-white/20 hover:bg-white/20 h-14 px-8 group"
              >
                Get Started
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </form>
            
            <p class="text-sm text-text-light">
              Join free • No credit card required • Start earning immediately
            </p>
          </div>
          
          <!-- Features badge -->
          <div class="flex items-center gap-3 glass p-6 rounded-2xl shadow-glass max-w-md">
            <div class="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center shadow-soft">
              <Sparkles class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-warm-brown">Get rewarded automagically</h3>
              <p class="text-sm text-text-light">No extra steps, just shop and earn</p>
            </div>
          </div>
        </div>
        
        <!-- Hero image -->
        <div class="relative lg:order-2 animate-scale-in" style="animation-delay: 0.5s">
          <div class="relative">
            <!-- Main image -->
            <div class="relative rounded-3xl overflow-hidden shadow-floating hover:shadow-warm transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02]">
              <img 
                src="/src/assets/hero-shopping.jpg" 
                alt="Happy couple shopping with Magic Rewards" 
                class="w-full h-auto object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-warm-brown/10 to-transparent"></div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-6 -left-6 glass p-4 rounded-2xl shadow-glass animate-float">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-gradient-warm rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">+5</span>
                </div>
                <span class="text-sm font-semibold text-white">Points earned!</span>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-glass animate-float" style="animation-delay: 1s">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">₦</span>
                </div>
                <span class="text-sm font-semibold text-white">Cash reward ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { Sparkles, ArrowRight, Shield, Zap } from 'lucide-vue-next'

const email = ref('')

const handleSignup = () => {
  // Handle email signup logic
  console.log('Email signup:', email.value)
}
</script>