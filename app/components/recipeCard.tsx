import { Batch } from "@/redux/services/ngbApi";

export default function RecipeCard({batch} : {batch: Batch}) {
    return (
        <div className="border border-gray-300">
            <h2>
                {batch.name}
            </h2>
            <h3>
                Batch #{batch.batchNumber}
            </h3>
            <h3>
                {batch.style}
            </h3>
        </div>
    )
}
