import { CSSProperties, ReactNode, FC } from "react";
//ReactNode contains ReactElement, string, number, null, and undefined
interface PropsChildren {
  children: ReactNode;
}

const Layout = ({ children }: PropsChildren) => {
  return <div>{children}</div>;
};


/* CSS */
interface CSSProps {
  style: CSSProperties;
}
export const App: FC<CSSProps> = ({ style }) => {
  return (
    <div style={style}>
      <Layout>hello</Layout>;
    </div>
  );
};

<App style={{ background: "red", opacity: "1" }} />;
