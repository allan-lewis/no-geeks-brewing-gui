"use client";

import { useGetBatchesQuery } from "@/redux/services/ngbApi";
import { useAppDispatch } from "@/redux/hooks";
import RecipeCard from "../../components/recipeCard";

export default function Page({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();

  const status = params.slug;
  const { isLoading, isFetching, data, error } = useGetBatchesQuery({status});

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((batch) => (
            <>
              <RecipeCard batch={batch}></RecipeCard>
            </>
          ))}
        </div>
      ) : null}
    </main>
  );
}
