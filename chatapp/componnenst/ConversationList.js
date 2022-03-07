import { signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import {
    doc,
    getDoc,
    getDocs,
    getFirestore,
    collection,
    query,
    where,
    onSnapshot, 
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
import ConversationItem from "./ConversationItem.js";
import NewConversationButton from "./NewConversationButton.js";
import NewConversationModal from "./NewConversationModal.js";
import{auth, db} from "../constants/commons.js";
class ConversationList {
    constructor(setActiveConversation) {
        this._setActiveConversation = setActiveConversation;
        this.$container = document.createElement('div');
        this.$container.setAttribute('class', 'w-1/4 h-screen px-4 pt-4 overflow-auto');
        // this.temp = new ConversationItem();
        this.$newConversationModal = new NewConversationModal();
        // console.log( this.$newConversationModal.$container )
        this.$newConversation = new NewConversationButton(this.$newConversationModal.$container);

        this.$sighOutButton = document.createElement('button');
        this.$sighOutButton.textContent = 'Sign Out';
        this.$sighOutButton.setAttribute('class', 'w-full px-4 py-2 border text-white font-bold bg-red-400 cursor-pointer rounded-lg hover:bg-red-500');
        this.$sighOutButton.addEventListener('click', this.signOut);

        this.createConversationFromCollection();

    };
    signOut = () => {
        signOut(auth).then(() => {
            alert('signed out');
        }).catch((err) => {
            alert('err.message');
        })
    }
    async createConversationFromCollection() {
        //  // get collection from firebase
        // const conversationRef = doc(db, 'conversations', '68VbCEXm0wFdiSMWjPvY');
        // const data = await getDoc(conversationRef)
        // console.log(data.data())
        //----------------------------------------------------
        // // get all document from clllection
        // const conversationsRef = collection(db, "conversations");
        // const data = await getDocs(conversationsRef);
        // data.forEach((document) => {
        //     const conversationItem = new ConversationItem(document.data());
        //     this.$container.appendChild(conversationItem.render());
        // });
        //----------------------------------------------------
        // query documen from collection ( createdAt === number)
        // const conversationsRef = collection(db, "conversations");
        // const q = query(conversationsRef, where("createdAt", "<", 20000));
        // const data = await getDocs(q);
        // data.forEach((document) => {
        //   console.log("document", document.data());
        // });
        //----------------------------------------------------
        // listen for realtime update 1 document
        // const documentRef = doc(db, "conversations", "fKq4R0mYHJ3S5xtoNF3j");
        // onSnapshot(documentRef, (snapshot) => {
        //     console.log('Current data', snapshot.data());
        // })
        //----------------------------------------------------
        //listen for realtime update all collection
        console.log(auth.currentUser.email)
        const conversationsRef = collection(db, "conversations");
        const q = query(conversationsRef, where('members', 'array-contains', auth.currentUser.email));
        onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const conversationDoc = change.doc.data();
                    let conversationItem = new ConversationItem(conversationDoc,  this._setActiveConversation );
                    this.$container.appendChild(conversationItem.render());
                }

            })
        })
       
        // mockConversions.forEach((conversation) => {
        //     let conversationItem = new ConversationItem(conversation);
        //     this.$container.appendChild(conversationItem.render());
        // })
    }
    //----------------------------------------------------
    render(container) {
        this.$container.appendChild(this.$newConversation.render());
        this.$container.appendChild(this.$newConversationModal.render());
        this.$container.appendChild(this.$sighOutButton);
        //    console.log( this.$newConversationModal.$container)
        // for (let i = 0; i < 5; i++) {
        //     let temp = new ConversationItem(i);
        //     this.$container.appendChild(temp.render());
        // }
          
        // for(let i = 0; i < mockConversions.length; i++) {
        //     console.log(mockConversions[i])
        //      let conversationItem = new ConversationItem(mockConversions[i]);

        //         this.$container.appendChild(conversationItem.render());
        // }
        // this.$container.appendChild(this.temp.render());

        container.appendChild(this.$container);
    }
}
export default ConversationList;