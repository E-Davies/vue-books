const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author:'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks; // this reverses whatever showBooks is currently set to. So if it's set to true, it will then change it to false and vice versa
        }
    }
});

app.mount('#app');