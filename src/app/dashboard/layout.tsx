import { Sidebar } from "@/components/layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark-950">
      <Sidebar />
      <div className="lg:pl-[250px] transition-all duration-300">
        <main className="min-h-screen">{children}</main>
      </div>
    </div>
  );
}
