Vue.component('card', {
    props: {
        text: String,
        count: Number
    },
    data() {
        return {
            seen$: 0
        }
    },
    computed: {
        remaining: function () {
            return this.count - this.seen$;
        }
    },
    template: `
<div class="card p-0 m-1 d-inline-block" style="width: 10rem;">
    <div class="card-body">
        <p class="text-center">{{text}}</p>
        <div class="text-center">
            <button class="btn btn-sm btn-light" v-on:click="seen$ += 1">{{seen$}}</button> / {{remaining}}
        </div>
    </div>
</div>`
});