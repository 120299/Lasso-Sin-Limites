"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { sendContactForm } from "@/services/sendContacForm";

import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export const DynamicForm = ({
  fields,
  buttonText,
}: {
  fields: any[];
  buttonText: string;
}) => {
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return; // Ignorar si es un bot[cite: 2]
    setStatus("loading");

    try {
      await sendContactForm(data);
      setStatus("success");
      reset();
      setAccepted(false);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-card p-8 rounded-[2.5rem] border shadow-2xl"
    >
      <input type="text" {...register("honeypot")} className="hidden" />

      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <label className="text-sm font-bold block ml-1">
            {field.label}{" "}
            {field.required && <span className="text-destructive">*</span>}
          </label>
          {field.type === "textarea" ? (
            <Textarea
              {...register(field.name as any)}
              placeholder={field.placeholder}
            />
          ) : (
            <Input
              {...register(field.name as any)}
              type={field.type}
              placeholder={field.placeholder}
            />
          )}
          {errors[field.name as keyof ContactFormData] && (
            <p className="text-xs text-destructive font-medium ml-1">
              {errors[field.name as keyof ContactFormData]?.message}
            </p>
          )}
        </div>
      ))}

      <div className="flex items-center gap-3 ml-1">
        <input
          type="checkbox"
          id="terms"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="size-5 cursor-pointer"
        />
        <label
          htmlFor="terms"
          className="text-sm text-muted-foreground cursor-pointer select-none"
        >
          Acepto los{" "}
          <span className="text-primary underline">términos y condiciones</span>
        </label>
      </div>

      <Button
        type="submit"
        disabled={!accepted || status === "loading"}
        className="w-full h-14 rounded-2xl font-bold text-lg"
      >
        {status === "loading" ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <Send className="size-5 mr-2" /> {buttonText}
          </>
        )}
      </Button>

      {status === "success" && (
        <p className="text-green-500 text-center font-bold">
          ¡Mensaje enviado!
        </p>
      )}
      {status === "error" && (
        <p className="text-destructive text-center font-bold">
          Error al enviar el formulario.
        </p>
      )}
    </form>
  );
};
