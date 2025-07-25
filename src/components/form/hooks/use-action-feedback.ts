import { useEffect, useRef } from "react"
import { ActionState } from "../utils/to-action-state"

type OnArgs = {
    actionState: ActionState;
};

type UseActionFeedbackOptions = {
    onSuccess?: (onArgs: OnArgs) => void;
    onError?: (onArgs: OnArgs) => void;
};

const useActionFeedback = (
    actionState: ActionState,
    options: UseActionFeedbackOptions,
) => {

    const prevTimestamp = useRef(actionState.timestamp);
    const isUpdate = prevTimestamp.current !== actionState.timestamp;

    
    useEffect(() => {

    if(!isUpdate) return;

    if (actionState.status === "SUCCESS") {
        if(actionState.message) {
            options.onSuccess?.({actionState});
        }
    }

    if(actionState.status === "ERROR") {
         if(actionState.message) {
            options.onError?.({actionState});
        }
   }

    }, [isUpdate, actionState, options]);

}

export { useActionFeedback };