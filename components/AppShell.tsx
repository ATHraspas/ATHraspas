'use client';

import { useMemo, useState } from 'react';
import { modules, navigation } from '@/data/modules';
import { ModulePage } from './ModulePage';

export function AppShell() {
  const [selected, setSelected] = useState('ae-tracking');
  const [open, setOpen] = useState(false);
  const activeModule = useMemo(
    () => modules.find((m) => m.id === selected) ?? modules[0],
    [selected]
  );

  return (
    <div className="min-h-screen bg-paper p-3 md:p-5">
      <button
        className="md:hidden brutal-card px-3 py-2 font-black mb-3"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? 'Menüyü Kapat' : 'Modül Menüsü'}
      </button>

      <div className="grid gap-4 md:grid-cols-[320px_1fr]">
        <aside
          className={`${open ? 'block' : 'hidden'} md:block brutal-card p-3 md:sticky md:top-4 h-fit`}
        >
          <h1 className="text-2xl leading-tight font-black">
            AI Creative
            <br />
            Production OS
          </h1>

          <p className="text-xs mt-2 font-semibold">
            Production cockpit for learning.
          </p>

          <nav className="mt-4 space-y-2 max-h-[72vh] overflow-auto pr-1">
            {navigation.map((n) => (
              <details
                key={n.group}
                open
                className="border-2 border-black rounded-brutal bg-[#EFE8D7]"
              >
                <summary className="px-2 py-1 font-black text-sm cursor-pointer">
                  {n.group}
                </summary>

                <div className="p-2 pt-1 flex flex-col gap-1">
                  {n.items.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => item.moduleId && setSelected(item.moduleId)}
                      className={`text-left px-2 py-1 border-2 border-black text-sm font-bold ${
                        activeModule.title === item.title ? 'bg-cyan' : 'bg-white'
                      } ${item.moduleId ? '' : 'opacity-60 cursor-not-allowed'}`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        </aside>

        <main>
          <ModulePage module={activeModule} />
        </main>
      </div>

      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 md:hidden brutal-card bg-white px-2 py-1 flex gap-2 z-30">
        {[
          { id: 'baslangic-merkezi', label: 'Start' },
          { id: 'ae-tracking', label: 'Tracking' },
          { id: 'kurgu-cut-turleri', label: 'Cut' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(m.id)}
            className="border-2 border-black px-2 py-1 text-xs font-black bg-yellow"
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
