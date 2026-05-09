'use client';
import { ModuleContent } from '@/types/content';
import { useEffect, useMemo, useState } from 'react';
import { readProgress, writeProgress } from '@/lib/storage';

const block = 'brutal-card p-4';

export function ModulePage({ module: currentModule }: { module: ModuleContent }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  useEffect(() => setDone(readProgress().assignments), [currentModule.id]);
  const completed = useMemo(() => currentModule.assignments.filter((a) => done[`${currentModule.id}:${a.id}`]).length, [done, currentModule]);

  const toggle = (id: string) => {
    const key = `${currentModule.id}:${id}`;
    const next = { ...done, [key]: !done[key] };
    setDone(next);
    writeProgress({ assignments: next });
  };

  return <div className="grid xl:grid-cols-[1fr_330px] gap-4">
    <div className="space-y-4">
      <section className={block}><span className="section-label">{currentModule.category}</span><h2 className="text-4xl font-black mt-2">{currentModule.title}</h2><p className="mt-2 text-base leading-7">{currentModule.description}</p><p className="mt-2 text-base leading-7"><b>Bunu neden öğreniyorsun?</b> {currentModule.why}</p></section>
      <section className="grid lg:grid-cols-2 gap-3">{[['Reklamda Kullanım',currentModule.useCases],['Gerçek İş Senaryoları',currentModule.scenarios],['Kullanılan Araçlar',currentModule.tools],['Production Taktikleri',currentModule.tips]].map(([t,list])=><div key={String(t)} className={block}><h3 className="font-black text-lg">{t}</h3><ul className="mt-2 list-disc ml-5 leading-7">{(list as string[]).map(i=><li key={i}>{i}</li>)}</ul></div>)}</section>
      <section className={block}><h3 className="font-black text-lg">Mini Sözlük</h3><div className="mt-3 flex flex-wrap gap-2">{currentModule.glossary.map(g=><div key={g.term} className="relative group border-2 border-black bg-cyan px-2 py-1 font-black">{g.term}<div className="hidden group-hover:block absolute top-full left-0 z-20 w-72 p-2 mt-1 bg-white border-2 border-black text-xs"><p className="font-black">{g.term} · {g.tr}</p><p>{g.desc}</p><p className="mt-1"><b>Reklam örneği:</b> {g.adExample}</p></div></div>)}</div></section>
      <section className={block}><h3 className="font-black text-lg">Yaygın Hatalar</h3><div className="space-y-2 mt-2">{currentModule.mistakes.map((m)=><article key={m.problem} className="border-2 border-black p-2 bg-paper"><p><b>Sorun:</b> {m.problem}</p><p><b>Sebep:</b> {m.reason}</p><p><b>Çözüm:</b> {m.solution}</p></article>)}</div></section>
      <section className={block}><h3 className="font-black text-lg">İzle Bölümü (Kaynaklar)</h3><div className="grid md:grid-cols-2 gap-2 mt-2">{currentModule.resources.map(r=><div key={r.title} className="border-2 border-black p-2 bg-[#EFE8D7]"><p className="font-black">{r.title}</p><p className="text-sm">{r.platform} · {r.language} · {r.duration} · {r.level}</p><p className="text-sm mt-1"><b>Öğren:</b> {r.learn}</p><p className="text-sm"><b>Mini pratik:</b> {r.practice}</p></div>)}</div></section>
      <section className={block}><h3 className="font-black text-lg">Ödevler ({completed}/{currentModule.assignments.length})</h3><div className="space-y-2 mt-2">{currentModule.assignments.map(a=><details key={a.id} className="border-2 border-black p-2 bg-[#EFE8D7]"><summary className="font-black cursor-pointer">{a.title} · {a.level}</summary><div className="mt-2 text-sm space-y-1"><p><b>Amaç:</b> {a.goal}</p><p><b>Gerçek reklam karşılığı:</b> {a.adMatch}</p><p><b>Programlar:</b> {a.programs.join(', ')}</p><p><b>Sahne:</b> {a.scene}</p><p><b>Teslim:</b> {a.deliverable}</p><p><b>Başarı kriteri:</b> {a.success}</p><p><b>Yaygın hata:</b> {a.commonError}</p><ol className="list-decimal ml-5">{a.steps.map(s=><li key={s}>{s}</li>)}</ol></div><button onClick={()=>toggle(a.id)} className="mt-2 border-2 border-black px-2 py-1 font-black bg-yellow">{done[`${currentModule.id}:${a.id}`] ? '✓ Tamamlandı' : 'Tamamlandı olarak işaretle'}</button></details>)}</div></section>
      <section className={block}><h3 className="font-black text-lg">Checklist</h3><ul className="list-disc ml-5 mt-2 leading-7">{currentModule.checklist.map((c)=><li key={c}>{c}</li>)}</ul></section>
      <section className={`${block} bg-magenta`}><h3 className="font-black text-lg">Rozet: {currentModule.badge.name}</h3><p>{currentModule.badge.description}</p><p className="mt-1 font-black">Durum: {currentModule.assignments.length>0 && completed===currentModule.assignments.length ? 'Açıldı' : 'Kilitli'}</p></section>
    </div>
    <aside className="space-y-3 xl:sticky xl:top-4 h-fit">
      <section className={`${block} bg-cyan`}><h3 className="font-black text-lg">Asistana Sor</h3><p className="text-sm">Senior production mentor formatı: Sorun → Hızlı çözüm → Adımlar → Kontrol et → Olmazsa ikinci yöntem.</p><ul className="list-disc ml-5 mt-2 text-sm">{currentModule.assistantPrompts.map(q=><li key={q}>{q}</li>)}</ul><textarea className="w-full mt-2 border-2 border-black p-2" rows={5} placeholder="Sorunu yaz, gerekirse screenshot ekle (placeholder)."/><button className="mt-2 border-2 border-black px-3 py-2 bg-yellow font-black">Mock Cevap Üret</button></section>
    </aside>
  </div>;
}
