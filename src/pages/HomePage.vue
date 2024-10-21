<template>
  <main class="h-screen w-full">
    <section
      id="hero"
      class="relative flex items-center justify-center w-full h-[42rem]"
    >
      <img :src="heroImg" alt="" class="absolute h-full w-full object-cover object-center" />
      <router-link
        to="/products/furniture"
        class="z-10 border border-2 border-slate-600 p-4 text-zinc-300 shadow-xl duration-300 tracking-wider bg-slate-600 opacity-90 text-[11px] hover:opacity-70 md:text-xs"
        >Shop the collection</router-link
      >
    </section>
    <!-- Summer Sale Gallery -->
    <section id="gallery" class="mt-4">
      <div class="relative grid grid-cols-2 gap-2 h-[38rem]">
        <img :src="img1" alt="Picnic Basket" />
        <img :src="img3" alt="Gardening Boots" />
        <router-link to="/products/kitchen" class="absolute w-full px-3 py-1 bottom-0 text-xs border border-slate-200 bg-slate-200 md:text-sm">Summer Sale (up to 40% off)</router-link>
      </div>
    </section>
    <!-- Call to action -->
    <section id="sign-up" class="flex flex-col justify-center items-center space-y-4 my-24 md:mb-32">
      <h2 class="tracking-widest">Get exclusive deals</h2>
      <div class="flex flex-col w-2/3 max-w-md">
        <div class="border-b border-black">
          <input type="email" class="tracking-wide text-sm w-full placeholder:text-[12px] placeholder:uppercase placeholder:tracking-wide focus:outline-none" placeholder="email address">
        </div>
        <button class="uppercase text-xs mt-2 text-right tracking-wide">Subscribe</button>
      </div>
    </section>
    </main>
</template>

<script>

export default{
  data() {
    return {
      heroImg: "/images/homepage/hero.jpeg",
      img1: "/images/homepage/image1.jpg",
      img3: "/images/homepage/image3.jpg",
    };
  },
}
</script>