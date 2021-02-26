const MyComponent = ({ highlighted, theme }) => (
  <div className={classNames("MyComponent", { highlighted }, theme)}>Hello</div>
);

const MyComponent = ({ highlighted, theme }) => (
  <div className={`MyComponent ${theme} ${highlighted ? "highlighted" : ""}`}>
    Hello
  </div>
);
