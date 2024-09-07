"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { unmaskNumber } from "@/app/functions/unmaskNumber";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { phoneMask } from "@/app/functions/phoneMask";
import { Button } from "@/app/components/Button";
import { FileInput } from "./Input/FileInput";
import { Modal } from "@/app/components/Modal";
import { useState } from "react";

export function Form() {
    const MAX_FILE_SIZE = 2000000;
    const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const formSchema = z.object({
        fullName: z.string().min(3, { message: "Coloque seu nome" }),
        phoneNumber: z
            .string()
            .length(11, { message: "Telefone inválido" })
            .transform((phoneNumber) => unmaskNumber(phoneNumber)),
        email: z.string().email({ message: 'Coloque um email verdadeiro' }).optional().or(z.literal('')),
        additionalMessage: z.string().max(150, { message: 'máximo de 150 letras' }),
        curriculo: z
            .any()
            .refine((files) => files?.length == 1, "Nenhum currículo adicionado.")
            .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Tamanho máximo do arquivo: 20MB.`)
            .refine(
                (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                "Formato do arquivo não suportado, insira um PDF, imagem, ou Word."
            ),

    });

    type FormSchema = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,


        formState: { errors, isSubmitting },

    } = useForm<FormSchema>({
        resolver: zodResolver(formSchema),

    });

    async function handleSendCurriculo(data: FormSchema) {
        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("email", data.email || "");
        formData.append("additionalMessage", data.additionalMessage);
        formData.append("curriculo", data.curriculo[0]); // arquivo PDF

        try {
            const response = await fetch("http://localhost:3002/send-curriculo", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    function openModal() {
        setModalIsOpen(true)
    }

    return (
        <div className="max-w-96 ">
            <form
                onSubmit={handleSubmit(handleSendCurriculo)}
                className="flex w-full flex-col items-start justify-center gap-4 p-1"
            >
                <Input
                    maxLength={60}
                    label="Nome"
                    placeholder="João José"
                    {...register("fullName")}
                    barSize="full"
                    errorMessage={errors.fullName?.message}
                />
                <Input
                    maxLength={60}
                    label="Email"
                    placeholder="Caso não possua, deixe em branco"
                    {...register("email")}
                    barSize="full"
                    errorMessage={errors.email?.message}
                />

                <Input
                    maxLength={15}
                    label="Celular"
                    placeholder="(99) 99999-9999"
                    barSize="full"
                    errorMessage={errors.phoneNumber?.message}
                    {...register("phoneNumber", {
                        setValueAs: (value) => {
                            return unmaskNumber(value);
                        },
                        onChange: (event) => {
                            event.target.value = phoneMask(event.target.value);
                        },
                    })}
                />

                <FileInput
                    label="Currículo"
                    barSize="full"
                    errorMessage={errors.curriculo?.message?.toString()}
                    {...register("curriculo")}    
                />

                <textarea
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Adicione informações que possam ser úteis, como indicações, preferência de atuação, etc."
                    {...register("additionalMessage")}
                />
                <Button type="submit" disabled={isSubmitting} className={` hover:bg-green-600 text-white font-b ${isSubmitting? 'bg-yellow-600': 'bg-green-700' } transition-colors ease-in duration-200`}>
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
            </form>
            <Modal isOpen={modalIsOpen} onClose={() => console.log('')}>
                <h1>teste</h1>
            </Modal>
        </div>
    );
}


