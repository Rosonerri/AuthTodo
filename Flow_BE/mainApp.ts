console.clear()
import { Application, Request, Response } from "express";

export const mainApp = (app: Application) =>{
    try {
        app.get("", (req:Request, res:Response) =>{
            try {
                return res.status(200).json({
                    message: "Server Running Succesfully....."
                });
            } catch (error) {
                return res.status(404).json({
                    message: "Error"
                });
            }
        });
    } catch (error) {
        console.log(error)
    }
};