const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>Hello World</h1>);

//JSX

// const JSXElement = <h1 name='title'>Hello React</h1>;

// console.log(JSXElement);

// root.render(JSXElement);


const Header = (props) => {
  console.log(props);
  const {region, children} =props;
  console.log("region",region);
  console.log("children", children);

  return <h1>Header Component</h1>;
};
const HeaderElement = <Header />;
root.render(<Header region="mandalay">hello</Header>);

