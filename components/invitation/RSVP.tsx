"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Invitacion, Invitado } from "@prisma/client";
import send from "@/public/send.svg";

type RSVPProps = {
  invitacion: Invitacion;
  invitados: Invitado[];
};

const motionProps = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function RSVP({ invitacion, invitados }: RSVPProps) {
  const inicial = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const invitado of invitados) {
      map[invitado.id] = invitado.asistira ?? false;
    }
    return map;
  }, [invitados]);

  const [checks, setChecks] = useState<Record<string, boolean>>(inicial);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enviada, setEnviada] = useState(false);

  const confirmados = useMemo(
    () => invitados.filter((g) => checks[g.id]).length,
    [invitados, checks],
  );

  const fechaLimite = useMemo(() => {
    if (!invitacion.fechaLimiteConfirmacion) return null;
    return new Date(invitacion.fechaLimiteConfirmacion).toLocaleDateString(
      "es-MX",
      { day: "numeric", month: "long", year: "numeric" },
    );
  }, [invitacion.fechaLimiteConfirmacion]);

  async function enviar() {
    setEnviando(true);
    setError(null);

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          codigo: invitacion.codigo,
          invitados: invitados.map((g) => ({
            id: g.id,
            asistira: checks[g.id],
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "No se pudo enviar la confirmación");
      }

      setEnviada(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section
      id="rsvp"
      className="px-6 py-12 text-wedding-dark"
    >
      <div className="max-w-md mx-auto text-center">
        <motion.h2
          {...motionProps}
          
        >
          Confirmación de asistencia
        </motion.h2>

        <motion.p
          {...motionProps}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-sm leading-7 text-wedding-dark/70"
        >
          Les agradeceremos confirmar su asistencia antes del <b className="font-bold">1 de noviembre de 2026</b> para ayudarnos con la organización de nuestra celebración.
        </motion.p>

        <motion.div
          {...motionProps}
          transition={{ delay: 0.25 }}
          className="max-w-sm mx-auto mt-6 text-center text-wedding-dark/70"
        >
          <p className="text-sm leading-7">
            Puestos reservados
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-tight text-wedding-dark">
            {invitacion.cantidadPuestos}
          </h2>

          <p className="mt-2 text-sm leading-7">
            {invitacion.cantidadPuestos === 1 ? "Puesto" : "Puestos"}
          </p>
        </motion.div>
          <p className="mt-4 text-xs leading-5 text-wedding-dark/50">
              Para confirmar su asistencia marque la casilla correspondiente a cada persona que asistirá y oprima “Confirmar asistencia”
            </p>


        {!enviada ? (
          <motion.div
            {...motionProps}
            transition={{ delay: 0.35 }}
            className="flex flex-col items-center gap-4 mt-8"
          >
            <div className="space-y-3 text-left">
              {invitados.map((invitado) => (
                <label
                  key={invitado.id}
                  className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointe"
                >
                  <span className="italic text-wedding-dark">
                    {invitado.nombreCompleto}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-xs text-wedding-dark">
                      {checks[invitado.id] ? "Asistirá" : "No asistirá"}
                    </span>
                    <input
                      type="checkbox"
                      checked={checks[invitado.id]}
                      onChange={(e) =>
                        setChecks((prev) => ({
                          ...prev,
                          [invitado.id]: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 cursor-pointer accent-wedding-primary rounded-3xl"
                    />
                  </span>
                </label>
              ))}
            </div>

          
            <p className="mt-4 text-sm leading-7 text-wedding-dark/70">
              Confirmados: <span className="font-bold">{confirmados}</span> de{" "}
              {invitacion.cantidadPuestos}
            </p>

            {error && (
              <p className="mt-4 text-sm leading-6 text-red-700">{error}</p>
            )}

            <button
              type="button"
              onClick={enviar}
              disabled={enviando}
              className="flex justify-center w-11/12 gap-2 py-3 mt-6 font-bold text-white transition rounded-lg bg-wedding-dark hover:bg-wedding-dark/90 disabled:opacity-50 disabled:hover:bg-wedding-dark"
            >
              
              {enviando ? "Enviando..." : "Confirmar asistencia"}
              <Image src={send} alt="icono enviar" width={16} height={16}/>

            </button>
             <p className="mt-4 text-xs leading-5 text-wedding-dark/50">
              Si no recibimos su confirmación antes de la fecha indicada, entenderemos con mucho cariño que no podrán acompañarnos. No se preocupen, después les contaremos cómo estuvo la fiesta… ¡y les enseñaremos las fotos para que no se pierdan ningún detalle!
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <p className="text-2xl leading-9 text-wedding-dark">
              ¡Gracias por confirmar!
            </p>
            <p className="mt-4 text-sm leading-7 text-wedding-dark/70">
              {confirmados > 0 ? (
                <>
                  Confirmamos{" "}
                  <span className="font-bold">
                    {confirmados} {confirmados === 1 ? "invitado" : "invitados"}
                  </span>{" "}
                  de su familia.
                </>
              ) : (
                "Lamentamos que no puedan acompañarnos."
              )}
            </p>
           

            <button
              type="button"
              onClick={() => {
                setEnviada(false);
                setError(null);
              }}
              className="mt-6 text-sm underline text-wedding-dark/60 hover:text-wedding-dark"
            >
              Modificar respuesta
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
