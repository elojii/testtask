import { AddMetricForm } from "./_components/AddMetricForm";

export default function AddMetricPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center w-4/5 sm:w-1/4 min-w-[20rem] h-fit mb-60">
        <h3 className="mb-2">Add Metric</h3>
        <AddMetricForm />
      </div>
    </main>
  );
}
