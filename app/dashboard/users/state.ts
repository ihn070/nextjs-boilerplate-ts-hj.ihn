export type UserFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialUserFormState: UserFormState = {
  status: "idle",
  message: "",
};
