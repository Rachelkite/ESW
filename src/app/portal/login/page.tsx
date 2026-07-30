import { Logo } from "@/components/ui/logo";
import { LoginForm } from "@/components/crm/login-form";

export default function PortalLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <Logo tone="dark" />
          <p className="mt-4 text-xs uppercase tracking-widest2 text-ink/40">
            Staff Portal
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
