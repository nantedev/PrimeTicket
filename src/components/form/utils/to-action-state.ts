import z, { ZodError } from "zod";

export type ActionState = { 
    message: string; 
    payload?: FormData;
    fieldErrors: Record<string, string[] | undefined>;
};


export const fromErrorToActionState = (
    error: unknown, 
    formData: FormData,
    ): ActionState => {
        
        if (error instanceof ZodError){
            return {
                message: "",
                fieldErrors: z.flattenError(error).fieldErrors,
                payload: formData,
            }
        } else if (error instanceof Error){
            return { 
                message: error.message,
                fieldErrors: {},
                payload: formData,
            }    
        } else {
            return { 
                message: "An error occurred.",
                fieldErrors: {},
                payload: formData,
            }    
        }
}