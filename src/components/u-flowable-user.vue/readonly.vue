<template>
<div :class="$style.root">
    <u-label color="primary" v-for="(item, index) in selectedList" :key="index" :class="$style.label">{{ item.text }}</u-label>
</div>
</template>

<script>
import ULabel from 'cloud-ui.vusion/src/components/u-label.vue';
export default {
    components: {
        ULabel,
    },
    props: {
        value: String,
        load: Function,
    },
    data() {
        return {
            list: null,
            selectedList: null,
        };
    },
    watch: {
        value(value) {
            this.getUser();
        },
    },
    created() {
        this.loadList();
    },
    methods: {
        loadList() {
            this.list = null;
            this.load().then((list) => {
                this.list = list;
                this.getUser();
            });
        },
        getUser() {
            this.selectedList = null;
            if (this.list && this.value) {
                const users = this.value.split(',');
                this.selectedList = this.list.filter((item) => users.includes(item.value + ''));
            }
        },
    },
};
</script>

<style module>
.root {
   position: relative;
}
.label {
    display: inline-block;
    margin-right: 5px;
}
</style>
