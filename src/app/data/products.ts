import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Stylish Urban Casual',
    description: 'Premium cotton-blend casual wear designed for the modern urban gentleman. Features a comfortable relaxed fit with subtle details, perfect for both weekend outings and casual Fridays. Made with 95% cotton and 5% elastane for exceptional comfort and durability. Machine washable, tumble dry low.',
    price: 79.99,
    category: 'men',
    image: '/images/men/pexels-sebastian-715546.jpg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Classic Denim Look',
    description: 'Premium quality denim jeans crafted from selvedge denim. Features a classic straight cut with a mid-rise waist and five-pocket styling. Made from 100% cotton Japanese denim with authentic indigo dye. Stonewashed for a lived-in feel while maintaining durability. Machine wash cold, line dry for best results.',
    price: 89.99,
    category: 'men',
    image: '/images/men/pexels-marleneleppanen-1183266.jpg',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: '3',
    name: 'Casual Street Fashion',
    description: 'Contemporary streetwear essentials with an urban edge. This piece combines style with functionality, featuring a modern cut and premium materials. Made from a blend of organic cotton and recycled polyester. Includes hidden pockets and reflective details for added practicality. Easy care: machine wash cold, tumble dry low.',
    price: 69.99,
    category: 'men',
    image: '/images/men/pexels-chloekalaartist-1043474.jpg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Elegant Summer Dress',
    description: 'Lightweight and graceful summer dress perfect for any occasion. Features a flattering A-line silhouette with delicate floral patterns. Made from breathable 100% cotton voile fabric with a soft touch finish. Includes convenient side pockets and adjustable waist tie. Hand wash cold, line dry to maintain fabric quality.',
    price: 129.99,
    category: 'women',
    image: '/images/women/pexels-eliasdecarvalho-1375849.jpg',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '5',
    name: 'Modern Fashion Collection',
    description: 'Contemporary designer piece from our exclusive collection. Features clean lines and modern asymmetric details that create a sophisticated silhouette. Crafted from high-quality sustainable tencel fabric with a luxurious drape. Hidden zip closure and lined for comfort. Dry clean only for best garment care.',
    price: 149.99,
    category: 'women',
    image: '/images/women/women.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Trendy Street Style',
    description: 'Modern street fashion with an athletic twist. Features a relaxed oversized fit with unique design elements and premium hardware details. Made from a comfortable blend of organic cotton and recycled materials. Includes convenient kangaroo pockets and adjustable drawstrings. Machine washable, perfect for active lifestyles.',
    price: 119.99,
    category: 'women',
    image: '/images/women/pexels-ogproductionz-15647621.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];