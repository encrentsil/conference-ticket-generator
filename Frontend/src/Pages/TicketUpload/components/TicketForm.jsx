"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router";
import { useTicket } from "@/context/TicketProvider";

// ✅ Validation Schema
const formSchema = z.object({
  avatar: z
    .any()
    .refine((files) => files?.length === 1, "Please upload an image.")
    .refine(
      (files) => ["image/jpeg", "image/png"].includes(files?.[0]?.type ?? ""),
      "Only JPG or PNG allowed."
    )
    .refine(
      (files) => files?.[0]?.size <= 500 * 1024,
      "Image must be less than 500KB."
    ),
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  github: z
    .string()
    .min(2, "GitHub username is required.")
    .regex(/^@/, "Must start with '@'"),
});

const TicketForm = () => {
  const navigate = useNavigate();
  const { setTicketData } = useTicket();
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // 🔢 Generate a random ticket ID like #4721
  const generateTicketId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `#${randomNum}`;
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: null,
      fullName: "",
      email: "",
      github: "",
    },
  });

  // ✅ File validation
  const validateFile = (file) => {
    if (!["image/png", "image/jpeg"].includes(file.type)) {
      toast.error("❌ Only JPG or PNG images are allowed.");
      return false;
    }
    if (file.size > 500 * 1024) {
      toast.error("⚠️ Image must be less than 500KB.");
      return false;
    }
    return true;
  };

  const handleImageChange = (fileList, onChange) => {
    const file = fileList?.[0];
    if (file && validateFile(file)) {
      setPreview(URL.createObjectURL(file));
      onChange(fileList);
    }
  };

  const onDrop = (e, onChange) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      setPreview(URL.createObjectURL(file));
      onChange(e.dataTransfer.files);
    }
  };

  const onSubmit = (data) => {
    const ticketInfo = {
      fullName: data.fullName, // ✅ Correct key name
      email: data.email,
      github: data.github,
      avatar: URL.createObjectURL(data.avatar[0]),
      ticketId: generateTicketId(),
      event: "Coding Conf",
      date: "Jan 31, 2025 / Austin, TX",
    };

    setTicketData(ticketInfo);
    navigate("/ticket");

    console.log("Form submitted:", ticketInfo);
    toast.success("🎟️ Your ticket has been generated successfully!");
  };

  return (
    <div className="relative flex flex-col items-center w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[90%] max-w-md sm:max-w-lg lg:max-w-xl p-6 sm:p-8 md:p-10 bg-transparent"
        >
          {/* Upload Avatar */}
          <Controller
            name="avatar"
            control={form.control}
            render={({ field: { onChange } }) => (
              <FormItem>
                <FormLabel className="text-white/90 text-sm sm:text-base">
                  Upload Avatar
                </FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center w-full">
                    <div
                      role="button"
                      aria-label="Upload Avatar"
                      className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 sm:p-8 text-center w-full cursor-pointer transition-all duration-300 bg-white/10 backdrop-blur-lg shadow-md ${
                        dragActive
                          ? "border-orange-500 bg-orange-500/10 shadow-lg ring-1 ring-orange-400/30"
                          : "border-white/20 hover:border-orange-500 hover:shadow-lg"
                      }`}
                      onClick={() =>
                        document.getElementById("avatar-upload").click()
                      }
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                      }}
                      onDragLeave={() => setDragActive(false)}
                      onDrop={(e) => onDrop(e, onChange)}
                    >
                      {preview ? (
                        <>
                          <img
                            src={preview}
                            alt="Preview"
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-3"
                          />
                          <div className="flex flex-wrap justify-center gap-2">
                            <Button
                              type="button"
                              className=" font-Inconsolata font-semibold bg-orange-500 text-secondary hover:bg-orange-600 text-xs sm:text-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreview(null);
                                form.setValue("avatar", undefined);
                              }}
                            >
                              Remove
                            </Button>

                            <Button
                              type="button"
                              className="font-Inconsolata font-semibold bg-orange-500 text-secondary hover:bg-orange-600 text-xs sm:text-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                document
                                  .getElementById("avatar-upload")
                                  .click();
                              }}
                            >
                              Change
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-2" />
                          <p className="text-white/90 text-sm sm:text-base font-medium">
                            Drag & drop or click to upload
                          </p>
                        </>
                      )}
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) =>
                          handleImageChange(e.target.files, onChange)
                        }
                        className="hidden"
                      />
                    </div>

                    <p className="text-white/70 text-xs sm:text-sm mt-2">
                      Upload your photo (JPG or PNG), max size: 500KB.
                    </p>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input Fields */}
          {[
            {
              name: "fullName",
              label: "Full Name",
              placeholder: "Jonatan Kristof",
            },
            {
              name: "email",
              label: "Email Address",
              placeholder: "example@email.com",
            },
            {
              name: "github",
              label: "GitHub Username",
              placeholder: "@yourgithubusername",
            },
          ].map(({ name, label, placeholder }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel className="text-white/90 text-sm sm:text-base">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      {...field}
                      className="
                        bg-white/10
                        p-6
                        rounded-xl
                        backdrop-blur-lg
                        shadow-xl
                        border
                        border-white/20
                        font-Inconsolata
                        text-white
                        placeholder-white/70
                        focus:outline-none
                        transition-all
                        duration-300
                        w-full
                      "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          {/* Submit */}
          <Button
            type="submit"
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-colors"
          >
            Generate My Ticket
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TicketForm;
