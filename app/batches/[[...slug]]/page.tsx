"use client";

import { useGetBatchesQuery } from "@/redux/services/ngbApi";
import { useAppDispatch } from "@/redux/hooks";
import HomeLink from "@/app/components/homeLink";
import PageTitle from "@/app/components/pageTitle";
import RecipeCard from "@/app/components/recipeCard";

export default function Page({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();

  const status = params.slug;
  const { isLoading, isFetching, data, error } = useGetBatchesQuery({status});

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <PageTitle title={params.slug}></PageTitle>
      <HomeLink></HomeLink>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 flex gap-4">
          {data.map((batch) => (
            <RecipeCard key={batch.id} batch={batch}></RecipeCard>
          ))}
        </div>
      ) : null}
    </main>
  );
}
