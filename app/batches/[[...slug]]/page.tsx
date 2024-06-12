import PageLayout from "@/app/components/pageLayout";
import BatchList from "@/app/components/batchList";

export default function BatchesPage({ params }: { params: { slug: string } }) {
  return (
    <PageLayout title={params.slug} mainComponent={<BatchList status={params.slug[0]}></BatchList>}></PageLayout>
  )
}
