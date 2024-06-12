"use client"

import { Batch, useGetBatchesQuery } from "@/redux/services/ngbApi";
import { notFound } from 'next/navigation'

const knownStatuses: readonly string[] =["archived", "conditioning", "completed", "planning"]

export default function BatchList({ status }: { status: string }) {
  return knownStatuses.indexOf(status) == -1 ? notFound() : loadPage(status)
}

function loadPage(status: string) {
  const { isLoading, isFetching, data, error } = useGetBatchesQuery({status});
  const showLoading = false;
  const showError = false;

  return (
    <div>
      {error || showError ? (
        <ErrorPlaceholder></ErrorPlaceholder>
      ) : showLoading || isLoading || isFetching ? (
        <LoadingPlaceholder></LoadingPlaceholder>
      ): data ? (
        <div className="bg-pink-400 grid lg:w-full lg:mb-0 lg:grid-cols-3 flex gap-4">
          {data.map((batch) => (
            <RecipeCard key={batch.id} batch={batch}></RecipeCard>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ErrorPlaceholder() {
  return (
      <div className="relative flex justify-center fill-space h-full w-full bg-violet-400 items-center h-auto w-auto flex flex-col items-center justify-between p-24">
          <h1 className="text-rose-700 mb-4 mt-4 flex flex items-center text-xl font-semibold bg-gray-400 h-full">Something went wrong, please try again</h1>
      </div>
  )
}

function LoadingPlaceholder() {
  return (
      <div className="relative flex justify-center fill-space h-full w-full bg-violet-400 items-center h-auto w-auto flex flex-col items-center justify-between p-24">
          <h1 className="mb-4 mt-4 flex flex items-center text-xl font-semibold bg-gray-400 h-full">Just one moment...</h1>
      </div>
  )
}

function RecipeCard({batch} : {batch: Batch}) {
  return (
      <div className="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 lg:w-full">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{batch.name}</h1>
          <h2 className="mb-2 text-l font-bold tracking-tight text-gray-600 dark:text-white">{batch.style}</h2>
          <h2 className="mb-2 text-s tracking-tight text-gray-600 dark:text-white">Batch #{batch.batchNumber}</h2>
      </div>
  )
}

