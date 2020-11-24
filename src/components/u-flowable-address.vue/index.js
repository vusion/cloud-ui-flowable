import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableAddress = wrap({
    name: 'u-flowable-address',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableAddress,
};

export default UFlowableAddress;
