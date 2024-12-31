"use client"

import {EditorContent, useEditor} from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {debounce} from "@/lib/utils"
import {Paage} from "@/app/api/documents/database"
import {useMemo} from "react"

export default function DocumentEditor({ doc }: { doc: Paage }) {
    const debouncedUpdate = useMemo(
        () =>
            debounce(async (id: string, content: string) => {
                await fetch(`/api/documents/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content }),
                })

                console.log(`Updated to: ${content}`)
            }, 600),
        []
    )

    const editor = useEditor({
        extensions: [StarterKit],
        content: doc.content,
        onUpdate(event) {
            const content = event.editor.view.dom.innerHTML

            debouncedUpdate(doc.id, content)
        },
    })

    return (
        <EditorContent
            className={"min-h-screen"}
            editor={editor}
        />
    )
}