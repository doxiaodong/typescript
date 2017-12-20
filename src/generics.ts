interface IResponse {
  json(): Promise<any>
  json<T>(): Promise<T>
}

function getUsername(): IResponse {
  return {} as IResponse
}
const response: IResponse = getUsername();

response.json()
.then((data) => {

})
response.json<{username: string}>()
.then((data) => {

})

// more detail see: https://www.typescriptlang.org/docs/handbook/generics.html
