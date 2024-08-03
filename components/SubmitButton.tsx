import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className || "shad-primary-btn w-full"}>
      {isLoading ? "spinner" : children}
      Submit
    </Button>
  );
};

export default SubmitButton;
