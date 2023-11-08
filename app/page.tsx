import HomeHeader from './components/homeHeader'
import HomeLinks from './components/homePageLinks'
import HomeTitle from './components/homeTitle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HomeHeader></HomeHeader>

        <HomeTitle></HomeTitle>

        <HomeLinks></HomeLinks>
    </main>
  )
}
