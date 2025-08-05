<template>
  <section class="py-24 lg:py-32 bg-gradient-to-br from-soft-cream via-background to-soft-cream-dark relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-warm-orange/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-warm-brown/5 rounded-full blur-3xl animate-float" style="animation-delay: 3s"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-20 space-y-6">
        <div class="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full shadow-glass">
          <Star class="w-4 h-4 text-warm-orange" />
          <span class="text-sm font-medium text-warm-orange">Why Choose Us</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-brown">
          What you enjoy
        </h2>
        <p class="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience a seamless rewards system that works behind the scenes to maximize your benefits with every purchase.
        </p>
      </div>
      
      <!-- Benefits grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index" 
          class="group glass p-6 rounded-2xl shadow-glass hover:shadow-floating transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02]"
        >
          <div class="space-y-4">
            <div :class="`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-warm group-hover:scale-110 transition-all duration-500`">
              <component :is="benefit.icon" class="w-7 h-7 text-white" />
            </div>
            <div class="space-y-2">
              <h3 class="font-bold text-lg text-foreground group-hover:text-warm-orange transition-colors duration-300">
                {{ benefit.title }}
              </h3>
              <p class="text-muted-foreground leading-relaxed text-sm">
                {{ benefit.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Security section -->
      <div class="glass p-8 lg:p-12 rounded-3xl shadow-glass">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative order-2 lg:order-1">
            <div class="relative rounded-3xl overflow-hidden shadow-floating group">
              <img 
                src="/src/assets/family-security.jpg" 
                alt="Nigerian father teaching his child about secure financial technology" 
                class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <!-- Floating trust badges -->
            <div class="absolute -top-4 -right-4 glass-subtle p-3 rounded-xl shadow-glass animate-float">
              <div class="flex items-center gap-2">
                <Shield class="w-5 h-5 text-warm-orange" />
                <span class="text-sm font-bold text-white">256-bit SSL</span>
              </div>
            </div>
            
            <div class="absolute -bottom-4 -left-4 glass-subtle p-3 rounded-xl shadow-glass animate-float" style="animation-delay: 1s">
              <div class="flex items-center gap-2">
                <Check class="w-5 h-5 text-emerald-500" />
                <span class="text-sm font-bold text-white">Verified Safe</span>
              </div>
            </div>
          </div>
          
          <div class="space-y-8 order-1 lg:order-2">
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-warm">
                  <Star class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-warm-brown">
                    Secure & Trustworthy
                  </h3>
                  <p class="text-warm-orange font-semibold">Bank-grade security you can trust</p>
                </div>
              </div>
              
              <p class="text-xl text-muted-foreground leading-relaxed">
                Magic Rewards uses secured Open Banking technology to ensure your financial data 
                remains safe and protected. We prioritize your privacy and security above everything else.
              </p>
            </div>
            
            <!-- Security features -->
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(feature, index) in securityFeatures" :key="index" class="flex items-center gap-3 glass-subtle p-4 rounded-xl shadow-subtle">
                <component :is="feature.icon" class="w-5 h-5 text-warm-orange" />
                <span class="text-sm font-semibold text-warm-brown">{{ feature.text }}</span>
              </div>
            </div>
            
            <!-- Trust indicators -->
            <div class="flex items-center gap-6 pt-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-warm-orange">50K+</div>
                <div class="text-sm text-muted-foreground">Trusted Users</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-warm-orange">99.9%</div>
                <div class="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-warm-orange">₦2M+</div>
                <div class="text-sm text-muted-foreground">Rewards Paid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Check, Shield, Smartphone, Gift, Mail, Bell, DollarSign, Star, Trophy, Zap } from 'lucide-vue-next'

const benefits = [
  {
    icon: Shield,
    title: "Enhanced Privacy",
    text: "Increased privacy by not sharing your phone number or email with store attendants",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "No Extra Cards",
    text: "No need to present another plastic card or any app at checkout",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Zap,
    title: "Always Works",
    text: "Earn points even when your smartphone is not present at checkout",
    gradient: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Gift,
    title: "Birthday Bonus",
    text: "Select merchants offer up to 5% extra reward points on your birthday",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: Mail,
    title: "Auto Tracking",
    text: "Your reward points will be auto-tracked and sent to your email",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    text: "Get notified when your points are redeemable",
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    icon: DollarSign,
    title: "Cash Rewards",
    text: "Redeem your points as cash into your bank account",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Trophy,
    title: "Milestone Badges", 
    text: "Unlock special badges and rewards when you hit spending milestones",
    gradient: "from-orange-500 to-orange-600"
  },
]

const securityFeatures = [
  { icon: Shield, text: "End-to-end encryption" },
  { icon: Check, text: "PCI DSS compliant" },
  { icon: Star, text: "ISO 27001 certified" },
  { icon: Zap, text: "Real-time monitoring" }
]
</script>