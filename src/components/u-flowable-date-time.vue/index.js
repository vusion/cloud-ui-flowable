import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableDateTime = wrap({
    name: 'u-flowable-date-time',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableDateTime,
};

export default UFlowableDateTime;
