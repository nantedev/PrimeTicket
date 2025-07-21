import { LucideLoader } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({label}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
          <Button disabled={pending} type="submit">
            { pending && (
                <LucideLoader className="mr-2 h-4 w-4 animate-spin" />
            )}
            { label }
            </Button> 
          )
}

export { SubmitButton };