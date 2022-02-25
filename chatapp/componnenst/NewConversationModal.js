import InputGroup from '../componnenst/inputGroup.js';
class NewConversationModal {
    constructor() {
        this.$container = document.createElement('form');
        this.$container.setAttribute('class', 'hidden new-conversation-modal w-84 h-1/3 bg-blue-500 px-8 py-4 rounded-lg  ');
        this.$container.addEventListener('submit', this.onSubmit);
        this.$email = new InputGroup('Email', 'email', 'Email');
        this.$submit = document.createElement('button');
        this.$submit.textContent = 'Create';
        this.$submit.type = 'submit';
        this.$submit.setAttribute('class', ' bg-yellow-500 px-4 py-2 rounded-lg text-white  hover:bg-yellow-600 ');
    }
    onSubmit = (e) => { 
        e.preventDefault();
         const email = this.$email.getValue();
        console.log( 'email', email);
        this.$container.classList.add('hidden');
    }
    render() {
        this.$container.appendChild(this.$email.render());
        this.$container.appendChild(this.$submit);
        return this.$container;
    }
}
export default NewConversationModal;