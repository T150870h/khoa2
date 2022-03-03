import { auth, db } from "../constants/commons.js"
import {
    doc, setDoc, addDoc, collection
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
import InputGroup from '../componnenst/inputGroup.js';
class NewConversationModal {
    constructor() {
        this.$container = document.createElement('form');
        this.$container.setAttribute('class', 'hidden new-conversation-modal w-84 h-1/3 bg-blue-500 px-8 py-4 rounded-lg  ');
        this.$container.addEventListener('submit', this.onSubmit);
        this.$coverrsationName = new InputGroup('ConversationName', 'text', 'conversation-name');
        this.$email = new InputGroup('Email', 'email', 'Email');
        this.$submit = document.createElement('button');
        this.$submit.textContent = 'Create';
        this.$submit.type = 'submit';
        this.$submit.setAttribute('class', ' bg-yellow-500 px-4 py-2 rounded-lg text-white  hover:bg-yellow-600 ');
    }
    onSubmit = (e) => {
        e.preventDefault();
        const email = this.$email.getValue();
        const coverrsationName = this.$coverrsationName.getValue();
        const conversationDocument = {
            members: [email, auth.currentUser.email],
            coverrsationName,
            createdAt: new Date().valueOf(),
        }
        // // using setDoc function to create a new document in the collection
        // const collectionRef = doc(db, "conversations", "hahahhaa");
        // setDoc(collectionRef, newConversationDocument);

         // using addDoc function to create a new document in the collection
        const conversationRef = collection(db, "conversations");
        addDoc(conversationRef, conversationDocument).then(response => {
            //  console.log('response', response);
        }).catch(error => {
            console.log('error', error);
        });


    }
    render() {
        this.$container.appendChild(this.$coverrsationName.render());
        this.$container.appendChild(this.$email.render());
        this.$container.appendChild(this.$submit);
        return this.$container;
    }
}
export default NewConversationModal; 