var app = new Vue({
    el: '#app',
    data: {
        items: [
            {name: 'wasabi', css: 'nigiri', count: 6},
            {name: 'squid nigiri', css: 'nigiri', count: 5},
            {name: 'salmon nigiri', css: 'nigiri', count: 10},
            {name: 'egg nigiri', css: 'nigiri', count: 5},
            {name: 'tempura', css: 'tempura', count: 14},
            {name: 'sashimi', css: 'sashimi', count: 14},
            {name: 'dumplings', css: 'dumplings', count: 14},
            {name: '1 maki roll', css: 'maki-roll', count: 6},
            {name: '2 maki rolls', css: 'maki-roll', count: 12},
            {name: '3 maki rolls', css: 'maki-roll', count: 8},
            {name: 'pudding', css: 'pudding', count: 10},
            {name: 'chopsticks', css: 'chopsticks', count: 4}
        ]
    },
    template: `
    <div>
    <card v-for='item in items'
        :class="item.css" :text="item.name" :count="item.count"></card>
    </card>
    </div>
`
});
