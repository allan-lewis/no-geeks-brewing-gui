import ContactInfo from "./contactInfo"
import Established from "./established"

export default function HomeHeader() {
    return (
        <div className="bg-violet-400 fixed left-0 top-0  pb-4 pt-4 z-10 max-w-5xl w-full items-center justify-between text-sm lg:static lg:flex">
            <Established></Established>
            <ContactInfo></ContactInfo>
        </div>
    )
}
