class chatIput {
    constructor() {
        this.$container = document.createElement('form');
        this.$container.addEventListener('submit', this.onSubmit);

        this.$input = document.createElement('input');
        this.$input.setAttribute('class',
            'w-full border-indigo-50 px-4 py-2 rounded-full bg-indigo-50')
        this.$input.type = 'text';
        this.$input.placeholder = 'Type your message here';

    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log('dsahgd')
    }
    render() {
        this.$container.appendChild(this.$input);
        return this.$container;
    }
}
export default chatIput;

// firestore Database là nơi cho phép lưu trữ dữ liệu trong firebase
// collection == array
// document == object

// const conversationItem = {
//     members: ['a@gmail.com','thayongnoi@gmail.com'],
//     conversationName:'thien am ben bo vu tru',
//     createdAt: '2020-01-01',
// }
 