class ActiveConversationTitle {
    constructor() {
           this.$container = document.createElement('div');
        
           this.$container.setAttribute('class', 'h-18 flex justify-between py-2 font-bold border-b' )
           
           this.$title = document.createElement('h4');
              this.$title.textContent = 'Active Conversation';
           this.$member = document.createElement('h4');
           this.$member.textContent = '0 Member';
    }
    render() {
        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$member);
       return this.$container
        
    }
}
export default ActiveConversationTitle;