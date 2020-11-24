import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableDateTimeRange = wrap({
    name: 'u-flowable-date-time-range',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableDateTimeRange,
};

export default UFlowableDateTimeRange;
