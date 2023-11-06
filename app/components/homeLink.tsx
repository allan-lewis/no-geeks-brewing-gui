import Link from "next/link";

export default function HomeLink() {
    return (
        <Link href={
            '/'
          }  
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                &lt;-
              </span>
              {' '}Home
            </h2>
          </Link>
    )
}
