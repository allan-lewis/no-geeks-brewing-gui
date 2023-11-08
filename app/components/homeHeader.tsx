import ContactInfo from "./contactInfo"
import Established from "./established"

export default function HomeHeader() {
    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
            <Established></Established>
            <ContactInfo></ContactInfo>
        </div>
    )
}
