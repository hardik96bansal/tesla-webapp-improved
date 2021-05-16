import { Variants } from '../CarDetailsPage/CarDetailsModel'

export interface CarConfiguration {
    displayName: string;
    model: string;
    paints: Paints[];
    selfDriving: SelfDriving;
    variants: Variants[];
    wheels: Wheels[];
}

interface Paints {
    default: boolean;
    name: string;
    price: number;
    src: string;
}

interface SelfDriving {
    available: boolean;
    default: boolean;
    price: number;
}

interface Wheels {
    default: boolean;
    name: string;
    price: number;
    src: string;
}