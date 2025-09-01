export type ControlType =
  | 'input'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'select'
  | 'date';

export interface InputGroup<T> {
  controlType?: ControlType;
  order?: number;
  label?: string;
  id?: string;
  name?: T;
  multiple?: boolean; // for select
  date?: string; // for Date
  isOpen?: boolean; // for Date
  options?: {
    id?: string;
    name?: string;
    img?: string;
  }[];
}

export type EyeKey = 'oldPassword' | 'password' | 'passwordConfirm';
export type InputType = 'text' | 'password' | undefined;
export interface EyeState {
  [key: string]: boolean | undefined;
  oldPassword?: boolean;
  password: boolean;
  passwordConfirm: boolean;
}
export interface PasswordState {
  [key: string]: InputType;
  oldPassword?: InputType;
  password: InputType;
  passwordConfirm: InputType;
}
