<script>
import setPath from 'lodash/set';
export const UFlowableForm = {
    name: 'u-flowable-form',
    props: {
        title: String,
        tip: String,
        mode: String,
    },
    data() {
        return {
            error: null,
            value: null,
        };
    },
    // methods: {
    //     onError(event) {
    //         console.log(event);
    //     },
    // },
    methods: {
        getNearVueInstance(el) {
            let vueInstance = el;
            while (vueInstance && !vueInstance.__vue__ && this.$el.contains(el)) {
                vueInstance = vueInstance.parentElement;
            }
            vueInstance = vueInstance.__vue__ ? vueInstance.__vue__ : null;
            console.log(vueInstance);
            while (!vueInstance?.$vnode?.componentOptions?.tag.startsWith('u-flowable')) {
                vueInstance = vueInstance.$parent;
            }
            return vueInstance;
        },
        onSubmit(event) {
            event.preventDefault();
            console.log(this.$el, 999);
            console.log(this.$el.querySelectorAll('[name]'));
            const formItems = this.$el.querySelectorAll('[name]');
            const map = {};
            const result = {};
            const errors = {};
            [...formItems].every((item) => {
                const name = item.getAttribute('name');
                if (!map[name]) {
                    map[name] = true;

                    const formItem = this.getNearVueInstance(item);
                    if (formItem.$error) {
                        item.scrollIntoView(false);
                        return false;
                    }
                    setPath(result, name, formItem.$currentValue);
                }
                return true;
            });
        },
    },
    render(h, context) {
        return h('form', {
            class: this.$style.root,
            on: {
                submit: this.onSubmit,
            },
        }, [
            this.$slots.head,
            this.$slots.default,
            this.$slots.foot || h('div', {
                class: this.$style.foot,
            }, [
                h('button', ['提交']),
            ]),
        ]);
    },
};
export default UFlowableForm;
</script>

<style module>
.root {

}
</style>
