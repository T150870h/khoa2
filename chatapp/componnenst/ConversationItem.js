class ConversationItem {
    constructor(index) {
        this.$container = document.createElement('div');
        this.$container.setAttribute('class',
            'h-18  mb-4 p-4 text-xl font-bold rounded-lg ');

        this.$conversationName = document.createElement('button');
        this.$conversationName.textContent = `Conversation  ${index}`;
    }
    render(container) {
        this.$container.appendChild(this.$conversationName);
        return this.$container;
    }
}
export default ConversationItem;

