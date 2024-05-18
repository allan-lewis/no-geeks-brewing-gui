import HomePage from "./components/homePage";
import PageLayout from "./components/pageLayout";

export default function Home() {
  return (
    <PageLayout title='No Geeks Brewing' mainComponent={<HomePage></HomePage>}>
    </PageLayout>
  )
}
