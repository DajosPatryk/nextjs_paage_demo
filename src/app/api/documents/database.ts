export interface Paage {
    id: string
    content: string
    password?: string
}

export let database: Paage[] = [
    {
        id: "0",
        content: "<h1>Hello World!</h1><br/><p>Nice to see you!</p>"
    },
    {
        id: "1",
        content: "<h1>You see, this was supposed to be locked away from the world :(</h1>",
        password: "123"
    }
]