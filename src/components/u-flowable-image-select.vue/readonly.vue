<template>
    <div>
        <div :class="$style.checkbox" :key="index" v-for="(item, index) in selectedList">
            <u-image :src="getCurrentImage(item)" fit="fill" :class="$style.image"></u-image>
            <div :class="$style.desc">
                {{ item.text }}
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
        value: Array,
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
        list() {
            this.selectedList = this.getSelectedList(this.value);
        },
    },
    methods: {
        getCurrentImage(item) {
            if (item.files?.[0]) {
                return item.files[0].url;
            }
            return item.image;
        },
        getSelectedList(value) {
            const map = {};
            // 选项的 text 作为唯一标识
            this.list.forEach((item) => {
                map[item.text] = item;
            });

            // 根据结果返回选中的值
            let valueResult = [];
            if (Object.prototype.toString.call(value) === '[object Array]') {
                valueResult = value;
            } else {
                valueResult = (value || '').split(',').filter((i) => i);
            }

            return valueResult.map((valueItem) => {
                const realItem = this.list.find((item) => item.value === valueItem);
                return realItem;
            }).filter((i) => i);
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
