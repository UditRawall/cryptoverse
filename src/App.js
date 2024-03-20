import Layout from "antd/es/layout/layout";
import "./App.css";
import { Navbar  ,Homepage, Exchanges, Cryptocurrencies, Cryptodetails,News } from "./component";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Typography from "antd/es/typography/Typography";


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            {/* <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchange">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/details">
                <Cryptodetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route> */}

            {/* </Switch> */}

            {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Homepage />}/>
          <Route path="/exchange" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<Cryptodetails />} />
          <Route path="/news" element={<News />} />
        
      </Routes>
    {/* </BrowserRouter> */}
      
          </div>
        </Layout>
      

      <div className="footer">
        <Typography.Title  level={5} style={{color:"white", textAlign:"center"}}>
          Cryptoverse <br/>all rights reserved<br/>
          <Link to='/'>Home </Link>
          <Link to='/exchange'>Exchange </Link>
          <Link to='/news'>News</Link>
        </Typography.Title>
      </div>
      </div>
    </div>
  );
}

export default App;
