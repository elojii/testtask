"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addMetric } from "../_utils/addMetric";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { SharpLoader } from "@/app/_components";
import { useMutation } from "@tanstack/react-query";

export const AddMetricForm = () => {
  const addMetricMutation = useMutation({
    mutationFn: addMetric,
    onSuccess: () => {
      toast.success("Metric added successfully!");
    },

    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const handleAddMetric = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const category = formData.get("category") as string;
    const value = formData.get("value") as string;
    const name = formData.get("name") as string;

    addMetricMutation.mutate({ category, value: Number(value), name });
  };

  return (
    <form onSubmit={handleAddMetric} className="flex flex-col gap-4 w-full">
      <div className="w-full">
        <Label
          htmlFor="name"
          className="text-venturesGray font-sfBold tracking-wider"
        >
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          className="rounded-full min-w-[250px] mt-2 w-full"
        />
      </div>
      <div className="w-full">
        <Label
          htmlFor="value"
          className="text-venturesGray font-sfBold tracking-wider"
        >
          Value
        </Label>
        <Input
          id="value"
          type="text"
          name="value"
          className="rounded-full min-w-[250px] mt-2 w-full"
        />
      </div>
      <div className="w-full">
        <Label
          htmlFor="category"
          className="text-venturesGray font-sfBold tracking-wider"
        >
          Category
        </Label>
        <Input
          id="category"
          type="text"
          name="category"
          className="rounded-full min-w-[250px] mt-2 w-full"
        />
      </div>
      <div className="w-full">
        <SubmitButton isLoading={addMetricMutation.isPending} />
      </div>
    </form>
  );
};

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button type="submit" disabled={isLoading} className="mt-2">
      {isLoading ? (
        <div className="flex items-center gap-2">
          <SharpLoader />
          Submitting...
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
