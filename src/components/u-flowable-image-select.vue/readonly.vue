<template>
    <div>
        <div :class="$style.checkbox" :key="item.key" v-for="item in selectedList">
            <u-image :src="item.image" fit="fill" :class="$style.image"></u-image>
            <div :class="$style.desc">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script>
import UImage from 'cloud-ui.vusion/src/components/u-image.vue/index.vue';
export default {
    components: {
        UImage,
    },
    props: {
        value: String,
        list: Array,
    },
    data() {
        return {
            selectedList: this.getSelectedList(this.value),
        };
    },
    watch: {
        value(value) {
            this.selectedList = this.getSelectedList(value);
        },
    },
    methods: {
        getSelectedList(value) {
            const map = {};
            this.list.forEach((item) => {
                map[item.key] = item;
            });
            return (value || '').split(',').map((valueItem) => this.list.find((item) => item.key === valueItem));
        },
    },
};
</script>

<style module>
.checkbox {
    display: inline-block;
    vertical-align: top;
    width: calc((100% - 20px * 4) / 4);
    margin: 0 10px!important;
}

.image {
    width: 100%;
    height: 160px;
}
.desc {

}

</style>
