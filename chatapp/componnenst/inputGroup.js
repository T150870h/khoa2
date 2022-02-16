class InputGroup {
    $inputGroup;
    $input;
    constructor(lableName, inputType, Placeholder) {
        
        this.$inputGroup = document.createElement('form');
        this.$inputGroup.setAttribute('class', 'flex flex-col mb-4' ) 

        this.$label = document.createElement('label');
        this.$label.innerText = lableName;
        this.$label.setAttribute('class', 'text-white text-lg mb-2 font-bold' );
        
        this.$input = document.createElement('input');
        this.$input.setAttribute('class','py-2 px4 rounded-lg');
        this.$input.type = inputType;
        this.$input.placeholder = Placeholder;

       
    }
    getValue() {
        return this.$input.value; 
    }
   
    render() {
       this.$inputGroup.appendChild(this.$label);
       this.$inputGroup.appendChild(this.$input);
         return this.$inputGroup;
    }
      
    }



export default InputGroup;