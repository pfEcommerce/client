

//funcion para traer todos las categorias
export function openCart() {
    return function (dispatch) {
        dispatch({
            type: 'CART_OPEN',
        });
    };
};

export function closeCart() {
    return function (dispatch) {
        dispatch({
            type: 'CART_CLOSE',
        });
    };
};

export function addCartProduct() {
    return function (dispatch) {
        dispatch({
            type: 'CART_ADD',
        });
    };
};

export function removeCartProduct() {
    return function (dispatch) {
        dispatch({
            type: 'CART_REMOVE',
        });
    };
};