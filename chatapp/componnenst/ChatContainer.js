
import  ActiveConversationTitle from "./ActiveConversationTitle.js";
import ChatIput from "./ChatIput.js";
class ChatContainer {
    constructor() {
        this.$chatContainer = document.createElement('div');
        this.$chatContainer.setAttribute('class', 'w-3/4 h-screen bg-blue-200 p-4');
        this.$ActiveConversationTitle = new ActiveConversationTitle();
        this.$ChatIput = new ChatIput(); 
    }
    render(MainContainer) {
        this.$ActiveConversationTitle.render(this.$chatContainer);
       this.$ChatIput.render(this.$ChatIput.render());
        MainContainer.appendChild(this.$chatContainer);
    }

}
export default ChatContainer;