class KeyboardController {
    constructor(targetId) {
        this.targetId = targetId;
	this.hidden = true;
        this.caps = false;
        this.setupKeys();
    }

    setupKeys() {
        this.setupCharacterKeys();
        this.setupSpecialKeys();
    }

    setupCharacterKeys() {
        let controller = this;
        $( ".key" ).not( ".key-special" ).click(function( event ) {
            controller.applyCharacterKeyToTarget( $( this ).html() );
 
        });
    }

    setupSpecialKeys() {
        let controller = this;
        $( ".key-special" ).click(function( event ) {
            let command = $( this ).html();
            switch(command) {
                case "Shift":
                    controller.toggleCaps();
                    break;
                case "Enter":
                    controller.applyCharacterKeyToTarget("\n");
            }
        });
    }

    applyCharacterKeyToTarget(character) {
        let currentText = $( this.targetId ).val();
        let newText;
        if(character == "Bksp") {
            newText = currentText.substr(0, currentText.length-1);
        }
        else if(character == "-&gt;| Tab") {
            newText = currentText + "    ";
        }
        else {
            newText = currentText + character;
        }
        $( this.targetId ).val(newText);
        if(this.caps) {
            this.toggleCaps();
        }
    }

    toggleCaps() {
        let newCaps = !this.caps;
        this.caps = newCaps;
        $( ".key-letter" ).html(function( event ) {
            if(newCaps) {
                return $( this ).html().toUpperCase();
            }
            else {
                return $( this ).html().toLowerCase();
            }
        });
    }

    toggleHidden() {
        this.hidden = !this.hidden;
        if(this.hidden) {
            $( "#kcontainer" ).css('display', 'none');
        }
        else {
            $( "#kcontainer" ).css('display', 'block');
        }
    }

}

// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
    const keyboardController = new KeyboardController($( "#input-box" ));
    $("#keyboard-toggle-button").click(function(){
        keyboardController.toggleHidden();
    });
});
