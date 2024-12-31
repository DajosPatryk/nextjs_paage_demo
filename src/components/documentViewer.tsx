"use client"

import {Paage} from "@/app/api/documents/database"
import {useLocalStorage} from "usehooks-ts"
import StarterKit from "@tiptap/starter-kit"
import {Editor, EditorContent} from "@tiptap/react"
import PasswordDialog from "@/components/passwordDialog";
import {ViewDocumentResponse} from "@/app/api/documents/view/[id]/route";
import {useState} from "react";

export default function DocumentViewer(params: { id: string, docViewResponse: ViewDocumentResponse }) {
    // TODO: If Paage has already been unlocked and is present in local storage, no need to unlock again.

    const [doc, setDoc] = useLocalStorage<Paage | null>(`paage-${params.id}`, params.docViewResponse.doc)
    const [isLocked, setIsLocked] = useState<boolean>(params.docViewResponse.requiresPassword && !doc)

    async function attemptUnlock(password: string) {
        console.log(encodeURIComponent(
            password
        ))

        const unlockResponse = await fetch(`http://localhost:3000/api/documents/view/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                password,
            }),
        })

        if (!unlockResponse.ok) {
            console.error("Failed to unlock document.")
            return
        }

        const data = await unlockResponse.json()

        if (data.doc) {
            console.log("Document unlocked:", data.doc)
            setDoc(data.doc)
            setIsLocked(false)
        }
        else {
            console.log("Incorrect password!")
        }
    }

    return (
        <>
            {isLocked && <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0, 0, 0, 0.0)",
                    backdropFilter: "blur(8px)",
                    zIndex: 10,
                }}
            />}

            <PasswordDialog
                isOpen={isLocked}
                onSubmitAction={(password) => attemptUnlock(password)}
            />

            <EditorContent
                className={"min-h-screen"}
                editor={new Editor({
                    extensions: [StarterKit],
                    content: doc?.content ?? "It's so empty here 👀",
                    editable: false
                })}
            />
        </>
    )
}