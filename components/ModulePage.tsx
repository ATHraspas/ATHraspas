'use client';
import { ModuleContent } from '@/types/content';
import { useMemo, useState } from 'react';
import { readProgress, writeProgress } from '@/lib/storage';

const block = 'brutal-card p-4';

export function ModulePage({ module: currentModule }: { module: ModuleContent }) {
  const [done, setDone] = useState<Record<string, boolean>>(readProgress().assignments);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('Tümü');
  const completed = useMemo(() => currentModule.assignments.filter((a) => done[`${currentModule.id}:${a.id}`]).length, [done, currentModule]);

  const terms = currentModule.title === 'Genel Sözlük'
    ? currentModule.glossary.filter((t)=> (filter==='Tümü' || t.category===filter) && (t.term.toLowerCase().includes(query.toLowerCase()) || t.tr.toLowerCase().includes(query.toLowerCase())))
    : currentModule.glossary;

  const toggle = (id: string) => {
    const key = `${currentModule.id}:${id}`;
    const next = { ...done, [key]: !done[key] };
    setDone(next);
    writeProgress({ assignments: next });
  };

  const generate = () => setAnswer(`Sorun muhtemelen şu: ${question || 'Track kayması veya uyumsuzluk.'}\n\nHızlı çözüm: Önce doğru yüzeyi takip et, sonra blur/grain/ışık eşle.\n\nAdımlar:\n> Mocha AE aç\n> Düz yüzeyi spline ile seç\n> Track forward\n> Corner Pin export et\n> Layera blur+grain uygula\n\nKontrol et: Perspektif, kayma, parlaklık, motion blur.\n\nOlmazsa ikinci yöntem: Segment bazlı manuel keyframe düzeltmesi yap.`);

  return <div className="grid xl:grid-cols-[1fr_330px] gap-4">
    <div className="space-y-4">
      <section className={`${block} bg-yellow`}><p className="section-label">{currentModule.category}</p><h2 className="text-4xl font-black mt-2">{currentModule.title}</h2><p className="font-bold mt-2">{currentModule.hero}</p><p className="mt-2 leading-7">{currentModule.description}</p></section>
      {currentModule.comingSoon && <section className={`${block} bg-magenta`}><h3 className="font-black">Coming Soon, ama bekleme.</h3><p>Bu modülün tam sürümü hazırlanıyor. Aşağıdaki mini rehber ve asistan sorularıyla şimdiden üretime hazırlanabilirsin.</p></section>}
      <section className="grid lg:grid-cols-2 gap-3">{[['Why this matters',[currentModule.why]],['Advertising use cases',currentModule.useCases],['Real work scenarios',currentModule.scenarios],['Tools needed',currentModule.tools],['Production tactics',currentModule.tips]].map(([t,list])=><div key={String(t)} className={block}><h3 className="font-black text-lg">{t}</h3><ul className="mt-2 list-disc ml-5 leading-7">{(list as string[]).map(i=><li key={i}>{i}</li>)}</ul></div>)}</section>

      <section className={block}><h3 className="font-black text-lg">Mini Glossary</h3>
        {currentModule.title === 'Genel Sözlük' && <div className="grid md:grid-cols-[1fr_220px] gap-2 my-2"><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Terim ara..." className="border-[3px] border-black px-2 py-2"/><select value={filter} onChange={(e)=>setFilter(e.target.value)} className="border-[3px] border-black px-2 py-2">{['Tümü','After Effects','Photoshop','Premiere Pro','Kurgu','AI Görsel','AI Video','Kamera','Reklamcılık','Export','Post Production'].map(c=><option key={c}>{c}</option>)}</select></div>}
        <div className="grid md:grid-cols-2 gap-2">{terms.map((g)=><article key={g.term} className="border-[3px] border-black p-2 bg-[#EFE8D7]"><p className="font-black">{g.term} <span className="text-xs">· {g.category}</span></p><p>{g.tr}</p><p className="text-sm"><b>Neden önemli:</b> {g.why}</p><p className="text-sm"><b>Reklam örneği:</b> {g.adExample}</p><p className="text-sm"><b>İlgili modül:</b> {g.relatedModule}</p></article>)}</div>
      </section>

      <section className={block}><h3 className="font-black text-lg">Common mistakes</h3><div className="space-y-2 mt-2">{currentModule.mistakes.map((m)=><article key={m.problem} className="border-[3px] border-black p-2"><p><b>Sorun:</b> {m.problem}</p><p><b>Sebep:</b> {m.reason}</p><p><b>Çözüm:</b> {m.solution}</p></article>)}</div></section>
      <section className={block}><h3 className="font-black text-lg">Resources</h3><div className="grid md:grid-cols-2 gap-2 mt-2">{currentModule.resources.map((r)=><article key={r.title} className="border-[3px] border-black p-2 bg-[#EFE8D7]"><p className="font-black">{r.title}</p><p className="text-sm">{r.platform} · {r.language} · {r.duration} · {r.level}</p><p className="text-sm">{r.learn}</p><p className="text-sm">Mini pratik: {r.practice}</p></article>)}</div></section>

      <section className={block}><h3 className="font-black text-lg">Assignments ({completed}/{currentModule.assignments.length})</h3><div className="space-y-2 mt-2">{currentModule.assignments.map((a)=>{
        const key=`${currentModule.id}:${a.id}`;
        return <details key={a.id} className="border-[3px] border-black bg-[#EFE8D7]"><summary className="p-2 flex items-center justify-between gap-2"><div><p className="font-black">{a.title}</p><p className="text-sm">{a.level} · {a.shortGoal}</p></div><label className="flex items-center gap-2 text-sm font-bold"><input type="checkbox" checked={!!done[key]} onChange={()=>toggle(a.id)} /> Tamamlandı</label></summary><div className="p-3 border-t-[3px] border-black text-sm space-y-1"><p><b>Goal:</b> {a.goal}</p><p><b>Advertising use case:</b> {a.adMatch}</p><p><b>Required programs:</b> {a.programs.join(', ')}</p><p><b>Scene:</b> {a.scene}</p><ol className="list-decimal ml-5">{a.steps.map((s)=><li key={s}>{s}</li>)}</ol><p><b>Deliverable:</b> {a.deliverable}</p><p><b>Success criteria:</b> {a.success}</p><p><b>Common mistake:</b> {a.commonError}</p><ul className="list-disc ml-5">{a.checklist.map((c)=><li key={c}>{c}</li>)}</ul></div></details>;
      })}</div></section>

      <section className={block}><h3 className="font-black text-lg">Checklist</h3><ul className="list-disc ml-5">{currentModule.checklist.map((c)=><li key={c}>{c}</li>)}</ul></section>
      <section className={`${block} bg-cyan`}><h3 className="font-black text-lg">Badge</h3><p className="font-black">{currentModule.badge.name}</p><p>{currentModule.badge.description}</p><p>Durum: {currentModule.assignments.length>0 && completed===currentModule.assignments.length ? 'Açıldı' : 'Kilitli'}</p></section>
    </div>

    <aside className="space-y-3 xl:sticky xl:top-4 h-fit">
      <section className={`${block} bg-magenta`}><h3 className="font-black text-lg">Assistant Panel</h3><div className="flex flex-wrap gap-1 mt-2">{currentModule.assistantPrompts.map((q)=><button key={q} onClick={()=>setQuestion(q)} className="border-[3px] border-black bg-yellow px-2 py-1 text-xs font-black">{q}</button>)}</div><div className="mt-2 border-[3px] border-dashed border-black p-2 text-sm bg-white">Screenshot upload placeholder</div><textarea value={question} onChange={(e)=>setQuestion(e.target.value)} className="w-full mt-2 border-[3px] border-black p-2" rows={5} placeholder="Sorunu yaz..."/><button onClick={generate} className="mt-2 border-[3px] border-black px-3 py-2 bg-yellow font-black">Mock Answer Generator</button>{answer && <pre className="mt-2 whitespace-pre-wrap border-[3px] border-black p-2 bg-white text-sm">{answer}</pre>}</section>
    </aside>
  </div>;
}
