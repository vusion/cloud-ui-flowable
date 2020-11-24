import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableRadios = wrap({
    name: 'u-flowable-radios',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableRadios,
};

export default UFlowableRadios;
