export interface IRootState {
    chefs :Ichefs,
    restaurants :Irestaurants,
    dishes :Idishes,
    counter: Icounter
}

export interface Icounter {
    value: any;
}

export interface IcounterValue {
    value: any;
}

export interface Irestaurants {
    value: IrestaurantsValue[]
}

export interface IrestaurantsValue {
    id?:string,
    img?:string,
    alt?:string,
    name?: string,
    chef?: string,
    rating?: string,
    openHour?: string,
    closeHour?: string,
    address?:string,
    dishes?: number[],
    isPopular?: boolean,
    isNew?: boolean,
    isOpen?:string,
    map?: boolean,
}

export interface Ichefs {
    value: IchefsValue[]
}

export interface IchefsValue {
    firstName: any
    id?:string,
    name?: string,
    info?: string,
    portrait?: string,
    restaurants?: string[],
    isChefOfTheWeek?: boolean,
    isNew?: boolean,
    mostViewed?:boolean,
}

export interface Idishes {
    value: IdishesValue[],
    valueRestDishes: IdishesValue[],
    valueHomeRestDishes:IdishesValue[] 
}

export interface IdishesValue {
    id?:string,
    img?: string,
    name?: string,
    restaurant?: string,
    ingredients?: string,
    isSpicy?: string,
    isVegitarian?: string,
    isVegan?: string,
    isBreakfast: boolean,
    isLunch: boolean,
    isDinner: boolean,
    sideDishes: string[]
    changes: string[]
    price?: string,
    optionalSides?: string[],
    optionalChanges?: string[],
    isPopular?: boolean
    onClick?:  React.MouseEventHandler<HTMLButtonElement> 
}


export interface Iprops {
    class?: string,
    id?:string,
    src?: string,
    alt?:string,
    name?:string,
    ingredients?:string,
    price?:string,
    sideDishes?: string[],
    changes?: string[],
    onClick?:  React.MouseEventHandler<HTMLButtonElement> 
}

