export interface IMessage {
  title: string | undefined;
  subtitle: string | undefined;
}
export interface IError {
  error: {
    message: IMessage;
  };
}
