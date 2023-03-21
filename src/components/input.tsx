import { TextField } from "@mui/material";
import { useInformation } from "../context/informationContext";
interface Props {
  event: (value: string) => void;
  value: string;
  label: string;
  error?: boolean;
  type?: "number" | "text";
}
export const Input = ({ event, value, label, error, type }: Props) => {
  return (
    <TextField
      type={type}
      error={error}
      label={label}
      onChange={({ target }) => {
        event(target.value);
      }}
      value={value}
    />
  );
};
