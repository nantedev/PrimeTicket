import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cloneElement, useActionState, useState } from "react";
import { SubmitButton } from "./form/submit-button";
import { Form } from "./form/form";
import { ActionState, EMPTY_ACTION_STATE } from "./form/utils/to-action-state";

type useConfirmDialogProps = {
  action: () => Promise<ActionState>;
  trigger: React.ReactElement;
  title?: string;
  description?: string;
  onSuccess?: (actionState: ActionState) => void;
};

const useConfirmDialog = ({
  action,
  trigger,
  title = "Are you absolutely sure ?",
  description = "This action cannot be undone. Make sur you understand the consequences.",
  onSuccess,
}: useConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((state) => !state),
  } as React.DOMAttributes<HTMLElement>);

  const [actionState, formAction] = useActionState(action, EMPTY_ACTION_STATE);

  const handleSuccess = () => {
    setIsOpen(false);
    onSuccess?.(actionState);
  };

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={formAction}
              actionState={actionState}
              onSuccess={handleSuccess}
            >
              <SubmitButton label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  return [dialogTrigger, dialog];
};

export { useConfirmDialog };
