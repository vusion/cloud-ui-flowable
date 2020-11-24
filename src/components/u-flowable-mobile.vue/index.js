import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableMobile = wrap({
    name: 'u-flowable-mobile',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableMobile,
};

export default UFlowableMobile;
