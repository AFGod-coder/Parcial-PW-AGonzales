document.getElementById('cambiarTexto').addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('.texto');
    const texts = [
        'La fotosíntesis es el proceso por el cual las plantas convierten la luz solar en energía.',
        'El agua cubre aproximadamente el 71% de la superficie de la Tierra.',
        'La gravedad es la fuerza que atrae a los objetos hacia el centro de la Tierra.',
        'El sistema solar está compuesto por el Sol y todos los cuerpos celestes que orbitan a su alrededor.',
        'La célula es la unidad básica de la vida en todos los organismos vivos.'
    ];
    paragraphs.forEach((paragraph, index) => paragraph.textContent = texts[index % texts.length]);
});

document.getElementById('cambiarColor').addEventListener('click', function() {
    const body = document.querySelector('body');
    const currentColor = body.style.backgroundColor;
    body.style.backgroundColor = currentColor === 'rgb(81, 145, 210)' ? '#ffffff' : '#5191d2';
});


