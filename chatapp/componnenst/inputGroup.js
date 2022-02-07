class InputGroup {
    constructor(lableName, inputType, Placeholder) {

        this.$inputGroup = document.createElement('div');

        this.$label = document.createElement('label');
        this.$label.innerText = lableName;

        this.$input = document.createElement('input');
        this.$input.type = inputType;
        this.$input.placeholder = Placeholder;



    }
    render() {
       this.$inputGroup.appendChild(this.$label);
       this.$inputGroup.appendChild(this.$input);
         return this.$inputGroup;
    }
      
    }



export default InputGroup;