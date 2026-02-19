
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type EmailFormProps = {
  placeholder?: string;
  buttonLabel?: string;
  invalidTitle?: string;
  invalidDescription?: string;
  successTitle?: string;
  successDescription?: string;
};

export const EmailForm = ({
  placeholder = 'Enter your email',
  buttonLabel = 'Subscribe',
  invalidTitle = 'Invalid email',
  invalidDescription = 'Please enter a valid email address',
  successTitle = 'Success!',
  successDescription = "Thank you for your interest. We'll be in touch soon!",
}: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: invalidTitle,
        description: invalidDescription,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: successTitle,
      description: successDescription,
    });
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md mx-auto space-y-4 animate-fade-up">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/80 backdrop-blur-sm border-morpho-300"
        />
        <Button type="submit" className="bg-morpho-600 hover:bg-morpho-700">
          <Mail className="w-4 h-4 mr-2" />
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
};
