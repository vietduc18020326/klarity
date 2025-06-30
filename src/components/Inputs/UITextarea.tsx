import { InputHTMLAttributes } from "react";

interface UITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  minHeight?: string;
}

export const UITextarea = ({
  label,
  placeholder,
  error,
  className = "",
  minHeight = "320px",
  required,
  ...props
}: UITextareaProps) => {
  return (
    <div className="flex flex-col gap-s">
      {label ? (
        <label className="b3-6 text-grey-900">
          {label} {required && <span>*</span>}
        </label>
      ) : null}
      <textarea
        placeholder={placeholder}
        className={`py-s px-m text-grey-900 bg-white rounded-2 border border-grey-100 focus:outline-none focus:border-brand-500 focus:border-1 transition-colors ${className}`}
        style={{ minHeight }}
        {...props}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
