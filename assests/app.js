const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author:'Brandon Sanderson',
            gitHub: 'https://github.com/E-Davies',
            portfolio: 'https://e-davies.github.io/react-portfolio/',
            books: [
                {title: 'Name of the Wind', author:'Patrick Rothfuss', img:''},
                {title: 'The Way of Kings', author:'Brandon Sanderson', img:''},
                {title: 'The Final Empire', author:'Brandon Sanderson', img:''}
            ],
            age: 45,
            x: 0,
            y: 0,
            activated: false
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks; // this reverses whatever showBooks is currently set to. So if it's set to true, it will then change it to false and vice versa
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if (data) { //if there is another parameter given then console log this
                console.log(data);
            }
            if (e) {

            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount('#app');