import { NextRequest, NextResponse } from "next/server"
import {database, Paage} from "@/app/api/documents/database"

async function getDocument(id: string): Promise<Paage | null> {
    const document = database.find((doc) => doc.id === id)

    return document || null
}

async function updateDocument(id: string, content: string): Promise<Paage | null> {
    const index = database.findIndex((doc) => doc.id === id)

    if (index !== -1) {
        database[index].content = content

        return database[index]
    }

    return null
}

export async function GET(
    req: NextRequest,
    context: {
        params: {
            id: string
        }
    }
) {
    const params   = await context.params
    const document = await getDocument(params.id)

    if (document) return NextResponse.json(document, { status: 200 })
    else return NextResponse.json({ error: "Document not found" }, { status: 404 })
}

export async function PUT(
    req: NextRequest,
    context: {
        params: {
            id: string
        }
    }
) {
    const params      = await context.params
    const { id }      = params
    const body        = await req.json()
    const { content } = body

    if (typeof content !== "string") {
        return NextResponse.json({ error: "Content must be a string" }, { status: 400 })
    }

    const updatedDocument = await updateDocument(id, content)

    if (updatedDocument) return NextResponse.json(updatedDocument, { status: 200 })
    else return NextResponse.json({ error: "Document not found" }, { status: 404 })
}
