import React, { Component, ComponentType } from "react";

export default class Comp extends Component {
  render() {
    return <div></div>;
  }
}

export function RenderComponent({ Comp }: { Comp: ComponentType }) {
  return (
    <div>
      <Comp />
    </div>
  );
}
