<template>
  <header class="flex justify-between items-center py-8 px-5 md:p-10">
    <div class="header-items">
      <a href="#">Shop</a>
      <span class="hidden md:block">|</span>
      <a href="#" class="hidden md:block">Search</a>
    </div>
    <h1 class="text-3xl tracking-widest ml-8 md:ml-0">Othelia</h1>
    <div class="header-items">
      <a href="#" class="hidden md:block">Account</a>
      <a href="#">Bag <span class="tracking-widest">(0)</span></a>
    </div>
  </header>
  <main class="h-screen w-full">
    <section
      id="hero"
      class="relative flex items-center justify-center w-full h-[42rem]"
    >
      <img :src="img2" alt="" class="absolute h-full w-full object-cover object-center" />
      <a
        href="#"
        class="z-10 border border-2 border-slate-600 p-4 text-zinc-300 shadow-xl text-md bg-slate-600 opacity-90 text-xs hover:opacity-70 md:text-sm"
        >Shop the collection</a
      >
    </section>
    <section id="gallery" class="grid grid-cols-2 gap-2 mt-5">

      <img :src="img1" alt="" class=""/>
      <img :src="img3" alt="" />
      <a href="#" class="px-3">Summer Sale</a>
    </section>
    <section id="sign-up" class="flex flex-col justify-center items-center space-y-4 my-20 md:mb-32">
      <h2>Get exclusive deals</h2>
      <div class="flex flex-col w-1/2 max-w-md">
        <input type="email" class="tracking-wide text-sm border-b border-black w-full placeholder:text-[12px] placeholder:uppercase placeholder:tracking-wide focus:outline-none" placeholder="email address">
        <button class="uppercase text-xs mt-2 text-right">Subscribe</button>
      </div>
    </section>
    <footer class="flex justify-between px-3 h-1/4 max-w-lg">
      <!-- About Container-->
       <div class="footer-container">
        <h5>Company</h5>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Contact Us</a>
       </div>
       <!-- Order Information -->
       <div class="footer-container">
        <h5>Orders</h5>
        <a href="#">Returns</a>
        <a href="#">Shipping</a>
        <a href="#">FAQ</a>
       </div>
      <!-- Socials Container-->
       <div class="footer-container">
        <h5>Social</h5>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
       </div>
    </footer>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      img1: "/images/image1.jpg",
      img2: "/images/image2.jpg",
      img3: "/images/image3.jpg",
    };
  },
};
</script>

<style></style>
