import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Sparkles, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
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

      {/* Login Card */}
      <Card className="w-full max-w-md glass-subtle shadow-glass border-warm-orange/20 animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-warm-brown to-warm-orange bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-text-light text-lg">
            Sign in to your Magic Rewards account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-warm-brown font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-12 text-warm-brown placeholder:text-text-light"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-warm-brown font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-subtle border-warm-orange/30 focus:border-warm-orange focus:ring-warm-orange/20 h-12 pr-12 text-warm-brown placeholder:text-text-light"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-warm-orange transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/forgot-password" 
                className="text-sm text-warm-orange hover:text-warm-orange-light transition-colors font-medium underline-offset-4 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button 
              type="submit" 
              variant="warm" 
              className="w-full h-12 text-base font-semibold"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-text-light">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-warm-orange hover:text-warm-orange-light font-semibold transition-colors underline-offset-4 hover:underline"
              >
                Create an account
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
  );
};

export default Login;