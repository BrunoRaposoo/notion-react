import { Building, Clock9, PlusCircle, Search, Settings } from "lucide-react";
import { Editor } from "./components/Editor";
import { MenuOptions } from "./components/MenuOptions";

export function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="flex flex-col gap-4 bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400"></button>
          </div>

          <div className="flex item-center gap-3">
            <span className="flex items-center px-1.5 bg-zinc-400/30 rounded font-medium text-sm text-zinc-500">A</span>
            <span className="text-zinc-600 font-semibold">Account name</span>
          </div>

          <div className="flex flex-col mt-4 py-1 w-full gap-2">
            <MenuOptions>
              <Search className="w-4 h-4 text-zinc-400 font-bold"/>
              Search
            </MenuOptions>
            <MenuOptions>
              <Clock9 className="w-4 h-4 text-zinc-400 font-bold"/>
              Update
            </MenuOptions>
            <MenuOptions>
              <Building className="w-4 h-4 text-zinc-400 font-bold"/>
              All teamspaces
            </MenuOptions>
            <MenuOptions>
              <Settings className="w-4 h-4 text-zinc-400 font-bold"/>
              Settings and members
            </MenuOptions>
            <MenuOptions>
              <PlusCircle className="w-4 h-4 text-zinc-400 font-bold"/>
              New page
            </MenuOptions>
          </div>

        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}