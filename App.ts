import express, { Request, Response } from "express"
import Provinsi from "./src/Provinsi"
import ProvinsiIt from "./interface/Provinsi"
const PORT = 5000
const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response) : Response => {
    return res.status(200).json({message: "Failed"})
})

app.get("/provinsies", (req: Request, res: Response): Response => {
    return res.status(200).json({data: Provinsi})
})

app.get("/provinsi/:id", (req: Request, res: Response): Response => {
    // const id = parseInt(req.params.id)
    const id = Number(req.params.id)
    const data = Provinsi.find((data) => data.id === id)
    return res.status(200).json(data)
})
app.post("/provinsi", (req: Request, res: Response): Response => {
    const data: ProvinsiIt = req.body
    Provinsi.push(data)
    return res.status(200).json({data: Provinsi})
})
app.delete("/provinsi/:id", (req: Request, res: Response): Response => {
    const { id } = req.params
    const data: ProvinsiIt[] = Provinsi.filter(provinsi => provinsi.id !== parseInt(id))
    return res.status(200).json(data)
})

async function start(): Promise<void> {
    try {
        app.listen(PORT, () => console.log("Server is running"))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

void start()