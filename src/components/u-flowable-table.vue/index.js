import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableTable = wrap({
    name: 'u-flowable-table',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Array,
    },
});

export {
    UFlowableTable,
};

export default UFlowableTable;
