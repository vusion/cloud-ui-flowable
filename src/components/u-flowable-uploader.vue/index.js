import edit from './edit.vue';
import readonly from './readonly.vue';
import wrap from '../../utils/wrap';

const UFlowableUploader = wrap({
    name: 'u-flowable-uploader',
    components: {
        edit,
        readonly,
    },
    props: {
        value: Array,
    },
});

export {
    UFlowableUploader,
};

export default UFlowableUploader;
