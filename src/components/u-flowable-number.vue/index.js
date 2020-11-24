import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableNumber = wrap({
    name: 'u-flowable-number',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Number,
    },
});

export {
    UFlowableNumber,
};

export default UFlowableNumber;
