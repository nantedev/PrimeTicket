"use client";

import { FieldError } from "@/components/form/field-error";
import { Form } from "@/components/form/form";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { signIn } from "../actions/sign-in";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";

const SignInForm = () => {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <Input
        name="email"
        placeholder="Email"
        defaultValue={actionState.payload?.get("email") as string}
      />
      <FieldError name="email" actionState={actionState} />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        defaultValue={actionState.payload?.get("password") as string}
      />
      <FieldError name="password" actionState={actionState} />
      <FieldError name="confirmPassword" actionState={actionState} />
      <SubmitButton label="Sign In" />
    </Form>
  );
};

export { SignInForm };
