import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableDepartment = wrap({
    name: 'u-flowable-department',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableDepartment,
};

export default UFlowableDepartment;
