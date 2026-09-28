"use client";

import Image from "next/image";
import { useActionState } from "react";
import { login } from "@/app/actions/auth";

const initialState = { error: null };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-dark px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Afrique Business Global" width={144} height={72} className="h-9 w-auto" />
          <span className="text-lg font-semibold text-ink">Afrique Business Global</span>
        </div>

        <h1 className="mt-6 text-xl font-bold text-ink">Espace administration</h1>
        <p className="mt-1 text-sm text-ink-soft">
          Connectez-vous pour gérer les annonces, le blog et les contacts.
        </p>

        <form action={formAction} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs font-semibold text-ink-soft">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-md border border-border px-3 py-2 text-sm"
              placeholder="admin@afriquebusinessglobal.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-xs font-semibold text-ink-soft">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="rounded-md border border-border px-3 py-2 text-sm"
              placeholder="••••••••"
            />
          </div>

          {state.error && (
            <p className="text-sm font-medium text-danger">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
          >
            {pending ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
