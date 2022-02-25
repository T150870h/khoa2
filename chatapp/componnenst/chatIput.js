class chatIput {
    constructor() {
          this.$container = document.createElement('div');
          this.$container.textContent = 'Chat iput';
    }
    render(container) {
           return this.$container;
    }
}
export default chatIput;