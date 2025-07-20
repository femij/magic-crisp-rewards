import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Star, Sparkles, Eye, EyeOff } from "lucide-react";
import { Footer } from "@/components/Footer";

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(1, "Last name is required").min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  whatsappPhone: z.string().min(1, "WhatsApp phone number is required").regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  birthday: z.string().optional(),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      whatsappPhone: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormData) => {
    // TODO: Implement signup logic here
    console.log("Signup attempt:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
      {/* Header Logo */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-floating group-hover:shadow-warm transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-warm-orange-light rounded-full animate-pulse opacity-80"></div>
          </div>
          <div className="relative">
            <span className="text-2xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
              Magic Rewards
            </span>
            <Sparkles className="absolute -top-2 -right-6 w-4 h-4 text-warm-orange animate-pulse" />
          </div>
        </Link>
      </div>

      {/* Signup Card */}
      <Card className="w-full max-w-lg glass-subtle shadow-glass border-warm-orange/20 animate-scale-in">
        <CardHeader className="text-center space-y-4 mt-12">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
            Join Magic Rewards
          </CardTitle>
          <CardDescription className="text-text-light text-lg">
            Create your account and start earning rewards
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-warm-brown font-medium">First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your first name"
                          className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 text-warm-brown placeholder:text-text-light"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-warm-brown font-medium">Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your last name"
                          className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 text-warm-brown placeholder:text-text-light"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-warm-brown font-medium">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 text-warm-brown placeholder:text-text-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsappPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-warm-brown font-medium">WhatsApp Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1234567890"
                        className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 text-warm-brown placeholder:text-text-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-warm-brown font-medium">Birthday (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 text-warm-brown"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-warm-brown font-medium">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 pr-12 text-warm-brown placeholder:text-text-light"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-warm-brown font-medium">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-11 pr-12 text-warm-brown placeholder:text-text-light"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                variant="warm" 
                className="w-full h-12 text-base font-semibold mt-6"
              >
                Create Account
              </Button>
            </form>
          </Form>

          <div className="mt-8 text-center">
            <p className="text-text-light">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="text-warm-orange hover:text-warm-orange-light font-semibold transition-colors underline-offset-4 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-warm rounded-full opacity-10 animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-warm-orange-light rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
        </CardContent>
      </Card>

      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-warm-orange-light/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-warm-brown/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-soft-cream-dark/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;