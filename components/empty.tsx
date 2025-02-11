import { Paperclip } from "lucide-react";
import Image from "next/image";


interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center border-2 rounded-lg">
      <div className="relative  mb-4">
        <Paperclip className="h-32 w-32" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
