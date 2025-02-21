
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Success!",
      description: "Thank you for your interest. We'll be in touch soon!",
    });
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md mx-auto space-y-4 animate-fade-up">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/80 backdrop-blur-sm border-morpho-300"
        />
        <Button type="submit" className="bg-morpho-600 hover:bg-morpho-700">
          <Mail className="w-4 h-4 mr-2" />
          Subscribe
        </Button>
      </div>
    </form>
  );
};
