// Import TinyMCE
import 'tinymce/tinymce';
import 'tinymce/icons/default';

// A theme is also required
import 'tinymce/themes/silver';
import 'tinymce/skins/ui/oxide/skin.css';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/help';
import 'tinymce/plugins/wordcount';
import contentStyle from '!!raw-loader!tinymce/skins/ui/oxide/content.css';
import contentStyle2 from '!!raw-loader!tinymce/skins/content/default/content.css';
import Editor from '@tinymce/tinymce-vue';
import './zh_CN';
export default {
    extends: Editor,
    props: {
        init: {
            type: Object,
            default() {
                return {
                    // 不支持格式刷，需要购买，图片上传地址需要约定，第三方图片转自身图片需要约定
                    plugins: 'advlist visualblocks code fullscreen insertdatetime media table help wordcount paste autolink link image imagetools lists charmap print preview anchor searchreplace',
                    // eslint-disable-next-line camelcase
                    removed_menuitems: 'newdocument',
                    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    language: 'zh_CN',
                    skin: false,
                    branding: false,
                    // eslint-disable-next-line camelcase
                    content_css: false,
                    // eslint-disable-next-line camelcase
                    content_style: contentStyle.toString() + '\n' + contentStyle2.toString(),
                    // eslint-disable-next-line camelcase
                    block_unsupported_drop: false,
                    // eslint-disable-next-line camelcase
                    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | imageoptions',
                    // eslint-disable-next-line camelcase
                    images_upload_url: 'postAcceptor.php',
                    // eslint-disable-next-line camelcase
                    images_upload_base_path: '/some/basepath',
                    // eslint-disable-next-line camelcase
                    images_upload_credentials: true,
                };
            },
        },
    },
};
