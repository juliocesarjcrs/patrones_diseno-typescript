import IStorageMethod from "../storage-method.interface";

export default class PayPal implements IStorageMethod {
    get comission(): number {
        return 0.06;
    }
}