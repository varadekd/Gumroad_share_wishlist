import { useEffect, useState } from "react";

const ProductImage = ({productID}) => {
    const [isImageLoading , setImageLoading] = useState(true)
    useEffect(() => {

        setTimeout(() => {

        
        console.log("productID" , productID)
            setImageLoading(false)
          }, 5000);
          
    })

    return(
        <>
        {isImageLoading ? 
             <div className="bg-gray-200 w-full h-full animate-pulse">
             </div> : <img
        src=""
        alt="{product.imageAlt}"
        className="w-full h-full object-cover rounded-md"
    />

        }
    </>
    )
    
}

export default ProductImage;