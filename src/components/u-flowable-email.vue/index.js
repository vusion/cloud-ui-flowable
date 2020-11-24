import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableEmail = wrap({
    name: 'u-flowable-email',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableEmail,
};

export default UFlowableEmail;
