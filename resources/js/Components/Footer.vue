<template>
  <footer class="bg-gradient-to-br from-warm-brown via-warm-brown to-warm-brown-light text-white relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-orange rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Main footer content -->
      <div class="py-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left side - CTA -->
          <div class="space-y-8">
            <div class="space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Star class="w-6 h-6 text-white" />
                </div>
                <span class="text-3xl font-bold">Magic Rewards</span>
              </div>
              
              <div class="space-y-4">
                <h3 class="text-4xl lg:text-5xl font-bold leading-tight">
                  Ready to start earning 
                  <span class="block text-warm-orange-light">magical rewards?</span>
                </h3>
                <p class="text-xl text-white/80 leading-relaxed">
                  Join thousands of smart shoppers who are already earning points on every purchase.
                  Start your journey today and turn every transaction into a reward.
                </p>
              </div>
            </div>
            
            <!-- Email signup -->
            <div class="space-y-4">
              <form @submit.prevent="handleSignup" class="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div class="relative flex-1">
                  <input 
                    v-model="email"
                    type="email" 
                    placeholder="Enter your email" 
                    class="flex h-12 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white focus:bg-white/20 focus:border-white/40 backdrop-blur-sm"
                  />
                  <Mail class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                </div>
                <Link 
                  href="/register"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-12 px-8 bg-white text-warm-brown hover:bg-white/90 border-white group"
                >
                  Get Started
                  <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </form>
              <p class="text-sm text-white/60">
                Free to join • No credit card required • Start earning today
              </p>
            </div>
          </div>
          
          <!-- Right side - Stats/Features -->
          <div class="space-y-8">
            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6">
              <div v-for="(stat, index) in stats" :key="index" class="glass-subtle p-6 rounded-2xl text-center backdrop-blur-sm">
                <component :is="stat.icon" class="w-8 h-8 text-warm-orange-light mx-auto mb-3" />
                <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
                <div class="text-sm text-white/70">{{ stat.label }}</div>
              </div>
            </div>
            
            <!-- Features -->
            <div class="space-y-4">
              <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-3">
                <div class="w-6 h-6 bg-warm-orange-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Star class="w-3 h-3 text-white" />
                </div>
                <span class="text-white/90">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom bar -->
      <div class="py-8 border-t border-white/20">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-6">
            <p class="text-white/60 text-sm">
              © 2024 Magic Rewards. All rights reserved.
            </p>
            <div class="hidden md:flex items-center gap-4 text-sm text-white/60">
              <a href="#" class="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" class="hover:text-white transition-colors duration-300">Terms of Service</a>
              <span>•</span>
              <a href="#" class="hover:text-white transition-colors duration-300">Support</a>
            </div>
          </div>
          
          <div class="flex items-center gap-2 text-sm text-white/80">
            <Shield class="w-4 h-4" />
            <span>Secured by Open Banking Technology</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { Star, ArrowRight, Mail, Shield, Users, Award } from 'lucide-vue-next'

const email = ref('')

const handleSignup = () => {
  // Handle email signup logic
  console.log('Email signup:', email.value)
}

const stats = [
  { icon: Users, value: "50,000+", label: "Active Users" },
  { icon: Award, value: "₦2M+", label: "Rewards Paid" },
  { icon: Shield, value: "99.9%", label: "Uptime" },
  { icon: Star, value: "4.9", label: "User Rating" }
]

const features = [
  "Automatic point earning on every purchase",
  "Instant cash redemption to your bank account", 
  "Bank-grade security with Open Banking technology",
  "Works online and in-store with any payment method"
]
</script>