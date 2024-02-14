import { reactive } from "vue";

export const galleryState = reactive({
    position: 0,
    galleryForward() {
        this.position++;
    },
    galleryBack() {
        this.position--;
    }
});