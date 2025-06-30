import { memoForwardRef } from "@/utils";
import { InputHTMLAttributes } from "react";

interface UITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

export const UITextInput = memoForwardRef(function UITextInput(
  {
    label,
    required,
    error,
    helperText,
    className = "",
    ...props
  }: UITextInputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="flex flex-col gap-s flex-1">
      {label && (
        <label className="b3-6 text-grey-900">
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        ref={ref}
        className={`py-s px-m rounded-2 b3-4 bg-white text-grey-900 border border-grey-100 ${
          error ? "border-red-500" : "border-grey-300"
        } focus:outline-none focus:border-brand-500 focus:border-1 transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      {helperText && (
        <span className="text-grey-600 text-sm">{helperText}</span>
      )}
    </div>
  );
});
