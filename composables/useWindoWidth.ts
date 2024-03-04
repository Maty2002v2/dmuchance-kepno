export const useWindoWidth = () => {
    if (process.client) {
        const windowWidth = ref(window.innerWidth);

        const onWidthChange = () => (windowWidth.value = window.innerWidth);
        onMounted(() => window.addEventListener('resize', onWidthChange));
        onUnmounted(() => window.removeEventListener('resize', onWidthChange));

        const width = computed(() => windowWidth.value);
        const isMobile = computed(() => width.value < 1024);

        return { width, isMobile };
    }

    return { isMobile: null, width: null };
}
