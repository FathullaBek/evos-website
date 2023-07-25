import styled from "styled-components";

export const StyledNavbar = styled.div`
   background-color: white;
   height: 100px;
   display: flex;
   justify-content:space-between;
    align-items:center;
  .logo {
    background-color: #309b42;
    padding: 3px 10px;
    width: fit-content;
    color: white;
    font-weight: 700;
    font-size:40px;
    height: fit-content;
  }
  .logo-and-nav{
    display: flex;
    align-items:center;
  }
  ul {
    text-transform: capitalize;
    list-style: none;
    display: flex;
    li {
      margin-right: 1.2rem;
      &.active {
        &::after {
          position: absolute;
          bottom: 0;
          height: 3px;
          background-color: green;
        }
      }
    }
  }
   .nav-ul{
    margin-left: 4rem;
  }
  .nav-ul li{
    font-size:1rem;
  }
  .active{
    color: green;
    border-bottom: 3px solid green; 
    padding-bottom:4px;
  }
  .nav-ul li:hover{
    color: green;
    border-bottom: 3px solid green; 
    padding-bottom:4px;
    cursor:pointer;
  }
  .actions{
    display: flex;
    gap:1rem;
  }
  .qr{
    font-size: 18px;
    background: #309b42;
    padding: 10px 20px;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    letter-spacing: 1px;
  }

  .basket{
    font-size: 18px;
    background: #f6f8f9;
    padding: 10px 20px;
    color: black;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    align-items:center;
    letter-spacing: 1px;
  }
  .basket ion-icon{
    position: relative;
    bottom:2px;
    right: 2px;
    font-size:25px;
  }
  .language{
    font-size: 18px;
    background: #f6f8f9;
    padding: 10px 20px;
    color: black;
    border: none;
    font-weight: 600;
    border-radius: 5px;
  }
  .profile{
    font-size: 18px;
    background: #f6f8f9;
    padding: 10px 20px;
    color: black;
    border: none;
    font-weight: bold;
    border-radius: 5px;
  }
 
  .sidebar-box{
    width: 30vh;
    height: 100vh;
    border:1px solid red;
    position: relative;
  }













`