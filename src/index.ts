

// Check if object is empty
export const isObject = (obj: any) =>{
    let empty = (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
    return empty;
}

// Check if object is empty
export const isArray = (element: any) => {
    return Array.isArray(element);
}

// Check if is a Number
export const isNumber = (element: any) => {
    return !isNaN(parseFloat(element)) && isFinite(element);
}

// Check if is a Integer
export const isInteger = (element: any) => {
    return element === parseInt(element, 10);
}

// Check if is a even number
export const isEven = (element: any) => {
    return element % 2 == 0;
}

export const isEquals = (element1: any, element2: any) => {
    return element1 === element2;
}

// Check if is equals to
export const sortASC = (element: any) => {
    return element.sort((a: any,b: any) => a - b);
}

// Sort array asc
export const sortDESC = (element: any) => {
    return element.sort((a: any,b: any) => b - a);
}

// Sort array desc
export const toObject = (element: any) =>{
    return element.reduce((obj: any, item: any) => (obj[item.key] = item.value, obj) ,{});
}

// Get last elem of array
export const last = (element: any) =>{
    return element[element.length-1];
}

// Get first elem of a rray
export const first = (element: any) =>{
    return element[0] 
}

// Replace the special character
export const rgx = (element: any) => {
    const rgx = /[^a-zA-Z0-9-. ]/g
    return element.replace(rgx,"");
}