import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableImageSelect = wrap({
    name: 'u-flowable-image-select',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Array,
    },
});

export {
    UFlowableImageSelect,
};

export default UFlowableImageSelect;
