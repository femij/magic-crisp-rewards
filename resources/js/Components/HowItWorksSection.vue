<template>
  <section class="py-24 lg:py-32 relative">
    <!-- Background pattern -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/3 right-0 w-96 h-96 bg-warm-orange/3 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/3 left-0 w-96 h-96 bg-warm-brown/3 rounded-full blur-3xl"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-20 space-y-6">
        <div class="inline-flex items-center gap-2 glass-subtle px-4 py-2 rounded-full shadow-glass">
          <span class="text-sm font-medium text-warm-orange">Simple Process</span>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-brown">
          How it works
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Three simple steps to start earning rewards on every purchase
        </p>
      </div>
      
      <!-- Steps grid -->
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div v-for="(step, index) in steps" :key="index" class="group relative">
          <!-- Connecting line -->
          <div v-if="index < steps.length - 1" class="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-warm-orange to-transparent z-10 transform -translate-y-1/2">
            <ArrowRight class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 text-warm-orange" />
          </div>
          
          <div class="border-0 shadow-glass hover:shadow-floating transition-all duration-700 transform group-hover:-translate-y-4 group-hover:scale-[1.02] bg-gradient-to-br from-card to-soft-cream rounded-lg">
            <div class="p-0">
              <!-- Step number -->
              <div class="relative p-6 pb-0">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-2xl shadow-warm text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {{ step.number }}
                </div>
              </div>
              
              <!-- Image -->
              <div class="aspect-[4/3] mx-6 mb-6 rounded-2xl overflow-hidden shadow-soft group-hover:shadow-warm transition-all duration-500">
                <img 
                  :src="step.image" 
                  :alt="step.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <!-- Content -->
              <div class="p-6 pt-0 space-y-6">
                <div class="space-y-3">
                  <h3 class="text-2xl font-bold text-foreground group-hover:text-warm-orange transition-colors duration-300">
                    {{ step.title }}
                  </h3>
                  <p class="text-muted-foreground leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
                
                <!-- Features -->
                <div class="space-y-2">
                  <div v-for="(feature, featureIndex) in step.features" :key="featureIndex" class="flex items-center gap-3">
                    <CheckCircle2 class="w-4 h-4 text-warm-orange flex-shrink-0" />
                    <span class="text-sm text-warm-brown font-medium">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div class="glass p-8 rounded-3xl shadow-glass max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-warm-brown mb-4">
            Ready to start earning?
          </h3>
          <p class="text-muted-foreground mb-6">
            Join thousands who are already earning points on every purchase
          </p>
          <div class="flex justify-center">
            <Link 
              href="/register"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-warm text-white hover:bg-gradient-warm-hover shadow-warm hover:shadow-warm-hover h-11 px-8"
            >
              Get Started Now
              <ArrowRight class="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const steps = [
  {
    number: "01",
    title: "Connect bank accounts",
    description: "Link one or two or all of your bank accounts that you use for making payments or the ones that your debit card is associated with to Magic Rewards.",
    image: "/src/assets/connect-banks.jpg",
    features: ["Bank-grade security", "Multiple accounts", "Instant setup"]
  },
  {
    number: "02", 
    title: "Pay online or in-store",
    description: "Buy from merchant in-store or online and pay with debit card or bank transfer from any of your bank accounts connected to Magic Rewards.",
    image: "/src/assets/payment-methods.jpg",
    features: ["Any payment method", "Online & offline", "All merchants"]
  },
  {
    number: "03",
    title: "No extra action. Be rewarded",
    description: "No extra interaction is needed. Enjoy your purchase. Your points will be automagically credited to your Magic Rewards profile.",
    image: "/src/assets/rewards-magic.jpg",
    features: ["Automatic rewards", "Instant points", "Cash redemption"]
  },
]
</script>