function newRadius() {
    let topLeft = document.getElementById('top_left').value + document.getElementById('top_left_unit').value;
    let topRight = document.getElementById('top_right').value + document.getElementById('top_right_unit').value;
    let bottomRight = document.getElementById('bottom_right').value + document.getElementById('bottom_right_unit').value;
    let bottomLeft = document.getElementById('bottom_left').value + document.getElementById('bottom_left_unit').value;
    let textArea = document.getElementById('text_area').value;
    console.log(topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft)

    document.getElementById('userBox').style.borderRadius = topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft;
    document.getElementById('text_area').innerHTML = ' ' + 'border-radius: ' + topLeft + ' ' + topRight + ' ' + bottomRight + ' ' + bottomLeft + ';';
}

function copyClipboard() {
    let copyText = document.getElementById('text_area');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');

    alert('Copied to Clipboard!')
}

