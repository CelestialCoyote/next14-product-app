import { getFeaturedProducts } from "../data/product-data";
import ProductList from "../components/product-list/product-list";


export default function Home() {
	const featuredProducts = getFeaturedProducts();

    return (
        <main>
            <ProductList products={featuredProducts} />
			Home
        </main>
    );
};
