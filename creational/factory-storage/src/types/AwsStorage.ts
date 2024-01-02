import IStorageMethod from "../storage-method.interface";

export default class AwsStorage implements IStorageMethod {
    get comission(): number {
        return 0.04;
    }
}