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
};

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && (
        <LucideLoader
          className={clsx("mr-2 h-4 w-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}
      {pending ? null : icon ? (
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
