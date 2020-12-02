<template>
    <div>
        <div :class="$style.side">
            <u-sidebar :class="$style.sidebar" size="small">
                <u-sidebar-group title="Cloud Flowable UI ">
                    <u-sidebar-item to="/explain/introduction">介绍</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const advanced = !!JSON.parse(localStorage.getItem('advanced'));

        return {
            advanced,
        };
    },
    methods: {
        onCheck($event) {
            localStorage.setItem('advanced', this.advanced);
        },
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: var(--sidebar-width);
    top: var(--navbar-height);
    bottom: 0;
    overflow: hidden;
}

.sidebar {
    padding: 36px 0;
    height: 100%;
    overflow: auto;
    /* width: calc(--var(sidebar-width) + 8px); */
}

/* .sidebar > * {
    width: var(--sidebar-width);
} */

.main {
    margin-left: var(--sidebar-width);
    max-width: 1000px;
    padding: 50px;
    padding-top: 30px;
}
</style>
