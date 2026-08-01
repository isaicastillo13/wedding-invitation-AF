type SheetPayload = {
  Codigo: string;
  "Nombre de la Familia": string;
  "Puestos Asignados": number;
  Estado: string;
  "Puestos Confirmados": number;
  "Invitados Asistentes": string;
  "Fecha Respuesta": string;
  Link: string;
};

export async function syncGoogleSheet(payload: SheetPayload) {
  const url = process.env.GOOGLE_SCRIPT_URL;

  if (!url) {
    console.warn("GOOGLE_SCRIPT_URL no está configurada");
    return;
  }

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });
}
