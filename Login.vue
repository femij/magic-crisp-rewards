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

    <!-- Login Card -->
    <div class="w-full max-w-md glass-subtle shadow-glass border border-warm-orange/20 animate-scale-in rounded-lg">
      <div class="text-center space-y-4 mt-12 px-6 pt-6">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p class="text-text-light text-lg">
          Sign in to your Magic Rewards account
        </p>
      </div>
      
      <div class="px-6 pb-6">
        <form @submit.prevent="submit" class="space-y-6 mt-6">
          <div class="space-y-2">
            <label for="email" class="block text-warm-brown font-medium">
              Email Address
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              class="w-full glass-subtle border border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 focus:ring-2 h-12 text-warm-brown placeholder:text-text-light rounded-md px-3"
              required
            />
            <div v-if="form.errors.email" class="text-red-600 text-sm">{{ form.errors.email }}</div>
          </div>

          <div class="space-y-2">
            <label for="password" class="block text-warm-brown font-medium">
              Password
            </label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                class="w-full glass-subtle border border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 focus:ring-2 h-12 pr-12 text-warm-brown placeholder:text-text-light rounded-md px-3"
                required
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
              >
                <EyeOff v-if="showPassword" class="w-5 h-5" />
                <Eye v-else class="w-5 h-5" />
              </button>
            </div>
            <div v-if="form.errors.password" class="text-red-600 text-sm">{{ form.errors.password }}</div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember"
                v-model="form.remember"
                type="checkbox"
                class="h-4 w-4 text-warm-orange focus:ring-warm-orange border-warm-orange/30 rounded"
              />
              <label for="remember" class="ml-2 block text-sm text-warm-brown">
                Remember me
              </label>
            </div>
            
            <Link 
              v-if="canResetPassword"
              :href="route('password.request')" 
              class="text-sm text-warm-orange hover:text-warm-orange-light transition-colors font-medium underline-offset-4 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            :disabled="form.processing"
            class="w-full h-12 text-base font-semibold bg-gradient-warm text-white rounded-lg shadow-floating hover:shadow-warm transition-all duration-300 disabled:opacity-50"
          >
            <span v-if="form.processing">Signing In...</span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <div class="mt-8 text-center">
          <p class="text-text-light">
            Don't have an account?
            <Link 
              :href="route('register')" 
              class="text-warm-orange hover:text-warm-orange-light font-semibold transition-colors underline-offset-4 hover:underline ml-1"
            >
              Create an account
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
  canResetPassword: {
    type: Boolean,
  },
  status: {
    type: String,
  },
})

const showPassword = ref(false)

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form.post(route('login'), {
    onFinish: () => form.reset('password'),
  })
}
</script>

<style scoped>
/* Custom styles for animations that match your existing design */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
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

/* Glass effect styles */
.glass-subtle {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.shadow-glass {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.shadow-floating {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
}

.shadow-warm {
  box-shadow: 0 10px 30px -10px rgba(251, 146, 60, 0.3);
}

/* Gradient backgrounds */
.bg-gradient-hero {
  background: linear-gradient(135deg, hsl(39, 77%, 95%) 0%, hsl(43, 74%, 90%) 50%, hsl(39, 77%, 95%) 100%);
}

.bg-gradient-warm {
  background: linear-gradient(135deg, hsl(25, 95%, 53%) 0%, hsl(43, 96%, 56%) 100%);
}

/* Color utilities */
.text-warm-brown {
  color: hsl(25, 95%, 53%);
}

.text-warm-orange {
  color: hsl(43, 96%, 56%);
}

.text-warm-orange-light {
  color: hsl(43, 96%, 66%);
}

.text-text-light {
  color: hsl(25, 20%, 60%);
}

.bg-warm-orange-light {
  background-color: hsl(43, 96%, 66%);
}

.bg-soft-cream-dark {
  background-color: hsl(39, 77%, 85%);
}

.border-warm-orange\/20 {
  border-color: hsla(43, 96%, 56%, 0.2);
}

.border-warm-orange\/30 {
  border-color: hsla(43, 96%, 56%, 0.3);
}

.border-warm-orange {
  border-color: hsl(43, 96%, 56%);
}

.focus\:ring-warm-orange\/20:focus {
  --tw-ring-color: hsla(43, 96%, 56%, 0.2);
}
</style>