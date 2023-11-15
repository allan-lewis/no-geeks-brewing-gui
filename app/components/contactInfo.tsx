export default function ContactInfo() {
    return (
        // <div className="fixed bottom-0 left-0 pb-6 pt-8 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
        <div className="fixed pb-2 pt-2  bottom-0 left-0 flex flex-grow items-center w-full justify-center bg-blue-400 lg:relative lg:h-auto lg:w-auto lg:items-center">
            <div className="bg-yellow-400 flex items-center w-auto w-full">
                <a className="hover:underline" href="mailto:allan@nogeeksbrewing.com">allan@nogeeksbrewing.com</a>
            </div>
        </div>
    )
}
