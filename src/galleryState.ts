import { reactive } from "vue";

export const galleryState = reactive({
    position: 0,
    displayIntro: false,
    galleryForward() {
        this.position++;
    },
    galleryBack() {
        this.position--;
    },
    activateDisplay() {
        this.displayIntro = true;
    }
});