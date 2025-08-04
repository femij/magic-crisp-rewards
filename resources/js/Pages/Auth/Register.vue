<template>
  <div class="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
    <!-- Header Logo -->
    <div class="absolute top-6 left-6">
      <Link href="/" class="flex items-center gap-3 group">
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
      </Link>
    </div>

    <!-- Signup Card -->
    <div class="w-full max-w-lg glass-subtle shadow-glass border border-warm-orange/20 animate-scale-in rounded-lg">
      <div class="text-center space-y-4 mt-16 md:mt-20 lg:mt-24 p-6 pb-0">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
          Join Magic Rewards
        </h1>
        <p class="text-text-light text-lg">
          Create your account and start earning rewards
        </p>
      </div>
      
      <div class="p-6 pt-0">
        <form @submit.prevent="submit" class="space-y-5">
          <div class="grid grid-cols-2 gap-4">
            <!-- First Name -->
            <div>
              <label for="first_name" class="block text-warm-brown font-medium mb-2">First Name</label>
              <input
                id="first_name"
                v-model="form.first_name"
                type="text"
                placeholder="Enter your first name"
                class="w-full h-11 px-3 py-2 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
                required
              />
              <div v-if="form.errors.first_name" class="text-red-500 text-sm mt-1">
                {{ form.errors.first_name }}
              </div>
            </div>

            <!-- Last Name -->
            <div>
              <label for="last_name" class="block text-warm-brown font-medium mb-2">Last Name</label>
              <input
                id="last_name"
                v-model="form.last_name"
                type="text"
                placeholder="Enter your last name"
                class="w-full h-11 px-3 py-2 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
                required
              />
              <div v-if="form.errors.last_name" class="text-red-500 text-sm mt-1">
                {{ form.errors.last_name }}
              </div>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-warm-brown font-medium mb-2">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="w-full h-11 px-3 py-2 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
              required
            />
            <div v-if="form.errors.email" class="text-red-500 text-sm mt-1">
              {{ form.errors.email }}
            </div>
          </div>

          <!-- WhatsApp Phone -->
          <div>
            <label for="whatsapp_phone" class="block text-warm-brown font-medium mb-2">WhatsApp Phone Number</label>
            <input
              id="whatsapp_phone"
              v-model="form.whatsapp_phone"
              type="tel"
              placeholder="+1234567890"
              class="w-full h-11 px-3 py-2 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
              required
            />
            <div v-if="form.errors.whatsapp_phone" class="text-red-500 text-sm mt-1">
              {{ form.errors.whatsapp_phone }}
            </div>
          </div>

          <!-- Birthday -->
          <div>
            <label for="birthday" class="block text-warm-brown font-medium mb-2">Birthday (Optional)</label>
            <input
              id="birthday"
              v-model="form.birthday"
              type="date"
              class="w-full h-11 px-3 py-2 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown"
            />
            <div v-if="form.errors.birthday" class="text-red-500 text-sm mt-1">
              {{ form.errors.birthday }}
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-warm-brown font-medium mb-2">Password</label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Create a password"
                class="w-full h-11 px-3 py-2 pr-12 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
              >
                <Eye v-if="!showPassword" class="w-5 h-5" />
                <EyeOff v-else class="w-5 h-5" />
              </button>
            </div>
            <div v-if="form.errors.password" class="text-red-500 text-sm mt-1">
              {{ form.errors.password }}
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="password_confirmation" class="block text-warm-brown font-medium mb-2">Confirm Password</label>
            <div class="relative">
              <input
                id="password_confirmation"
                v-model="form.password_confirmation"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirm your password"
                class="w-full h-11 px-3 py-2 pr-12 glass-subtle border border-warm-orange/30 rounded-md focus:border-warm-orange focus:ring-2 focus:ring-warm-orange/20 focus:outline-none text-warm-brown placeholder:text-text-light"
                required
              />
              <button
                type="button"
                @click="showConfirmPassword = !showConfirmPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
              >
                <Eye v-if="!showConfirmPassword" class="w-5 h-5" />
                <EyeOff v-else class="w-5 h-5" />
              </button>
            </div>
            <div v-if="form.errors.password_confirmation" class="text-red-500 text-sm mt-1">
              {{ form.errors.password_confirmation }}
            </div>
          </div>

          <!-- Terms and Privacy (optional Jetstream requirement) -->
          <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
            <label class="flex items-start space-x-3">
              <input
                v-model="form.terms"
                type="checkbox"
                class="mt-1 h-4 w-4 shrink-0 rounded border border-warm-orange/30 text-warm-orange focus:ring-warm-orange/20"
                required
              />
              <span class="text-sm text-text-light leading-relaxed">
                I agree to the 
                <Link 
                  :href="route('terms.show')" 
                  class="text-warm-orange hover:text-warm-orange-light underline"
                >
                  Terms of Service
                </Link>
                and 
                <Link 
                  :href="route('policy.show')" 
                  class="text-warm-orange hover:text-warm-orange-light underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
            <div v-if="form.errors.terms" class="text-red-500 text-sm mt-1">
              {{ form.errors.terms }}
            </div>
          </div>

          <button 
            type="submit" 
            :disabled="form.processing"
            class="w-full h-12 text-base font-semibold mt-6 bg-gradient-warm text-white rounded-lg shadow-floating hover:shadow-warm hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="form.processing">Creating Account...</span>
            <span v-else>Create Account</span>
          </button>
        </form>

        <div class="mt-8 text-center">
          <p class="text-text-light">
            Already have an account?
            <Link 
              href="/login" 
              class="text-warm-orange hover:text-warm-orange-light font-semibold transition-colors underline-offset-4 hover:underline ml-1"
            >
              Sign in
            </Link>
          </p>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-warm rounded-full opacity-10 animate-float"></div>
        <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-warm-orange-light rounded-full opacity-15 animate-float" style="animation-delay: 2s;"></div>
      </div>
    </div>

    <!-- Background decorations -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-20 left-20 w-32 h-32 bg-warm-orange-light/20 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-32 right-32 w-40 h-40 bg-warm-brown/15 rounded-full blur-3xl animate-float" style="animation-delay: 3s;"></div>
      <div class="absolute top-1/2 left-10 w-24 h-24 bg-soft-cream-dark/30 rounded-full blur-2xl animate-float" style="animation-delay: 1s;"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import { Star, Sparkles, Eye, EyeOff } from 'lucide-vue-next'

defineProps({
  canResetPassword: Boolean,
  status: String,
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const form = useForm({
  first_name: '',
  last_name: '',
  email: '',
  whatsapp_phone: '',
  birthday: '',
  password: '',
  password_confirmation: '',
  terms: false,
})

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<style scoped>
/* Custom styles for better integration with Laravel's design system */
.glass-subtle {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.shadow-glass {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.bg-gradient-hero {
  background: linear-gradient(135deg, 
    hsl(var(--soft-cream)) 0%, 
    hsl(var(--soft-cream-dark)) 50%, 
    hsl(var(--warm-brown-light)) 100%);
}

.bg-gradient-warm {
  background: linear-gradient(135deg, 
    hsl(var(--warm-orange)) 0%, 
    hsl(var(--warm-orange-light)) 100%);
}

.shadow-floating {
  box-shadow: 0 10px 30px -10px hsl(var(--warm-orange) / 0.3);
}

.shadow-warm {
  box-shadow: 0 15px 40px -10px hsl(var(--warm-orange) / 0.4);
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(2deg); }
  66% { transform: translateY(5px) rotate(-1deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes scale-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
</style>