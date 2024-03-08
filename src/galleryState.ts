import { reactive } from "vue";

export const galleryState = reactive({
    position: 0,
    displayIntro: false,
    modal: false,
    galleryForward() {
        this.position++;
    },
    galleryBack() {
        this.position--;
    },
    activateDisplay() {
        this.displayIntro = true;
    },
    toggleModal() {
        this.modal = !this.modal;
    }
});