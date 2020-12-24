import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableUser = wrap({
    name: 'u-flowable-user',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Array,
    },
});

export {
    UFlowableUser,
};

export default UFlowableUser;
