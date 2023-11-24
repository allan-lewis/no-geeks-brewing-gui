"use client";

import { useGetBatchesQuery } from "@/redux/services/ngbApi";
import { useAppDispatch } from "@/redux/hooks";
import PageTitle from "@/app/components/pageTitle";
import RecipeCard from "@/app/components/recipeCard";
import PageHeader from "@/app/components/pageHeader";
import LoadingPlaceholder from "@/app/components/loadingPlaceholder";
import ErrorPlaceholder from "@/app/components/errorPlaceholder";

export default function Page({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();

  const status = params.slug;
  const { isLoading, isFetching, data, error } = useGetBatchesQuery({status});
  const showLoading = false;
  const showError = false;

  return (
    <main className="bg-emerald-400 flex min-h-screen flex-col items-center p-8">
      <PageHeader title={params.slug}></PageHeader>
      
      {error || showError ? (
        <ErrorPlaceholder></ErrorPlaceholder>
      ) : showLoading || isLoading || isFetching ? (
        <LoadingPlaceholder></LoadingPlaceholder>
      ) : data ? (
        <div className="bg-pink-400 grid lg:w-full lg:mb-0 lg:grid-cols-3 flex gap-4">
          {data.map((batch) => (
            <RecipeCard key={batch.id} batch={batch}></RecipeCard>
          ))}
        </div>
      ) : null}
    </main>
  );
}
