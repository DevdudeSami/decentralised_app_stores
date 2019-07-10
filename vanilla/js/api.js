const arweave = Arweave.init({
    host: (window.location.host.indexOf("localhost") !== -1 ? 'arweave.net' : window.location.host),
    port: 443,
    protocol: 'https'
});


function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type: mime});
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', text);
    element.setAttribute('download', filename);
    element.setAttribute("target", "_blank");
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    console.log("ye");
}



function fileToBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = callback;
}

var fileObject = {};


function arweaveToFile(arweave) {

    download("flie.xpi", arweave.base64);

}


$(document).ready(function () {
    console.log("we gucci");
    arweave.network.getInfo().then(console.log);

    $('#btnUpload').click(function () {
        const file = document.querySelector('input[type="file"]').files[0];
        fileToBase64(file, (evt) => {
            fileObject.base64 = evt.target.result;
        });
    });

    $('#btnDownload').click(function () {
        arweaveToFile(fileObject);

    })

});
