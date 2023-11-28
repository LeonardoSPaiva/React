import products from './data.jsx';

export const gFetch = () => {
    return new Promise((res, rej) => {
        let condition = true
        if (condition) {
            setTimeout(() => {
                res(products)
            }, 700)
        } else {
            rej('Error al Cargar Datos...')
        }
    })
};


export const gFetchId = (itemId) => {
    return new Promise((res, rej) => {

        const item = products.find((item) => item.id === itemId)

        if (item) {
            setTimeout(() => {
                res(item)
            }, 700)
        } else {
            rej('Error al Cargar Datos...')
        }
    })
};

