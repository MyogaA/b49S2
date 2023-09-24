import { Request, Response } from "express";
import ProvinsiIt from "../interface/Provinsies";
import Provinsi from "../src/mocks/Provinsi";

export default new class TodoService {
  private provinsi: ProvinsiIt[]

  constructor() {
    this.provinsi = [ ...Provinsi ]
  }

  find(req: Request, res: Response) : Response {
    try {
      return res.status(200).json(this.provinsi)
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error"})
    }
  }

  findOne(req: Request, res: Response) : Response {
    try {
      const id = Number(req.params.id)
      const data = Provinsi.find((data) => data.id === id)

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({ message: "Something error while findOne"})
    }
  }

  create(req:Request, res:Response) : Response {
    try {
      const data: ProvinsiIt = req.body
      Provinsi.push(data)

      return res.status(200).json({ data: Provinsi})
    } catch (error) {
      return res.status(500).json({ message: "Something error while create todo" })
    }
  }

  update(req: Request, res: Response) : Response {
    try {
      const id: number = Number(req.params.id)
      const updateProvinsi: ProvinsiIt = req.body

      const index: number = this.provinsi.findIndex(provinsi => provinsi.id === id)
      
      if(index !== -1) {
        this.provinsi[index] = { ...this.provinsi[index], ...updateProvinsi }
        const data = this.provinsi[index]
        return res.status(200).json(data)
      }

      return res.status(404).json({ message: "ID not found"})
    } catch (error) {
      return res.status(500).json({ message: "Something error while update Provinsi" })
    }
  }

  delete(req: Request, res: Response) : Response {
    try {
      const { id } = req.params
      const data: ProvinsiIt[] = Provinsi.filter(provinsi => provinsi.id !== parseInt(id))

      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json({ message: "Something error while delete todo" })
    }
  }
}