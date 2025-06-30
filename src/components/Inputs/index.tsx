import { UITextarea } from "./UITextarea";
import { UITextInput } from "./UITextInput";

interface UIInputInterface {
  Text: typeof UITextInput;
  Textarea: typeof UITextarea;
}

export const UIInput: UIInputInterface = {
  Text: UITextInput,
  Textarea: UITextarea,
};

export * from "./UITextarea";
export * from "./UITextInput";
