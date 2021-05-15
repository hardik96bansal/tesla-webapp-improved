export interface AllItemsCardModel {
    model: string;
    displayName: string;
    range: number;
    acceleration: Acceleration;
    topSpeed: number;
    peakPower: number;
    img: string;
}

export interface Acceleration {
    speed: string;
    time: number;
}

export interface AllItemsCardProps {
    allItemsCardModel: AllItemsCardModel
}