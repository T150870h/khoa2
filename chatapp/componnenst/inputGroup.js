class InputGroup {
    // $inputGroup;
    // $input;
    constructor(lableName, inputType, Placeholder) {

        this.$inputGroup = document.createElement('form');
        this.$inputGroup.setAttribute('class', 'flex flex-col mb-4')

        this.$label = document.createElement('label');
        this.$label.innerText = lableName;
        this.$label.setAttribute('class', 'text-white text-lg mb-2 font-bold');

        this.$input = document.createElement('input');
        this.$input.setAttribute('class', 'py-2 px4 rounded-lg');
        this.$input.type = inputType;
        this.$input.placeholder = Placeholder;

        this.$errorMsg = document.createElement('span');
        this.$errorMsg.setAttribute('class', 'text-black text-sm');


    }
    getValue() {
        return this.$input.value;
    }
  
  setErrorMsg(msg) {
        this.$errorMsg.innerText = msg;
    }


    render() {
        this.$inputGroup.appendChild(this.$label);
        this.$inputGroup.appendChild(this.$input);
        this.$inputGroup.appendChild(this.$errorMsg);
        return this.$inputGroup;
    }

}



export default InputGroup;