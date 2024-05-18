"use client";

import { useGetBatchesQuery } from "@/redux/services/ngbApi";
import LoadingPlaceholder from "@/app/components/loadingPlaceholder";
import ErrorPlaceholder from "@/app/components/errorPlaceholder";
import PageLayout from "@/app/components/pageLayout";
import BatchList from "@/app/components/batchList";

export default function BatchesPage({ params }: { params: { slug: string } }) {
  const status = params.slug;
  const { isLoading, isFetching, data, error } = useGetBatchesQuery({status});
  const showLoading = false;
  const showError = false;

  const dataDiv = error || showError ? (
    <ErrorPlaceholder></ErrorPlaceholder>
  ) : showLoading || isLoading || isFetching ? (
    <LoadingPlaceholder></LoadingPlaceholder>
  ) : data ? (
    <BatchList batches={data}></BatchList>
  ) : null

  return (
    <PageLayout title={params.slug} mainComponent={dataDiv}></PageLayout>
  );
}
