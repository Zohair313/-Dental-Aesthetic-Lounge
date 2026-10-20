/**
 * Appointment request endpoint.
 *
 * Frontend (website / mobile app) POSTs a JSON body:
 *   { name, phone, service, date, time, notes? }
 *
 * The submission is validated and logged. TODO: persist to the clinic
 * database (PostgreSQL via Prisma) and notify the front desk — e.g. by
 * SMS/WhatsApp API or email — once the backend service is connected.
 */

interface AppointmentPayload {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
  notes?: string;
}

const PHONE_RE = /^[0-9+\s\-()]{7,20}$/;

export async function POST(request: Request) {
  let body: AppointmentPayload;

  try {
    body = (await request.json()) as AppointmentPayload;
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const service = body.service?.trim() ?? "";
  const date = body.date?.trim() ?? "";
  const time = body.time?.trim() ?? "";
  const notes = body.notes?.trim() ?? "";

  const errors: string[] = [];
  if (name.length < 2) errors.push("Please enter your full name.");
  if (!PHONE_RE.test(phone)) errors.push("Please enter a valid phone number.");
  if (!service) errors.push("Please choose a service.");
  if (!date) errors.push("Please choose a preferred date.");
  if (!time) errors.push("Please choose a preferred time.");

  if (errors.length > 0) {
    return Response.json({ ok: false, error: errors.join(" ") }, { status: 422 });
  }

  const appointment = {
    id: crypto.randomUUID(),
    name,
    phone,
    service,
    date,
    time,
    notes,
    receivedAt: new Date().toISOString(),
  };

  // TODO: replace with a real database write + front-desk notification.
  console.log("[appointment-request]", appointment);

  return Response.json({ ok: true, id: appointment.id }, { status: 201 });
}
