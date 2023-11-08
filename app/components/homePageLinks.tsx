import Link from "next/link";

export function HomeLink({title, subtitle, slug} : {title: string, subtitle: string, slug: string}) {
    return (
        <Link href={
          '/batches/' + slug
        }  
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {subtitle}
          </p>
        </Link>
    )
}

export default function HomeLinks() {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <HomeLink title={'Up Next'} subtitle={'Get a preview of upcoming brews.'} slug={'planning'}></HomeLink>
      <HomeLink title={'Fermenting'} subtitle={'Look at what we\'ve got sitting in our tanks.'} slug={'conditioning'}></HomeLink>
      <HomeLink title={'On Tap'} subtitle={'Learn more about what we\'re currenly pouring.'} slug={'completed'}></HomeLink>
      <HomeLink title={'Archives'} subtitle={'Explore gone but not forgotten recipes of the past.'} slug={'archived'}></HomeLink>
    </div>
  )
}