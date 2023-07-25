import { StyledNavbar } from "./Navbar.style"


const Navbar = () => {
    return ( 
    
    
    <StyledNavbar>
       <div className="container">
       <div className="logo-and-nav">
            <h1 className="logo">EVOS</h1>
        <ul className="nav-ul">
            <li className="active">main</li>
            <li>branches</li>
            <li>vacancies</li>
            <li>news</li>
            <li>about us</li>
            <li>contacts</li>
        </ul>
        </div>
        
        <div className="actions">
            <button className="qr">QR app</button>
            <button className="basket"><ion-icon name="bag-handle-outline"></ion-icon>Корзина</button>   
            <button className="language"><img src="	https://evos.uz/images/svg/ru.svg" alt="logoRus" /></button> 
            <button className="profile"><ion-icon name="person-outline"></ion-icon></button>      
           
        </div>
        </div>
   
    </StyledNavbar>




    )    
}


export default Navbar;