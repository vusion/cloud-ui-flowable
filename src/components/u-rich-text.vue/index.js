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

import localStorage from './localStorage';

export function getToken() {
    let authInfo = localStorage.get('authInfo');
    let token = '';
    if (authInfo) {
        authInfo = JSON.parse(authInfo);
        if (authInfo.authorization) {
            token = authInfo.authorization;
        }
    }
    return token;
}

function images_upload_handler(blobInfo, success, failure, progress) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open('POST', '/api/v1/bucket/upload');
    xhr.setRequestHeader('accessToken', getToken());
    xhr.upload.onprogress = function (e) {
        progress(e.loaded / e.total * 100);
    };

    xhr.onload = function () {
        if (xhr.status === 403) {
            failure('HTTP Error: ' + xhr.status, { remove: true });
            return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
            failure('HTTP Error: ' + xhr.status);
            return;
        }
        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json.result !== 'string') {
            failure('Invalid JSON: ' + xhr.responseText);
            return;
        }
        success(json.result);
    };

    xhr.onerror = function () {
        failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
    };

    const formData = new FormData();
    formData.append('file', blobInfo.blob(), blobInfo.filename());

    xhr.send(formData);
}

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
                    images_upload_url: '/api/v1/bucket/upload',
                    images_upload_handler,
                    // eslint-disable-next-line camelcase
                    images_upload_base_path: '/some/basepath',
                    // eslint-disable-next-line camelcase
                    images_upload_credentials: true,
                };
            },
        },
    },
};
