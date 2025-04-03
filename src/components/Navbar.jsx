import React from 'react'


function Navigation () {

  return (
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
  )

}

function SearchForm () {
  return (
    <form class="d-flex">
       <input class="form-control me-2"
              type="search"
              placeholder="Search" 
              aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  )
}

function DropDown() {
  return(
    <ul class='navbar-nav mb-2 mb-lg-0'>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">profile</a></li>
          </ul>
        </li>
        </ul>

  )
}






export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Smart-Shot</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <Navigation/>
      <SearchForm/>
      <DropDown/>
    </div>  
  </div>
</nav>
  
  )
}
