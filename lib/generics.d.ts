interface IResponse {
    json(): Promise<any>;
    json<T>(): Promise<T>;
}
declare function getUsername(): IResponse;
declare const response: IResponse;
