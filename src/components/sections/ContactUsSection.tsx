"use client";

import { IMAGE_BUILDING_5 } from "@/assets";
import { UIButton, UIInput } from "@/components";
import { memo } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  content: string;
}

export const ContactUsSection = memo(function ContactUsSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <section className="w-full py-3xl px-l flex items-center justify-center">
      <div
        className="w-content p-xl rounded-[16px] flex items-start bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGE_BUILDING_5})` }}
      >
        <div className="rounded-[20px] border border-secondary-25 bg-white/80 backdrop-blur-[20px] p-l flex flex-col gap-2xl items-start w-[60%]">
          <span className="h2-6 text-brand-500">
            Contact <span className="text-brand-900">Us</span>
          </span>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-l"
          >
            <div className="grid grid-cols-2 gap-l">
              <UIInput.Text
                placeholder="John"
                label="First Name"
                required
                {...register("firstName", {
                  required: "First name is required",
                })}
                error={errors.firstName?.message}
              />

              <UIInput.Text
                placeholder="Doe"
                label="Last Name"
                required
                {...register("lastName", {
                  required: "Last name is required",
                })}
                error={errors.lastName?.message}
              />
            </div>

            <div className="grid grid-cols-2 gap-l">
              <UIInput.Text
                label="Email"
                required
                placeholder="example@email.com"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                error={errors.email?.message}
              />

              <UIInput.Text
                label="Phone number"
                required
                placeholder="(+61) 123456789"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/i,
                    message: "Invalid phone number",
                  },
                })}
                error={errors.phoneNumber?.message}
              />
            </div>

            <UIInput.Textarea
              label="Your request"
              required
              placeholder="Describe your requirements"
              minHeight="96px"
              {...register("content")}
            />

            <UIButton size="L" fullWidth color="primary" title="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
});
