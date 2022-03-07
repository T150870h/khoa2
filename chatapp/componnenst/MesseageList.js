class MessageList {
    constructor() {
            this.$container = document.createElement('div');
            this.$container.setAttribute('class', 'flex flex-1 bg-red-200');
            this.$container.textContent = 'MessageList';
    }
    setConversation(conversation) {
        this.$container.textContent = conversation.coverrsationName;
    }
    render() {
           return this.$container;
    }
}
export default MessageList;