import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <HomeLink title={'Up Next'} subtitle={'Get a preview of upcoming brews.'} slug={'planning'}></HomeLink>
            <HomeLink title={'Fermenting'} subtitle={'Look at what we\'ve got sitting in our tanks.'} slug={'conditioning'}></HomeLink>
            <HomeLink title={'On Tap'} subtitle={'Learn more about what we\'re currenly pouring.'} slug={'completed'}></HomeLink>
            <HomeLink title={'Archives'} subtitle={'Explore gone but not forgotten recipes of the past.'} slug={'archived'}></HomeLink>
        </div>
    )
}

function HomeLink({ title, subtitle, slug }: { title: string, subtitle: string, slug: string }) {
    return (
        <div>
            <Link href={'/batches/' + slug}>{title}</Link>
        </div>
    )
}
