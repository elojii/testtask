import { Loader2 } from "lucide-react";

export default function CircleLoader() {
  return (
    <div className="flex justify-center relative">
      <Loader2 className="size-24 animate-spin absolute" />
    </div>
  );
}
