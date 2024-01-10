// import { getFeaturedProducts } from "../data/product-data";
import { getAllProducts } from "../data/product-data";
//import ProductList from "../components/product-list/product-list";


export default function Home() {
	// const featuredProducts = getFeaturedProducts();
	const featuredProducts = getAllProducts();

	console.log(featuredProducts);

    return (
        <main>
            {/* <ProductList products={featuredProducts} /> */}
			Home
        </main>
    );
};
