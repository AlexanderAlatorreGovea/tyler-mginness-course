import React, { Component, ComponentType } from "react";

export default class Comp extends Component {
  render() {
    return <div></div>;
  }
}

interface ChildrenProps {
  Comp: ComponentType;
}

export function RenderComponent({ Comp }: ChildrenProps) {
  return (
    <div>
      <Comp />
      <button></button>
    </div>
  );
}
