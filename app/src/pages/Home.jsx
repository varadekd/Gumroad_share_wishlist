import ProductCard from "../components/ProductCard";
const products = [
    {
      id: 1,
      imageSrc: "image-url-1.jpg",
      heartIconSrc: "heart-icon-url-1.svg",
      categoryChips: ["Music", "Art"],
      productName: "Product 1",
      creatorName: "Creator 1",
      rate: 10.99,
      starRating: 4,
    },
    {
      id: 2,
      imageSrc: "image-url-2.jpg",
      heartIconSrc: "heart-icon-url-2.svg",
      categoryChips: ["E-book", "Art"],
      productName: "Product 2",
      creatorName: "Creator 2",
      rate: 12.49,
      starRating: 3,
    },
    {
      id: 3,
      imageSrc: "image-url-3.jpg",
      heartIconSrc: "heart-icon-url-3.svg",
      categoryChips: ["Software", "3-D"],
      productName: "Product 3",
      creatorName: "Creator 3",
      rate: 8.99,
      starRating: 5,
    },
    {
      id: 4,
      imageSrc: "image-url-4.jpg",
      heartIconSrc: "heart-icon-url-4.svg",
      categoryChips: ["Music", "3-D"],
      productName: "Product 4",
      creatorName: "Creator 4",
      rate: 15.99,
      starRating: 4,
    },
    {
      id: 5,
      imageSrc: "image-url-5.jpg",
      heartIconSrc: "heart-icon-url-5.svg",
      categoryChips: ["Art", "E-book"],
      productName: "Product 5",
      creatorName: "Creator 5",
      rate: 9.49,
      starRating: 4,
    },
    {
      id: 6,
      imageSrc: "image-url-6.jpg",
      heartIconSrc: "heart-icon-url-6.svg",
      categoryChips: ["Music", "Software"],
      productName: "Product 6",
      creatorName: "Creator 6",
      rate: 11.99,
      starRating: 3,
    },
    {
      id: 7,
      imageSrc: "image-url-7.jpg",
      heartIconSrc: "heart-icon-url-7.svg",
      categoryChips: ["E-book", "Software"],
      productName: "Product 7",
      creatorName: "Creator 7",
      rate: 13.99,
      starRating: 5,
    },
    {
      id: 8,
      imageSrc: "image-url-8.jpg",
      heartIconSrc: "heart-icon-url-8.svg",
      categoryChips: ["3-D", "Art"],
      productName: "Product 8",
      creatorName: "Creator 8",
      rate: 7.99,
      starRating: 4,
    },
    {
      id: 9,
      imageSrc: "image-url-9.jpg",
      heartIconSrc: "heart-icon-url-9.svg",
      categoryChips: ["Software", "Music"],
      productName: "Product 9",
      creatorName: "Creator 9",
      rate: 14.49,
      starRating: 5,
    },
    {
      id: 10,
      imageSrc: "image-url-10.jpg",
      heartIconSrc: "heart-icon-url-10.svg",
      categoryChips: ["Art", "E-book"],
      name: "Product 10",
      creator: "Creator 10",
      price: 11.49,
      rating: 3,
    },
  ];
  
const Home = () => {
  return (
    <>
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
