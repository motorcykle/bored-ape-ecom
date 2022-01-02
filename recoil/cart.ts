import { Ape } from "@prisma/client";
import { atom } from "recoil";

export interface product {
    quantity: number;
    ape: Ape
}

interface atomType {
    key: string;
    default: product[];
}

const atomItem: atomType = {
    key: 'cartState',
    default: []
}

export const cartState = atom(atomItem);