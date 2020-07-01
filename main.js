// append to html with handlebars
const handleBarsAppend = (data) => {
  const source = $('#people-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template(data);

  $('body').append(newHTML);
};


//storing data from api
const getData = (response) => { 
  const peoples = response.results;
  // console.log(peoples);
  handleBarsAppend(peoples);
};


//api call
$.ajax({ 
  method: 'GET',
  url: 'https://randomuser.me/api/?results=8', //8 -> num of results
  dataType: 'json',
  success: getData,
  //render error img
  error: function (xhr, text, error) {
    $('#error').append(`<img src="error.jpg" alt="">`);
    console.log(text);
  },
});
