import React, { SetStateAction, useState, Dispatch } from "react";

const HooksTS = ({
  value,
  setValue,
}: {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}) => {
  //const [value, setValue] = useState<number>(5);
  return <button onClick={() => setValue(value + 1)}>Count: {value}</button>;
};

export default HooksTS;
