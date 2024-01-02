import IStorageMethod from "../storage-method.interface";

export default class Visa implements IStorageMethod {
    get comission(): number {
        return 0.05;
    }
}