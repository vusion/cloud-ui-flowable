import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableSelect = wrap({
    name: 'u-flowable-select',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableSelect,
};

export default UFlowableSelect;
