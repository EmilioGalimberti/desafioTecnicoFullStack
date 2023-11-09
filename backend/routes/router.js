import { Router } from "express";
import peopleService from "../service/peopleService.js"

const router = Router();

router.get("/people" , peopleService.getPeople )
//router.get("/films" , )
//router.get("/starships" , )
//router.get("/planets" , )

export default(
    router
)