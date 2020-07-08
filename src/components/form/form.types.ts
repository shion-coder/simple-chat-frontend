import { SyntheticEvent, ChangeEvent, KeyboardEvent } from 'react';

/* -------------------------------------------------------------------------- */

export interface FormProps {
  message: string;
  sendMessage: (e: SyntheticEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => false | void;
}
