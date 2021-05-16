export interface OrderCompleteModel {
    modelId: string,
    variantIndex: number,
    paintIndex: number,
    wheelIndex: number,
    autopilot: boolean
}

export interface OrderCompleteProps {
    orderCompleteModel: OrderCompleteModel
}