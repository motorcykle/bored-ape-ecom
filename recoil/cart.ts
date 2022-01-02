import { Ape } from "@prisma/client";
import { atom } from "recoil";


interface atomType {
    key: string;
    default: {
        quantity: number;
        ape: Ape
    }[];
}

const atomItem: atomType = {
    key: 'cartState',
    default: []
}

export const cartState = atom(atomItem);