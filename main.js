const handleBarsAppend = (data) => {
  const source = $('#people-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template(data);

  $('body').append(newHTML);
};

const getData = (response) => {
  const peoples = response.results;
  handleBarsAppend(peoples);
};

$.ajax({
  method: 'GET',
  url: 'https://randomuser.me/api/?results=8',
  dataType: 'json',
  success: getData,

  error: function (xhr, text, error) {
    $('#error').append(`<img src="error.jpg" alt="">`);
    console.log('error');
  },
});
