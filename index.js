const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(<h1>Hello World</h1>);

// // const helloWorld = <h1>Hello World</h1>;
// function HelloWorld() {
//   return <h1>Hello World</h1>;
// }

// function Hero() {
//   return <h1 classNameNameName="Header">Hero Section</h1>;
// }

// function Footer() {
//   return <h2>Footer Section</h2>;
// }

// function Page(){
//     return (
//         <div>
//             <Hero/>
//             <Footer/>
//         </div>
//     )
// }
// console.log(Hero());
// // console.log(helloWorld);
// root.render(
//   <div>
//     <HelloWorld />
//     <Hero/>
//     <Footer/>
//   </div>
// );

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </div>
    </nav>
  );
}

function Hero() {
  return <h1 classNameNameName="Header">Hero Section</h1>;
}

function Footer() {
  return <h2>Footer Section</h2>;
}

function Page(){
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Footer/>
        </div>
    )
}
root.render(<Page/>);
