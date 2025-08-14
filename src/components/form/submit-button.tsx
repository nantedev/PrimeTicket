"use client";
import { LucideLoader } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { cloneElement } from "react";
import clsx from "clsx";

type SubmitButtonProps = {
  label: string;
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  isPending?: boolean;
};

const SubmitButton = ({
  label,
  icon,
  variant,
  size,
  isPending,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  const isSubmitting = isPending ?? pending;

  return (
    <Button disabled={isSubmitting} type="submit" variant={variant} size={size}>
      {isSubmitting && (
        <LucideLoader
          className={clsx("h-4 w-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}
      {isSubmitting ? null : icon ? (
        <span className={clsx({ "ml-2": !!label })}>
          {cloneElement(icon, {
            className: "h-4 w-4",
          })}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
