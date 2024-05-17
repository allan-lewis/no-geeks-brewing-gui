export default function PageLayout({ title }: { title: string }) {
    return (
        <div className="flex flex-col h-screen">
            <PageHeader title={title}></PageHeader>
            <PageMain></PageMain>
            <PageFooter></PageFooter>
        </div>
    )};

function PageHeader({ title }: { title: string }) {
    return (
        <header className="py-4 bg-indigo-600 text-white text-center">
        {title}
      </header>
    )
}

function PageMain() {
    return (
      <main className="flex-1 overflow-y-auto p-5">

      </main>
    )
}

function PageFooter() {
    return (
      <footer className="py-4 bg-indigo-500 text-center text-white">
      <a className="hover:underline" href="mailto:allan@nogeeksbrewing.com">allan@nogeeksbrewing.com</a>
    </footer>
    )
}