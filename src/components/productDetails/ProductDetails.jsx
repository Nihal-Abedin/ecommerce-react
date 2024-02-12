import { useSearchParams, useParams } from "react-router-dom";
import ProductImageView from "./ProductImageView";
import ProductDetailsView from "./ProductDetailsView";

const ProductDetails = () => {
    const params = useParams();
    
    console.log(params)
    return <div className="-bg--color-grey-200 rounded grid grid-cols-2 p-4">
        <ProductImageView/>
        <ProductDetailsView/>
    </div>;
};

export default ProductDetails;