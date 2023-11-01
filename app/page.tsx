import HomePageCard from './HomePageCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto">
          Hoboken, NJ
        </p>
        <div className="fixed bottom-0 left-0 pb-6 pt-8 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Established 2018
        </div>
      </div>

      <div className="relative flex place-items-center">
        <h1 className={`mb-3 text-4xl font-semibold`}>No Geeks Brewing</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <HomePageCard title={'Up Next'} subtitle={'Get a preview of upcoming brews.'} slug={'planning'}></HomePageCard>
          <HomePageCard title={'Fermenting'} subtitle={'Look at what we\'ve got sitting in our tanks.'} slug={'conditioning'}></HomePageCard>
          <HomePageCard title={'On Tap'} subtitle={'Learn more about what we\'re currenly pouring.'} slug={'completed'}></HomePageCard>
          <HomePageCard title={'Archives'} subtitle={'Explore gone but not forgotten recipes of the past.'} slug={'archived'}></HomePageCard>
      </div>
    </main>
  )
}
