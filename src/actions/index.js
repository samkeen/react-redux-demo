export const increment = (amt=1) => {
    return {
        type: "INCREMENT",
        payload: amt
    };
};
export const decrement = (amt = 1) => {
    return {
        type: "DECREMENT",
        payload: amt
    };
};

export const sign_in = () => {
    return {
        type: "SIGN_IN"
    };
};
