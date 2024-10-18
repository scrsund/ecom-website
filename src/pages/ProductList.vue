<template>
  <div class="h-screen">
    <h1>{{ category }} Item</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items: [],
    };
  },
  computed: {
    category() {
      return this.$route.params.category;
    },
  },
  watch: {
    category: {
      immediate: true,
      handler(newCategory) {
        this.fetchItems(newCategory);
      },
    },
  },
  methods: {
    fetchItems(category) {
      // Simulate fetching items based on category
      const allItems = {
        kitchen: ['Spoon', 'Fork', 'Knife'],
        lighting: ['Lamp', 'Chandelier', 'Bulb'],
        furniture: ['Chair', 'Table', 'Sofa'],
      };
      this.items = allItems[category] || [];
    },
  },
};
</script>
