<template>
  <TheHeader />
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
    <!-- Summer Sale Gallery -->
    <section id="gallery" class="grid grid-cols-2 gap-2 mt-5">
      <img :src="img1" alt="" class=""/>
      <img :src="img3" alt="" />
      <a href="#" class="px-3">Summer Sale</a>
    </section>
    <!-- Call to action -->
    <section id="sign-up" class="flex flex-col justify-center items-center space-y-4 my-20 md:mb-32">
      <h2>Get exclusive deals</h2>
      <div class="flex flex-col w-1/2 max-w-md">
        <div class="border-b border-black">
          <input type="email" class="tracking-wide text-sm w-full placeholder:text-[12px] placeholder:uppercase placeholder:tracking-wide focus:outline-none" placeholder="email address">
        </div>
        <button class="uppercase text-xs mt-2 text-right">Subscribe</button>
      </div>
    </section>
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
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
