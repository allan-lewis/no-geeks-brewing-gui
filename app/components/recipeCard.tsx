import { Batch } from "@/redux/services/ngbApi";

export default function RecipeCard({batch} : {batch: Batch}) {
    return (
        <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 lg:w-full">
            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{batch.name}</h1>
            <h2 className="mb-2 text-l font-bold tracking-tight text-gray-600 dark:text-white">{batch.style}</h2>
            <h2 className="mb-2 text-s tracking-tight text-gray-600 dark:text-white">Batch #{batch.batchNumber}</h2>
        </div>
    )
}
