import ProductItem from "../product-item/product-item";
import styles from "./product-list.module.css";


export default function ProductList({ products }) {
    console.log(`products: ${products}`)

    return (
        <ul className={styles.list}>
            {products.map(product =>
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    image={productd.featuredImage}
                />
            )}
        </ul>
    );
};