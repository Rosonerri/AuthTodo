import { Router } from "express";
import { createUser, deleteOneUser, viewOneUser, viewUsers } from "../Controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/view-all-user").get(viewUsers)
router.route("/view-one-user/:userId").get(viewOneUser)
router.route("/delete-user/:userId").delete(deleteOneUser)

export default router;