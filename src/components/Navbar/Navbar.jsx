import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    return(
        <nav>
            <h1>
                Shimmer Bags
            </h1>

            <section>
                <button>Mochilas</button>
                <button>Carteras</button>
                <button>Riñoneras</button>
            </section>
            <CartWidget/>
        </nav>
    )
}
export default Navbar