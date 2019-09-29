function getBoxContents() {
    const nounIn1 = document.getElementById('noun1Input');
    const nounVal1 = nounIn1.value;
    const nounIn2 = document.getElementById('noun2Input');
    const nounVal2 = nounIn2.value;
    const nounIn3 = document.getElementById('noun3Input');
    const nounVal3 = nounIn3.value;
    const adjIn1 = document.getElementById('adj1Input');
    const adjVal1 = adjIn1.value;
    const adjIn2 = document.getElementById('adj2Input');
    const adjVal2 = adjIn2.value;
    const gerIn1 = document.getElementById('gerrund1Input');
    const gerVal1 = gerIn1.value;
    const verbIn1 = document.getElementById('verb1Input');
    const verbVal1 = verbIn1.value;

    const noun1Spans = document.getElementsByClassName('noun1');
    for(let i = 0; i < noun1Spans.length; i++) {
        noun1Spans[i].textContent = nounVal1;
    }
    const noun2Spans = document.getElementsByClassName('noun2');
    for(let i = 0; i < noun2Spans.length; i++) { 
        noun2Spans[i].textContent = nounVal2;
    }
    const noun3Spans = document.getElementsByClassName('noun3');
    for(let i = 0; i < noun3Spans.length; i++) {
        noun3Spans[i].textContent = nounVal3;
    }
    const adj1Span = document.getElementById('adj1');
    adj1Span.textContent = adjVal1;
    const adj2Span = document.getElementById('adj2');
    adj2Span.textContent = adjVal2;
    const gerrund1Span = document.getElementById('gerrund1');
    gerrund1Span.textContent = gerVal1;
    const verb1Span = document.getElementById('verb1');
    verb1Span.textContent = verbVal1;

    let allSpans = document.getElementsByTagName('span');
    for(let i = 0; i < allSpans.length; i++) {
        allSpans[i].textContent.toLowerCase();
    }
}

function revealText() {
    document.getElementById('madLibText').style.visibility = 'visible';

}