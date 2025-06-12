import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  BarChart,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 bg-zinc-800 text-white hover:bg-zinc-700 transition flex items-center gap-2 w-full">
        <Menu className="w-5 h-5" />
      </SheetTrigger>

      <SheetContent side="left" className="w-72 bg-zinc-900 text-zinc-100 shadow-xl">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold text-zinc-100">Navegação</SheetTitle>
          <SheetDescription className="text-sm text-zinc-400">
            Acesse as principais áreas
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-4 px-4">
          <a
            href="#"
            className="flex items-center gap-2 text-zinc-200 hover:text-white transition"
          >
            <Home className="w-5 h-5" />
            Início
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-zinc-200 hover:text-white transition"
          >
            <BarChart className="w-5 h-5" />
            Dashboard
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-zinc-200 hover:text-white transition"
          >
            <Settings className="w-5 h-5" />
            Configurações
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
