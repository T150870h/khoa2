class ConversationItem {
    constructor(conversationInfo, setActiveConversation ) {
        this._setActiveConversation = setActiveConversation;
        this._conversationInfo = conversationInfo;
        
        this.$container = document.createElement('div');
        this.$container.setAttribute('class',
            'h-18  mb-4 p-4 text-xl font-bold rounded-lg ');

        this.$conversationName = document.createElement('button');
        this.$conversationName.textContent = conversationInfo.coverrsationName;
        
        this.$container.addEventListener('click', this.onClick);
    }
   onClick = () => {
    this._setActiveConversation(this._conversationInfo);    
    }
    render(container) {
        this.$container.appendChild(this.$conversationName);
        return this.$container;
    }
}
export default ConversationItem;

