import { NextApiRequest, NextApiResponse } from "next";
import WAValidator from "@swyftx/api-crypto-address-validator";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const valid = WAValidator.validate(req.query.key, "BTC");
    res.status(200).json({ valid: valid });
}
