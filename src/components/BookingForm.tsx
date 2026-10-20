"use client";

import { useState } from "react";
import {
  CalendarCheck2,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";
import { clinic, services } from "@/lib/data";
import { Button, ButtonAnchor } from "./ui/Button";
import { IconTile } from "./ui/IconTile";

const timeSlots = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

type Status = "idle" | "submitting" | "success" | "error";

const fieldLabel =
  "mb-1.5 block text-[13px] font-semibold text-ink-soft";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [today, setToday] = useState("");

  // The visitor's local date is read only when the field is first used, so it
  // never runs during prerendering.
  const ensureToday = () => {
    if (!today) setToday(new Date().toISOString().split("T")[0]);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(
          json.error || "Something went wrong. Please call us instead.",
        );
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="card surface-shadow flex flex-col items-center px-8 py-14 text-center">
        <CheckCircle2
          className="h-14 w-14 text-gold"
          strokeWidth={1.5}
          aria-hidden
        />
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Request received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Our front desk will call you shortly to confirm your slot. For
          same-day appointments, WhatsApp or call us directly.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonAnchor
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp us now
          </ButtonAnchor>
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus("idle")}
          >
            Book another appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card surface-shadow p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <IconTile icon={CalendarCheck2} />
        <div>
          <h3 className="font-display text-xl font-semibold text-ink">
            Book an Appointment
          </h3>
          <p className="text-sm text-muted">
            We confirm every booking by phone.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className={fieldLabel}>Full name*</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ahmed Raza"
            className="input"
          />
        </label>

        <label className="block">
          <span className={fieldLabel}>Phone number*</span>
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="03XX XXXXXXX"
            pattern="[0-9+\s\-()]{7,20}"
            className="input"
          />
        </label>

        <label className="block">
          <span className={fieldLabel}>Service*</span>
          <select required name="service" defaultValue="" className="input">
            <option value="" disabled>
              Select a treatment…
            </option>
            <optgroup label="Dental">
              {services
                .filter((s) => s.category === "dental")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
            <optgroup label="Skin & Aesthetics">
              {services
                .filter((s) => s.category === "skin")
                .map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
            </optgroup>
          </select>
        </label>

        <label className="block">
          <span className={fieldLabel}>Preferred date*</span>
          <input
            required
            name="date"
            type="date"
            min={today || undefined}
            onFocus={ensureToday}
            onClick={ensureToday}
            onPointerEnter={ensureToday}
            className="input"
          />
        </label>

        <label className="block">
          <span className={fieldLabel}>Preferred time*</span>
          <select required name="time" defaultValue="" className="input">
            <option value="" disabled>
              Select a slot…
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className={fieldLabel}>Notes (optional)</span>
          <textarea
            name="notes"
            rows={3}
            placeholder="Tell us about your concern, preferred doctor, or anything we should know…"
            className="input resize-none"
          />
        </label>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-rose/10 px-4 py-3 text-sm font-medium text-rose"
        >
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="mt-6 w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending request…
          </>
        ) : (
          "Request Appointment"
        )}
      </Button>

      <p className="mt-3 text-center text-xs text-muted">
        Prefer to talk? Call{" "}
        <a
          href={clinic.phoneHref}
          className="font-semibold text-gold hover:underline"
        >
          {clinic.phone}
        </a>
      </p>
    </form>
  );
}
