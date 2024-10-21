export default {
  state() {
    return {
      kitchen: [
        {
          id: "1",
          img: "/images/products/kitchen/img1.jpg",
          name: "Mixing bowl",
          price: 39.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
        {
          id: "2",
          img: "/images/products/kitchen/img2.jpg",
          name: "Leaf plates",
          price: 49.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
        {
          id: "3",
          img: "/images/products/kitchen/img3.jpg",
          name: "Ceramic bowl",
          price: 19.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
        {
          id: "4",
          img: "/images/products/kitchen/img4.jpg",
          name: "Porcelain dining set",
          price: 59.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
        {
          id: "5",
          img: "/images/products/kitchen/img5.jpg",
          name: "Metal bowl",
          price: 34.99,
          quantity: 0,
          sale: true,
          discount: .40,
        },
      ],
      furniture: [
        {
          id: "1",
          img: "/images/products/furniture/img1.jpg",
          name: "Clay vase",
          price: 49.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
        {
          id: "2",
          img: "/images/products/furniture/img2.jpg",
          name: "Wicker chair",
          price: 119.99,
          quantity: 0,
          sale: false,
          discount: 0,
        },
      ],
    };
  },
};
