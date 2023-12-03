import { LoginForm } from '@/components/pages/auth/login/LoginForm';
import { Section } from '@/components/ui/section';

export default function LoginPage() {
  return (
    <Section className="grid w-full h-full place-items-center">
      <LoginForm />
    </Section>
  );
}
