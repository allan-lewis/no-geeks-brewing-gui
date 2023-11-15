import Link from "next/link";

export default function PageTitle({ title }: { title: string }) {
    return (
        <div className="bg-indigo-400 w-full px-8 py-8 flex flex-row justify-center align-middle h-full ">
            <h1 className="mb-2 bg-red-400 text-3xl font-bold tracking-tight text-gray-900 dark:text-white h-full ">{title}</h1>
        </div>
    )
}
