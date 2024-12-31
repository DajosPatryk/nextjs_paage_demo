"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";

export default function PasswordDialog(
    {
        isOpen,
        onSubmitAction
    }: {
        isOpen: boolean
        onSubmitAction: (password: string) => void
}) {
    const [password, setPassword] = useState<string>('New Task')
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(isOpen)

    function handleSubmit() {
        onSubmitAction(password)
        setIsDialogOpen(false)
    }

    return (
        <Dialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
        >
            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle>Paage Is Locked</DialogTitle>
                    <DialogDescription>
                        <span className={"text-xs font-geist-mono text-util-600"}>
                            This Paage is locked away from watchful eyes, unlock with a password provided by the creator...
                        </span>
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-2 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Password
                        </Label>
                        <Input
                            className="col-span-3"
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        className={"rounded text-util-50 bg-util-950 hover:bg-util-600 transition ease-out duration-300"}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Unlock
                    </Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}