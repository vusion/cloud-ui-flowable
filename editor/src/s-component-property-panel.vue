<template>
    <!-- 这里可以看成是 div 的另一种形式 -->
    <div display="filled" appear="capsule" size="small" item-width="full" :show-scroll-buttons="false" style="padding: 10px; height: calc(100% - 32px); min-height: 400px;" :class="$style.root">
        <div title="属性">
            <template v-if="loading">
                <u-spinner :class="$style.spinner"></u-spinner> 正在加载中...
            </template>
            <div v-else-if="!currentComponent">未知组件 {{ componentName }}</div>
            <div v-else>
                <div gap="small" label-size="normal">
                    <div appear="header" title="基本信息"></div>
                    <div label="组件类型" layout="block">
                        <span>{{ currentComponent.readonlyTitle }}</span>
                    </div>
                    <div appear="header" title="主要属性"></div>
                    <div v-for="attr in currentComponent.attrs"  :key="attr.name">
                        <s-mini-property 
                         :attr="attr" 
                         :allNodesAPI="allNodesAPI"
                         :tag="selectedNode.tag"
                         :currentComponent="currentComponent"
                        >
                    </s-mini-property>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import SMiniProperty from './s-mini-property.vue';

export default {
    name: 's-component-property-panel',
    components: {
        SMiniProperty,
    },
    props: {
        contextProperties: Array,
        componentName: String,
        // 暂时先全量传进来处理吧，可能需要子组件的 API 等等
        allNodesAPI: Object,
        selectedNode: Object,
        pageTree: Array,
        services: Array,
        serviceTree: Array,
        structures: Array,
        domainName: String,
        view: Object,
    },
    data() {
        const currentComponent =  this.selectedNode && this.allNodesAPI[this.selectedNode.tag][0];
        console.info('currentComponent', currentComponent)
        const result =  {
            loading: false,
            currentComponent,
            currentEventList: [],
            currentEvents: [],
        };

        return result;
    },
    computed: {
        app() {
            return this.$root.$children[0].$children[0].app;
        },
        // currentEvents() {
        //     if (!this.currentComponent || !this.currentComponent.events)
        //         return undefined;
        //     else {
        //         const events = [];
        //         this.currentComponent.events.forEach((event) => {
        //             if (event.name === '$listeners' && commonEvents[event.kind])
        //                 events.push(...commonEvents[event.kind]);
        //             else
        //                 events.push(event);
        //         });
        //         return events;
        //     }
        // },
        eventAddDisabled() {
            const list = this.currentEventList;
            const hasEmpty = list.some((item) => item.name === undefined || item.method === undefined);
            const outQuota = !this.currentEvents || this.currentEvents.length === list.length;
            return hasEmpty || outQuota;
        },
    },
    watch: {
        selectedNode: {
            immediate: true,
            handler(selectedNode) {
                if (selectedNode && !selectedNode.events)
                    selectedNode.events = {};
                if (selectedNode) {
                    this.getComponentsAPI();
                }
            },
        },
        // currentEvents: {
        //     immediate: true,
        //     handler(value) {
        //         if (!this.selectedNode || !value)
        //             return;
        //         const attrsMap = this.selectedNode.attrsMap;
        //         const events = value;
        //         const evList = [];
        //         events.forEach((item) => {
        //             if (attrsMap['@' + item.name]) {
        //                 const method = attrsMap['@' + item.name].replace(/\(.*?\)/, '').trim();
        //                 evList.push({ name: item.name, method, params: item.params || [] });
        //             }
        //         });
        //         if (!evList.length) {
        //             this.currentEventList = [{
        //                 name: undefined,
        //                 method: undefined,
        //                 params: [],
        //             }];
        //         } else
        //             this.currentEventList = evList;
        //     },
        // },
    },
    methods: {
        getAttrType(attr) {
            if (attr.name === 'to') {
                return 'destination';
            }
            if (attr.name === 'rules') {
                return 'rules';
            }

            return '';
        },
        importYouData() {
          //  this.$modal.show('import.youdata');
        },
        getDefaultItem() {
            return {
                url: 'xxx',
                service: this.services[0].value,
                port: undefined,
                description: '',
            };
        },
        getMethodDefinition(method) {
            if (method.name.includes('('))
                return method.name;
            else
                return `${method.name}(${method.params ? method.params.map((param) => param.name).join(', ') : ''})`;
        },
        // onBlur(e, sender) {
        //     this.onInput(sender.currentValue);
        // },
        getAttr(name) {
            return this.selectedNode.attrsMap[name];
        },
        hasAttr() {
          //  const selectedNode = node || this.selectedNode;
            return true;
        },
        setAttr(name, value) {
            return this.$set(this.selectedNode.attrsMap, name, value);
        },
        deleteAttr(name) {
            return this.$delete(this.selectedNode.attrsMap, name);
        },
        updateAttrSwitch(name, value, autoClear, attr) {
            if (attr.type === 'string') {
                this.updateAttr(name, value, autoClear);
            } else {
                this.deleteAttr(name);
                this.setAttr(`:${attr.name}`, JSON.stringify(value));
            }
            this.save();
        },
        updateAttr(name, value, autoClear) {
            console.log(name, value, autoClear, 999);
           // const oldValue = this.selectedNode.attrsMap.ref;
            if (value === undefined) {
                this.deleteAttr(name);
            } else if (value === true) {
                this.setAttr(name, '');
            } else if (value === false) {
                this.deleteAttr(name);
            } else if (autoClear && value === '') {
                this.deleteAttr(name);
            } else if (Array.isArray(value)) {
                this.setAttr(name, value.join(' '));
            } else
                this.setAttr(name, value);
            if (name === 'ref') {
                // this.$parent.$refs.pageDesigner.modifyCallLogicRefs({
                //     oldValue: { name: oldValue },
                //     value: { name: value },
                //     view: this.view.node,
                //     type: 'refChange',
                //     saveTemplate: true,
                // });
            } else {
                this.save();
            }
        },
        updateEvent(name, value) {
            if (!value)
                this.$delete(this.selectedNode.events, name);
            else
                this.$set(this.selectedNode.events, name, {
                    value,
                });
            this.save();
        },
        updateAuth(value) {
            if (value && !this.selectedNode.attrsMap.ref) {
              //  this.$toast.show('请先填写组件名称');
                return this.$refs.auth && (this.$refs.auth.currentValue = false);
            }

           const view = this.view.node;
            const resourceName = `/${view.page.name}${view.name === '/' ? '' : view.name}`;
            const url = resourceName + '/' + this.selectedNode.attrsMap.ref;
            if (value) {
                this.updateAttr('v-auth', `'${url}'`, true);
            } else {
                this.updateAttr('v-auth', undefined, true);
            }
            // service.execInWeb(
            //     view.page.service.id,
            //     value ? 'vusion.designer.addAuthCache' : 'vusion.designer.removeAuthCache',
            //     url,
            //     '/APP_WORKSPACE/.vusion/auth-cache.json',
            // );
        },
        switchBinding(attr) {
            if (attr.model && this.hasAttr('v-model')) {
                const oldValue = this.getAttr('v-model');
                this.deleteAttr('v-model');
                this.setAttr(attr.name, oldValue);
            } else if (attr.sync && this.hasAttr(`:${attr.name}.sync`)) {
                const oldValue = this.getAttr('v-model');
                this.deleteAttr(`:${attr.name}.sync`);
                this.setAttr(attr.name, oldValue);
            } else if (this.hasAttr(`:${attr.name}`)) {
               // const oldValue = this.getAttr(`:${attr.name}`);
                this.deleteAttr(`:${attr.name}`);
                // this.setAttr(attr.name, oldValue);
            } else {
                const oldValue = this.getAttr(attr.name);
                this.deleteAttr(attr.name);
                this.setAttr(`:${attr.name}`, `'${oldValue === undefined ? '' : oldValue}'`);
            }
            this.save();
        },
        switch2WayBinding(attr) {
            const syncName = `:${attr.name}.sync`;
            if (this.hasAttr('v-model')) {
                const oldValue = this.getAttr('v-model');
                this.deleteAttr('v-model');
                this.setAttr(attr.name, oldValue);
            } else if (this.hasAttr(syncName)) {
                const oldValue = this.getAttr(syncName);
                this.deleteAttr(syncName);
                this.setAttr(attr.name, oldValue);
            } else {
                if (attr.model) {
                    let oldValue = this.getAttr(`:${attr.name}`) || this.getAttr(attr.name);
                    if (oldValue === undefined || !Vue.validator('identifier')(oldValue))
                        oldValue = attr.name;
                    this.deleteAttr(`:${attr.name}`);
                    this.deleteAttr(attr.name);
                    this.setAttr('v-model', oldValue);
                } else if (attr.sync) {
                    let oldValue = this.getAttr(`:${attr.name}`) || this.getAttr(attr.name);
                    if (oldValue === undefined || !Vue.validator('identifier')(oldValue))
                        oldValue = attr.name;
                    this.deleteAttr(`:${attr.name}`);
                    this.deleteAttr(attr.name);
                    this.setAttr(syncName, oldValue);
                }
            }
            this.save();
        },
        // @TODO: 临时功能
        switchSlotBinding() {
            if (!this.selectedNode.children)
                this.selectedNode.children = [];
            let child = this.selectedNode.children[0];
            if (!this.selectedNode.children[0])
                child = this.selectedNode.children[0] = {};
            if (child.type === 2) {
                child.type = 3;
                child.text = child.text.replace(/\{\{/, '').replace(/\}\}/, '').trim();
            } else if (child.type === 3) {
                child.type = 2;
                child.text = `{{ '${child.text}' }}`;
            }
            this.save();
        },
        // @TODO: 临时功能
        updateSlot(name, text) {
            if (!this.selectedNode.children)
                this.selectedNode.children = [];
            let child = this.selectedNode.children[0];
            if (!this.selectedNode.children[0])
                child = this.selectedNode.children[0] = {};
            child.text = text;
            this.save();
        },
        save() {
            this.$emit('save');
        },
        getComponentsAPI() {
            if (this.allNodesAPI[this.selectedNode.tag]) {
                this.loading = false;
                this.currentComponent = this.allNodesAPI[this.selectedNode.tag][0];
                this.getCurrentEvents();
            } else if (this.view && this.view.page) {
              //  const selectedNode = this.selectedNode;
                this.loading = true;
            }
        },
        getCurrentEvents() {
            if (!this.currentComponent || !this.currentComponent.events)
                this.currentEvents = [];
            else {
                const events = [];
                // this.currentComponent.events.forEach((event) => {
                //     if (event.name === '$listeners' && commonEvents[event.kind])
                //         events.push(...commonEvents[event.kind]);
                //     else
                //         events.push(event);
                // });
                this.currentEvents = events;
            }
            const attrsMap = this.selectedNode.attrsMap;
            const events = this.currentEvents;
            const evList = [];
            events.forEach((item) => {
                if (attrsMap['@' + item.name]) {
                    const method = attrsMap['@' + item.name].replace(/\(.*?\)/, '').trim();
                    evList.push({
                        name: item.name,
                        method,
                        params: item.params || [],
                        eventNode: {
                            type: 'CallLogic',
                            level: 'logicNode',
                            label: '',
                            calleeCode: method,
                            arguments: [],
                        },
                    });
                }
            });
            if (!evList.length) {
                this.currentEventList = [{
                    name: undefined,
                    method: undefined,
                    params: [],
                    eventNode: {
                        type: 'CallLogic',
                        level: 'logicNode',
                        label: '',
                        calleeCode: '',
                        arguments: [],
                    },
                }];
            } else
                this.currentEventList = evList;
        },
        onAddEvent() {
            if (this.eventAddDisabled)
                return;
            this.$refs.eventsTable.add();
        },
        getDefaultEvent() {
            return {
                name: undefined,
                method: undefined,
                eventNode: {
                    type: 'CallLogic',
                    level: 'logicNode',
                    label: '',
                    calleeCode: '',
                    arguments: [],
                },
                params: [],
            };
        },
        getEventSelectValues(name) {
            const events = this.currentEvents;
            const list = this.currentEventList;
            const names = list.map((item) => item.name);
            const newList = events.filter((item) => name === item.name || !names.includes(item.name))
                .map((item) => ({ value: item.name, text: item.title || item.label }));

            return newList;
        },
        onSelectInterface(data) {
            console.info(data);
            // this.setAttr('url', data.value);
            this.save();
        },
        onSelectEvent(event, item) {
            if (!event.value)
                return;
            const currentEvent = this.currentEvents.find((cevent) => cevent.name === event.value);
            Object.assign(item, currentEvent);
            if (!item.method)
                return;
            const params = this.getEventMethodParams(this.selectedNode, ['$event']);
            const method = `${item.method}(${params.join(',')})`;
            this.deleteAttr('@' + event.oldValue);
            this.setAttr('@' + event.value, method);
            this.save();
        },
        onRemoveEvent(event) {
            if (event.item && !event.item.method)
                return;
            this.deleteAttr('@' + event.item.name);
            this.save();
        },
        onInputEventMethod() {
            // item.method = event.value;
            // if (!item.name)
            //     return;
            // this.updateAttr('@' + item.name, event.value, true);
            const selectedNode = this.selectedNode;
            console.log(selectedNode);
        },
        // onSelectEventMethod(event, item) {
        //     item.method = event.value;
        //     if (!item.name)
        //         return;
        //     const params = this.getEventMethodParams(this.selectedNode, ['$event']);
        //     const method = `${event.value}(${params.join(',')})`;
        //     this.updateAttr('@' + item.name, method, true);
        // },
        onSelectEventMethod(event, item) {
            item.method = event.calleeCode;
            Object.assign(item.eventNode, event);
            if (!item.name)
                return;
            const params = this.getEventMethodParams(this.selectedNode, ['$event']);
            const method = `${item.method}(${params.join(',')})`;
            this.updateAttr('@' + item.name, method, true);
        },
        getEventMethodParams(node, params) {
            if (!node)
                return params;
            if (this.hasAttr('v-for', node)) {
                params.push(node.alias);
                if (node.iterator1) {
                    params.push(node.iterator1);
                }
            }
            if (node.slotScope && node.slotScope !== '_empty_') {
                const slotScope = node.slotScope.match(/{(.*?)}/);
                const scope = slotScope ? slotScope[1].trim() : node.slotScope;
                params.push(scope);
            }
            if (params.length > 1) {
                return params;
            } else {
                return this.getEventMethodParams(node.parent, params);
            }
        },
        getSizeValue(name, index) {
            const value = this.selectedNode.attrsMap[name];
            if (!value)
                return;
            const result = value.split(' ');
            return result[index];
        },
        getMultiValue(name) {
            const value = this.selectedNode.attrsMap[name];
            if (!value)
                return [];
            if (Array.isArray(value))
                return value;
            return value.split(' ');
        },
        setSizeValue($event, name, index) {
            let value = this.selectedNode.attrsMap[name];
            if (value) {
                value = value.split(' ');
            }
            value = value || [];
            value[index] = $event;
            const isEmpty = value.every((item) => item === '' || item === undefined);
            this.updateAttr(name, isEmpty ? undefined : value.join(' '), true);
        },
        async onAddLogic(item) {
            if (!item.name)
                return;
            const logics = this.definitions.logics;
         //   const existingNames = logics.map((logic) => logic.name);
            this.view.node.expanded = true;
            this.view.page.expanded = true;
            const newLogic = {
                level: 'logic',
                view: this.view.node,
                expanded: false, //   name: utils.unique('on' + stringFilter.kebab2Camel(item.name), existingNames),
                description: '',
                definition: {
                    params: [],
                    returns: [],
                    variables: [],
                    body: [
                        { level: 'logicNode', type: 'Start', label: '开始' },
                        { level: 'logicNode', type: 'End', label: '结束' },
                    ],
                    playground: [],
                },
                serviceType: 'web',
                moreChildrenFields: ['definition.params', 'definition.returns', 'definition.variables'],
            };
            const params = this.getEventMethodParams(this.selectedNode, ['$event']).map((param) => {
                if (param === '$event') {
                    const defaultSchema = { $ref: '#/basicTypes/String' };
                    return {
                        level: 'param',
                        type: 'Identifier',
                        name: 'event',
                        description: '',
                        schema: item.params && item.params[0] && item.params[0].schema ? {
                            $ref: item.params[0].schema.$ref,
                        } : defaultSchema,
                        isLeaf: true,
                        init: {
                            type: 'StringLiteral',
                            value: '',
                        },
                        logic: newLogic,
                    };
                } else {
                    return {
                        level: 'param',
                        type: 'Identifier',
                        name: param,
                        description: '',
                        schema: { $ref: '#/basicTypes/String' },
                        isLeaf: true,
                        init: {
                            type: 'StringLiteral',
                            value: '',
                        },
                        logic: newLogic,
                    };
                }
            });
            newLogic.definition.params = params;
            logics.push(newLogic);
            await this.$contact('s-main', (mainVM) => mainVM.$refs.pageDesigner.saveDefinition(this.view.node));
            this.$publish('logic.change', true);
            setTimeout(() => {
                this.onSelectEventMethod({ calleeCode: newLogic.name }, item);
            });
        },
    },
};
</script>

<style module>
.root [class^="u-tabs_body_"]{
    overflow: visible;
}

.label {
    position: relative;
    font-weight: 500;
    margin-top: 20px;
    display: inline-block;
}

.box {
    width: 200px;
}

.bind {
    /* position: absolute; */
    cursor: pointer;
    display: inline-block;
    float: right;
    margin-top: -2px;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 14px;
    transform: rotate(-45deg);
    color: rgba(255,255,255,0.2);
    transition: color 0.2s;
}

.bind:hover {
    color: rgba(255,255,255,0.65);
}

.bind[enabled] {
    color: white;
}

.bind[role="2way"] {
    transform: initial;
    margin-right: -14px;
    margin-left: 0;
}
.spinner{
    margin: 10px 0 0 18px;
}
.add {
    position: absolute;
    right: 4px;
    top: 0;
    line-height: 27px;
}
.add[disabled]{
    color: #b6b9be;
    cursor: not-allowed;
}
.logicadd{
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 9px;
    z-index: 1;
    background: var(--select-background);
}
.logicadd:hover{
    color:var(--brand-primary);
}

.logicselect .s-logic-node_block_{
    width: 100px;
}

</style>
