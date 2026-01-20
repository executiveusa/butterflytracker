
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast({
        title: t.invalidEmailTitle,
        description: t.invalidEmailDescription,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: t.successTitle,
      description: t.successDescription,
    });
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md mx-auto space-y-4 animate-fade-up">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/80 backdrop-blur-sm border-morpho-300"
        />
        <Button type="submit" className="bg-morpho-600 hover:bg-morpho-700">
          <Mail className="w-4 h-4 mr-2" />
          {t.subscribeLabel}
        </Button>
      </div>
    </form>
  );
};
