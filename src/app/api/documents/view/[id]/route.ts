import { NextRequest, NextResponse } from "next/server"
import {database, Paage} from "@/app/api/documents/database"

export interface ViewDocumentResponse {
    requiresPassword: boolean
    doc: Paage | null
}

async function getDocument(id: string): Promise<Paage | null> {
    const document = database.find((doc) => doc.id === id)

    return document || null
}

export async function PATCH(
    req: NextRequest,
    context: {
        params: { id: string } }
) {
    const { id }   = await context.params;
    const document = await getDocument(id)

    if (!document) return NextResponse.json({ error: "Document not found" }, { status: 404 })

    // Authorizing with password if necessary
    let password: string | undefined;
    try {
        const body = await req.json()
        password   = body?.password
    } catch {}

    // TODO: Here the doc password would be encrypted, I then would compare the password with bcrypt
    const authorized = document.password ? document.password === password : true

    return NextResponse.json(
        {
            requiresPassword: !!document.password,
            doc: authorized ? document : null,
        },
        { status: 200 }
    )
}
