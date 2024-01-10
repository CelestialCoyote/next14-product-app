//import Button from "../ui/button/button";
import styles from "./product-item.module.css";


export default function ProductItem({ name, image, id }) {

    const exploreLink = `/product/${id}`;

    return (
        <li className={styles.item}>
            <img src={`/${image}`} alt={name} />

            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{name}</h2>

                    
                </div>

                {/* <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>
                            Explore Event
                        </span>
                        
                        <span className={styles.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div> */}
            </div>
        </li>
    );
};
