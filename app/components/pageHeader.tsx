import ContactInfo from "./contactInfo"
import HomeLink from "./homeLink"
import PageTitle from "./pageTitle"

export default function PageHeader({ title }: { title: string }) {
    return (
        // <div className="bg-orange-400 z-10 w-full justify-between text-sm lg:flex">
        <div className="bg-gray-400 fixed left-0 top-0 pb-4 pt-4 z-10 w-full items-center justify-between text-sm lg:static lg:flex">
            <HomeLink></HomeLink>
            <PageTitle title={title}></PageTitle>
            <ContactInfo></ContactInfo>
        </div>
    )
}
