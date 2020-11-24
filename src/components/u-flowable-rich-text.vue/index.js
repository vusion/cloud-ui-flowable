import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableRichText = wrap({
    name: 'u-flowable-rich-text',
    components: {
        edit,
        readonly,
    },
    props: {
        value: String,
    },
});

export {
    UFlowableRichText,
};

export default UFlowableRichText;
