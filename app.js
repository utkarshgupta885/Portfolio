$(document).ready(function() {
    
const typingElement=$('.typing-effect');

const textToType = typingElement.text();
typingElement.text('');

let i=0;
const typingSpeed=110;

function typeWriter()
{
    if(i<textToType.length)
    {
        typingElement.append(textToType.charAt(i));
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}
typeWriter();
});