import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/home");
  return (
    <main className="w-screen min-h-[100vh] flex flex-col gap-8 row-start-2 items-center sm:items-start">
    </main>
  );
}
