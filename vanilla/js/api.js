const arweave = Arweave.init({
    host: (window.location.host.indexOf("localhost") !== -1 ? 'arweave.net' : window.location.host),
    port: 443,
    protocol: 'https'
});


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', text);
    element.setAttribute('download', filename);
    element.setAttribute("target", "_blank");
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function fileToBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = callback;
}

var fileObject = {};


function arweaveToFile(arweave) {
    download("file.xpi", arweave.base64);
}



$(document).ready(function () {
    console.log("we gucci");
    arweave.network.getInfo().then(console.log);

    $('#btnLogin').click(function() {
        const file = document.querySelectorAll('input[type="file"]')[0].files[0];

    });

    $('#btnUpload').click(function () {
        const file = document.querySelectorAll('input[type="file"]')[1].files[0];
        fileToBase64(file, (evt) => {
            fileObject.base64 = evt.target.result;
        });
    });

    $('#btnDownload').click(function () {
        arweaveToFile(fileObject);

    })

});
