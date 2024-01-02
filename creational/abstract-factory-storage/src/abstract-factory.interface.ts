import IConnector from "./factories/connector.interface";
import IPublisher from "./factories/publisher.interface";

export default interface IUploadFileAbstraxtFactory {
    getConnector(): IConnector;
    getPublisher(connector: IConnector): IPublisher;
}