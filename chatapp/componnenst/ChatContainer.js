
import ActiveConversationTitle from "./ActiveConversationTitle.js";
import chatIput from "./ChatIput.js";
import MessageList from "./MesseageList.js";
class ChatContainer {
    _actieConversation;
    constructor() {
        this.$chatContainer = document.createElement('div');
        this.$chatContainer.setAttribute('class',
            ' flex flex-col w-3/4 h-screen bg-blue-200 border ');

        this.$ActiveConversationTitle = new ActiveConversationTitle();
        this.$chatInput = new chatIput();
        this.$MessageList = new MessageList();
    }
    setActiveConversation(actieConversation) {
        this._actieConversation = actieConversation;
        this.$ActiveConversationTitle.setConversation(actieConversation);
        this.$MessageList.setConversation(actieConversation);
    }

    render(MainContainer) {
        this.$chatContainer.appendChild(this.$ActiveConversationTitle.render());
        this.$chatContainer.appendChild(this.$MessageList.render());
        this.$chatContainer.appendChild(this.$chatInput.render());

        MainContainer.appendChild(this.$chatContainer);
    }

}
export default ChatContainer;