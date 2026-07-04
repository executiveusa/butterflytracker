import { Species, species } from './seed-species';import { SpeciesCard } from './SpeciesCard';
export function SpeciesGrid({filter,onOpen}:{filter:string;onOpen:(s:Species)=>void}){const list=filter?species.filter(s=>s.colors.includes(filter)):species;return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map(s=><SpeciesCard key={s.slug} s={s} onOpen={onOpen}/>)}</div>}
