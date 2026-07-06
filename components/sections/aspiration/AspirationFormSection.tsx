"use client"

import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

type AspirationForm = {
  name: string
  nim: string
  email: string
  aspiration: string
  anonymous: boolean
}

const initialForm: AspirationForm = {
  name: "",
  nim: "",
  email: "",
  aspiration: "",
  anonymous: false,
}

export function AspirationFormSection() {
  const [form, setForm] = useState<AspirationForm>(initialForm)
  const [successMessage, setSuccessMessage] = useState("")

  const updateField =
    (field: keyof AspirationForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }))
      if (successMessage) setSuccessMessage("")
    }

  const updateAnonymous = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((current) => ({ ...current, anonymous: event.target.checked }))
    if (successMessage) setSuccessMessage("")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSuccessMessage(
      "Thank you. Your aspiration has been temporarily recorded and has not been sent to the database.",
    )
    setForm(initialForm)
  }

  return (
    <section className="relative -mt-[35px] overflow-hidden rounded-t-[35px] bg-[#001b4b] px-5 pb-24 pt-24 sm:px-8 sm:pb-[150px] sm:pt-[128px] lg:px-16">
      <div className="mx-auto max-w-[886px]">
        <h2 className="text-center font-[family-name:var(--font-goldman)] text-[clamp(2.7rem,6vw,4rem)] leading-none text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.9)] [text-shadow:0_4px_0_rgba(0,27,75,0.45)]">
          Aspiration <span className="text-[#ffbd4a]">Form</span>
        </h2>

        <div className="mt-10 rounded-[13px] border border-white/80 bg-white/[0.12] px-5 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur sm:mt-14 sm:px-9 sm:py-12 lg:px-[91px] lg:py-[96px]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block font-[family-name:var(--font-inter)] text-sm font-bold text-white">
                Reporter Name
                <input
                  value={form.name}
                  onChange={updateField("name")}
                  placeholder="Full Name"
                  className="mt-2 h-[47px] w-full rounded-[10px] border border-[#d5d5d5] bg-white px-5 font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none transition placeholder:text-[#7890bb] focus:border-[#ffbd4a] focus:ring-2 focus:ring-[#ffbd4a]/35"
                />
              </label>

              <label className="block font-[family-name:var(--font-inter)] text-sm font-bold text-white">
                Reporter Student ID (NIM)
                <input
                  value={form.nim}
                  onChange={updateField("nim")}
                  placeholder="Student Identification Number"
                  className="mt-2 h-[47px] w-full rounded-[10px] border border-[#d5d5d5] bg-white px-5 font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none transition placeholder:text-[#7890bb] focus:border-[#ffbd4a] focus:ring-2 focus:ring-[#ffbd4a]/35"
                />
              </label>
            </div>

            <label className="block font-[family-name:var(--font-inter)] text-sm font-bold text-white">
              Reporter Email
              <input
                type="email"
                value={form.email}
                onChange={updateField("email")}
                placeholder="email@example.com"
                className="mt-2 h-[47px] w-full rounded-[10px] border border-[#d5d5d5] bg-white px-5 font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none transition placeholder:text-[#7890bb] focus:border-[#ffbd4a] focus:ring-2 focus:ring-[#ffbd4a]/35"
              />
            </label>

            <label className="block font-[family-name:var(--font-inter)] text-sm font-bold text-white">
              Aspiration Details
              <textarea
                required
                value={form.aspiration}
                onChange={updateField("aspiration")}
                placeholder="Write down your aspirations, suggestions, or feedback here..."
                className="mt-2 min-h-[146px] w-full resize-y rounded-[10px] border border-[#d5d5d5] bg-white px-5 py-4 font-[family-name:var(--font-inter)] text-sm font-medium text-[#001b4b] outline-none transition placeholder:text-[#7890bb] focus:border-[#ffbd4a] focus:ring-2 focus:ring-[#ffbd4a]/35"
              />
            </label>

            <label className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm font-semibold leading-6 text-white">
              <input
                type="checkbox"
                checked={form.anonymous}
                onChange={updateAnonymous}
                className="mt-1 h-4 w-4 rounded border-white/40 accent-[#ffbd4a]"
              />
              <span>
                Send anonymously
                <span className="block text-xs font-medium text-white/55">
                  Name, NIM, and email remain optional to maintain privacy.
                </span>
              </span>
            </label>

            <p className="flex items-start gap-2 font-[family-name:var(--font-inter)] text-xs font-medium leading-5 text-white/55">
              <span
                aria-hidden="true"
                className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-white/60 text-[10px]"
              >
                i
              </span>
              Your aspiration is guaranteed confidential. Please remain polite in
              expressing your opinions.
            </p>

            {successMessage && (
              <div
                className="rounded-[10px] border border-[#ffbd4a]/40 bg-[#ffbd4a]/15 px-4 py-3 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#ffbd4a]"
                role="status"
              >
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              className="flex h-[52px] w-full items-center justify-center gap-3 rounded-[13px] bg-[linear-gradient(90deg,#ffbd4a_0%,#ff8617_100%)] font-[family-name:var(--font-inter)] text-base font-bold text-white shadow-[0_18px_38px_rgba(249,168,37,0.24)] transition hover:brightness-110"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 3 9.5 14.5M21 3l-7 18-4.5-6.5L3 10l18-7Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              Submit Aspiration
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
