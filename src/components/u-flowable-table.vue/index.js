import edit from './edit.vue';
import wrap from '../../utils/wrap';

const UFlowableTable = wrap({
    name: 'u-flowable-table',
    components: {
        edit,
        readonly: edit,
    },
    props: {
        value: Array,
        disableError: {
            type: Boolean,
            default: true,
        },
    },
});

export {
    UFlowableTable,
};

export default UFlowableTable;
