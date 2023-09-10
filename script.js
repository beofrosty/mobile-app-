document.getElementById('button1').addEventListener('click', function () {
    document.getElementById('image1').style.display = 'block';
    document.getElementById('image2').style.display = 'none';
});

document.getElementById('button2').addEventListener('click', function () {
    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'block';
});
