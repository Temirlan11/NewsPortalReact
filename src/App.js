import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './bootstrap/css/bootstrap.min.css';

function Header(params){
  return(
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light " style={{"background-color":"#42618A"}}>
         <div className="container-fluid">
            <a className="navbar-brand" style={{"color":"white"}} href="#">HABAR.COM</a>  
            <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} style={{"color":"white"}} to = '/'>All News</Link>
                </li>
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} to = '/sport'>Sport</Link>
                </li>
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} to = '/politics'>Politics</Link>
                </li>
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} to = '/techology'>Technology</Link>
                </li>
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} to = '/business'>Business</Link>
                </li>
                <li className="nav-item">
                  {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                  <Link className="nav-link active" style={{"color":"white"}} to = '/signin'>Sign In</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            
            </div>
         </div>
       </nav>
       <Switch>
          <Route path='/sport' exact>
            <Sport/>
          </Route>
          <Route path='/politics' exact>
            <Politics/>
          </Route>
          <Route path='/techology' exact>
            <Technology/>
          </Route>
          <Route path='/business' exact>
            <Business/>
          </Route>
          <Route path='/signin' exact>
            <SignIn/>
          </Route>
          <Route path='/' exact>
            <Home/>
          </Route>
        </Switch>
    </Router>
  )
}

function Slider(params){
  return(
    <div className = "container mt-4">
      <div className = "row">
        <div className = "col-10 offset-1">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.optometrystudents.com/wp-content/uploads/2017/05/Capitol_Building_AdobeStock_7138137-e1599090111461.jpg" className="d-block w-100" alt="..."></img>
                <div class="carousel-caption d-none d-md-block" >
                  <h5 style={{"background-color":"#42618A"}}>Trump impeachment: Supporters rioted 'of their own accord'</h5>
                  <p style={{"background-color":"#42618A"}}>Senate leaders reach agreement on impeachment trial rules</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."></img>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."></img>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card(props){
  return(
    <div class="card mb-3" style={{"max-width":"540px"}}>
      <div class="row g-0">
        <div class="col-md-6">
          <img src={props.img} style={{"width":"250px"}} alt="..."></img>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h6 class="card-title">{props.title}</h6>
            <p class="card-text">{props.text}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Cards(params){
  let cards = [
    {
    id:1, 
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrKw_UPVhOfsKrnl09lOsJULSYTKoN4UZ-Q&usqp=CAU', 
    title:"Card title 1", 
    text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
    id:2, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjcPktMzzAjXG2fYulzOr1uXvFK9yrjaPxA&usqp=CAU", 
    title:"Card title 2", 
    text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
    id:3, 
    img:"https://static.ngs.ru/news/2020/99/preview/d44c6e66cd7dcddae1c2c9db1eebbf860c4b14b5_1400_956.jpg", 
    title:"Card title 3", 
    text:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    }
  ]

  let news = cards.map(c=><Card img={c.img} title={c.title} text={c.text} />)

  return(
    <div>
      {news}
    </div>
  )
}

function Blog(props){
  return(
    <div class="card mb-3" style={{"max-width":"440px", "height":"185px", "background-color":"#F3F3FF"}}>
              <div class="row g-0">
                <div class="col-md-5">
                  <img src={props.img} style={{"width":"100px"}}  alt="..."></img>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h6 class="card-title">{props.fio}</h6>
                    <p class="card-text"><small>{props.aboutMe}</small></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
  )
}

function Blogs(props){
  let blogsArray = [
    {
      id:1, 
      img:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      fio:"Oyazbayev Temirlan", 
      aboutMe:"This is a wider card with supporting text below as a natural lead-in to additional content."},
    {
      id:2,
      img:"https://thumb.tildacdn.com/tild3933-3165-4064-b366-643730363961/-/resize/300x/-/format/webp/iconfinder_girl_fema.png",
      fio:"Nurpeissova Assem",
      aboutMe:"This is a wider card with supporting text below as a natural lead-in to additional content."
    },
    {
      id:3,
      img:"https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png",
      fio:"User Userov",
      aboutMe:"This is a wider card with supporting text below as a natural lead-in to additional content."
    }
  ]

  let newBlogs = blogsArray.map(b=><Blog img={b.img} fio={b.fio} aboutMe={b.aboutMe}/>)

  return(
    <div>
    {newBlogs}
  </div>
  )
}

function Home(params){
  return(
    <div>
      <Slider/>
      <div className = "container mt-3">
        <div className = "row offset-1">
          <div className = "col-7">
            <h5>All News</h5>
              <Cards/>
              <nav aria-label="Page navigation example" style={{"margin-right":"314px"}}>
                <ul class="pagination justify-content-end">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&#10096;</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a class="page-link" href="#">6</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">&#10097;</a>
                  </li>
                </ul>
              </nav>
          </div>
          <div className = "col-4">
            <h5>Blogs</h5>
              <Blogs/>
              <div class="card text-dark bg-info" style={{"max-width":"20rem", "height":"100px"}}>
                <div class="card-header" style={{"color":"white"}}><small>Subscribe to our blogs</small></div>
                <div class="card-body">
                  {/* <h5 class="card-title">Info card title</h5> */}
                  <p class="card-text" style={{"color":"white"}}>Follow the news on HABAR.COM</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Sport(params){
  return(
    <div>
      <Slider/>
        <div className = "container mt-3">
          <div className = "row">
            <div className = "col-12">
              <h1>THIS IS SPORT PAGE</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

function Politics(params){
  return(
    <div>
    <Slider/>
      <div className = "container mt-3">
        <div className = "row">
          <div className = "col-12">
            <h1>THIS IS POLITICS PAGE</h1>
          </div>
        </div>
      </div>
  </div>
  )
}

function Technology(params){
  return(
    <div>
      <Slider/>
        <div className = "container mt-3">
          <div className = "row">
            <div className = "col-12">
              <h1>THIS IS TECHNOLOGY PAGE</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

function Business(params){
  return(
    <div>
      <Slider/>
        <div className = "container mt-3">
          <div className = "row">
            <div className = "col-12">
              <h1>THIS IS BUSINESS PAGE</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

function SignIn(params){
  return(
    <div>
      <Slider/>
        <div className = "container mt-3">
          <div className = "row">
            <div className = "col-12">
              <h1>THIS IS SIGN IN PAGE</h1>
              <div className="col-4 offset-4 mt-2">
                <form>
                  <div className="list-group">
                    <div className="mb-3 col">
                      <div className="col-sm-13 mb-2">
                        <input type="email" className="form-control" placeholder="Email"></input>
                      </div>
                      <div className="col-sm-13">
                        <input type="password" className="form-control" placeholder="Password"></input>
                      </div>
                      <div class="mt-3 col">
                      <button className = "btn btn-primary">
                        SIGN IN
                      </button>
                        {/* <button className = "btn btn-primary" type="submit">SIGN IN</button>             */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
