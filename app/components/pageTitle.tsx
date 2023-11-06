import Link from "next/link";

export default function PageTitle({title} : {title: string}) {
    return (
        <>
            <div>{title}</div>
        </>
    )
}
