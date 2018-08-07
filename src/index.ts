
export const isObject = (obj: any) =>{
    let empty = (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
    return empty;
}

export const isArray = (element: any) => {
    return Array.isArray(element);
}

export const isNumber = (element: any) => {
    return !isNaN(parseFloat(element)) && isFinite(element);
}

export const isInteger = (element: any) => {
    return element === parseInt(element, 10);
}

export const isEven = (element: any) => {
    return element % 2 == 0;
}

export const isEquals = (element1: any, element2: any) => {
    return element1 === element2;
}

export const sortASC = (element: any) => {
    return element.sort((a: any,b: any) => a - b);
}

export const sortDESC = (element: any) => {
    return element.sort((a: any,b: any) => b - a);
}

export const toObject = (element: any) =>{
    return element.reduce((obj: any, item: any) => (obj[item.key] = item.value, obj) ,{});
}

export const last = (element: any) =>{
    return element[element.length-1];
}

export const first = (element: any) =>{
    return element[0] 
}

export const rgxCharter = (element: any) => {
    const rgx = /[^a-zA-Z0-9-. ]/g
    return element.replace(rgx,"");
}