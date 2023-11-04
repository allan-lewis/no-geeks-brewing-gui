import { Batch } from "@/redux/services/ngbApi";

export default function RecipeCard({batch} : {batch: Batch}) {
    return (
        <div>
            {batch.name}
        </div>
    )
}
