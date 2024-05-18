import { Batch } from "@/redux/services/ngbApi";
import RecipeCard from "./recipeCard";

export default function BatchList({ batches }: { batches: Array<Batch> }) {
  return (
    <div className="bg-pink-400 grid lg:w-full lg:mb-0 lg:grid-cols-3 flex gap-4">
      {batches.map((batch) => (
        <RecipeCard key={batch.id} batch={batch}></RecipeCard>
      ))}
    </div>
  )
}
