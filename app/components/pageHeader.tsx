import ContactInfo from "./contactInfo"
import HomeLink from "./homeLink"

export default function PageHeader() {
    return (
        <div className="bg-orange-400 z-10 w-full justify-between text-sm lg:flex">
            <HomeLink></HomeLink>
            <ContactInfo></ContactInfo>
        </div>
    )
}
