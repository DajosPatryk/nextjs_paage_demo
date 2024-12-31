'use server'

import DocumentEditor from "@/components/documentEditor"

export default async function Page({ params }: { params: { id: string } }) {
    const response = await fetch(`http://localhost:3000/api/documents/${params.id}`, {
        method: "GET",
    })

    if (!response.ok) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-xs font-geist-mono text-util-600">
                    404 | Paage not found
                </h1>
            </div>
        )
    }

    const doc = await response.json()

    return (
        <div className={"page-pos my-32"}>
            <h2 className={"text-xs font-geist-mono text-util-600"}>You're editing...</h2>
            <h1 className={"text-2xl font-bold mb-6"}>Paage {params.id}</h1>

            <DocumentEditor doc={doc}/>
        </div>
    )
}
