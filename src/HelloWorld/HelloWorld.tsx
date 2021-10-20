import React, { ReactElement } from "react";

const HelloWorld = ({ message }: PropsMessage): ReactElement => {
  return <div>{message}</div>;
};

<HelloWorld message={"hello"} />;

interface PropsMessage {
  message: string;
}
export const Message: React.FC<PropsMessage> = ({ children, message }) => {
  return <div>Hello World {message} </div>;
};

export default HelloWorld;
