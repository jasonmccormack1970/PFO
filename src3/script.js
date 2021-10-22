const image_input = document.querySelector('#image_input1');
let uploaded_image = '';

image_input.addEventListener('change', function () {
  console.log(image_input.value);

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector(
      '#display_image1'
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '/' + mm + '/' + dd;
  console.log(today);
  document.getElementById('pruchase-date').value = today;
}

window.onload = function () {
  getDate();
};
