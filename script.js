let vm = new Vue({
    el: '#root',
    data: {
        title: '',
        desc: '',
        img: '',
        isLoaded: false,
        loading: 'loading'
    },
    created: function () {
        fetch('./card.json').then(res => res.json()).then(res => {
            setTimeout(() => {
                this.isLoaded = true;
                this.loading = '';
                this.title = res.title;
                this.desc = res.desc;
                this.img = res.image;
            }, 2000)
        });
    }
})