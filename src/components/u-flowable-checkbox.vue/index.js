import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableCheckbox = wrap({
    name: 'u-flowable-checkbox',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Array,
    },
});

export {
    UFlowableCheckbox,
};

export default UFlowableCheckbox;
