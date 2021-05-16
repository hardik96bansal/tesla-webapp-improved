import { Acceleration } from "../../widgets/AllItemsCard/AllItemsCardModel";

export interface CarSpecification {
    model: string;
    displayName: string;
    variants: Variants[];
}

export interface Variants {
    variant: string;
    variantName: string;
    battery: string;
    range: number;
    wheels: number[];
    cargo: string;
    weight: number;
    acceleration: Acceleration;
    topSpeed: number;
    drive: string;
    superchargingMax: string;
    seating: number;
    onboardChargerMax: string;
    price: number;
    powertrain: string;
    peakPower: string;
    dragCoefficient: string;
}