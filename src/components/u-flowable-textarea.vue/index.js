import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableTextarea = wrap({
    name: 'u-flowable-textarea',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableTextarea,
};

export default UFlowableTextarea;
