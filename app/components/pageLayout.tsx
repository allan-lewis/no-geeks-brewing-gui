import { ReactNode } from "react"

const EMAIL = 'allan@nogeeksbrewing.com'

export default function PageLayout({ title, mainComponent }: { title: string, mainComponent: ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-600">
      <PageHeader title={title}></PageHeader>
      <PageMain childComponent={mainComponent}></PageMain>
      <PageFooter></PageFooter>
    </div>
  )
}

function PageHeader({ title }: { title: string }) {
  return (
    <header className="py-4 bg-indigo-600 text-white text-center">
      {title}
    </header>
  )
}

function PageMain({ childComponent }: { childComponent: ReactNode }) {
  return (
    <main className="flex-1 overflow-y-auto">
      {childComponent}
    </main>
  )
}

function PageFooter() {
  return (
    <footer className="py-4 bg-indigo-600 text-center text-white">
      <a className="hover:underline" href={'mailto:' + EMAIL}>{EMAIL}</a>
    </footer>
  )
}
