import { RegisterForm } from '@/components/pages/auth/register/RegisterForm';
import { Section } from '@/components/ui/section';

export default function RegisterPage() {
  return (
    <Section className="grid w-full h-full place-items-center">
      <RegisterForm />
    </Section>
  );
}
