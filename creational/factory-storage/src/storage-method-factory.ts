import StorageType from "../enums/storage-type";
import IStorageMethod from "./storage-method.interface";
import AwsStorage from "./types/AwsStorage";
import PayPal from "./types/PayPal";
import Visa from "./types/Visa";

export default class StorageMethodFactory {
    public static createStorageType(type: StorageType): IStorageMethod {
        if (type === StorageType.Aws) {
            return new AwsStorage();
        }

        if (type === StorageType.PayPal) {
            return new PayPal();
        }

        throw new Error("Invalid payment method type.");
    }
}