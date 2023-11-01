"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { useGetBatchesQuery, GetBatchesResponse } from "@/redux/services/ngbApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

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
            <div
              key={batch.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${batch.id}?set=set2&size=180x180`}
                alt={batch.id}
                style={{ height: 180, width: 180 }}
              />
              <h3>{batch.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
