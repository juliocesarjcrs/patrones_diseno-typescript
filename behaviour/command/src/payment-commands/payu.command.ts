import { ICommand } from "../command.interface";
import { CreditCardDto } from "./dto/credit-card.dto";

export class PayUCommand implements ICommand {
    public readonly providerName: string = 'PayU';

    constructor(private readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} has been triggered ..`);
        // your code goes here ..
    }
}