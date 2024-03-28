import FormPage from "@/components/registerform";

export default async function RegisterPage() {
  return (
    <section className=" h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <FormPage />
      </div>
    </section>
  );
}
