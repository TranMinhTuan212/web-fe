import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faAtom, faKey, faList, faPenToSquare, faUserPlus } from "@fortawesome/free-solid-svg-icons";


const { PRODUCT_STATUS } = require("~/enum");


function renderStatus(status){
    switch (status) {
        case PRODUCT_STATUS.INTERRUPTIVE:
            return 'Ngưng bán'
        case PRODUCT_STATUS.ON_SALE:
            return 'Đang bán'
        case PRODUCT_STATUS.OUT_OF_STOCK:
            return 'Hết hàng'
        case PRODUCT_STATUS.WAITING_APPROVE:
            return 'Phê duyệt'
    
        default:
            break;
    }
}

function checkExistsInArray(arr, obj){
    for(let i=0; i<arr.length; i++){
        if(arr[i].id === obj.id){
            return true
        }
    }
    return false
}

function mapStringToIcon(string){
    switch(string){
        case 'faAtom':
            return faAtom
        case 'faShopify':
            return faShopify
        case 'faPenToSquare':
            return faPenToSquare
        case 'faKey':
            return faKey
        case 'faList':
            return faList
        case 'faUserPlus':
            return faUserPlus
        default :
        return ''
    }
}

function checkDefferenceProductOfSupplier(products){
    let flag = false
    for(let i=0; i<products.length - 1; i++){
        for(let j=1; j<products.length; j++){
            if(products[i].supplier.id === products[j].supplier.id){
                flag = true
            }
        }
    }
    return flag
}

export { renderStatus, checkExistsInArray, mapStringToIcon, checkDefferenceProductOfSupplier }