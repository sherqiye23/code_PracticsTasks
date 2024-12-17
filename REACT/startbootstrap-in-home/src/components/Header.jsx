import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
    return (
        <>
            <header>
                <Container>
                    <div className="nav-logo">
                        <span className="logo-name">Start Bootstrap</span>
                        <nav className="nav-menu">
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">
                                <span className="on-click-shop">
                                    Shop <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0Z"></path></svg>
                                </span>
                                <div className="d-none-nav">
                                    <a href="">All Products</a>
                                    <a href="">Popular Items</a>
                                    <a href="">New Arrivals</a>
                                </div>
                            </a>
                        </nav>
                    </div>
                    <div className="card-cart-wrap">
                        <button className="card-cart-btn">
                            <span className="button-text">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="416" r="32"></circle><circle cx="400" cy="416" r="32"></circle><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z"></path></svg>
                            </span>
                            <span className="button-text">Cart</span>
                            <span className="button-count">0</span>
                        </button>
                    </div>
                </Container>
            </header>
        </>
    )
}