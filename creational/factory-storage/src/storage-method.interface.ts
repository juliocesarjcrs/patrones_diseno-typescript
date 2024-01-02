export default interface IStorageMethod {
    comission:number;
    uploadFile(file: any): Promise<string> ;

    readFile(fileName: string): string ;
}