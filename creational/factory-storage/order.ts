import PaymentType from "./enums/storage-type";
import IStorageMethod from "./src/storage-method.interface";
import StorageMethodFactory from "./src/storage-method-factory";

export default class Order {
    public paymentType?: IStorageMethod;
    public commission: number = 0;

    constructor(
        private type: PaymentType,
        public amount: number) { }

    public create(): void {
        // set payment type
        this.paymentType = StorageMethodFactory.createStorageType(this.type);

        // calculate commission
        this.commission = this.paymentType.comission * this.amount;

        // ...
    }
}
let order1 = new Order(PaymentType.Visa, 100),
    order2 = new Order(PaymentType.Aws, 100)
    // order3 = new Order(PaymentType.PayPal, 100);

order1.create();
// order2.create();
// order3.create();