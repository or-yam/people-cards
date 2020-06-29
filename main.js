const getData = (response) => {
  peoples = response.results;

  const source = $('#people-template').html();
  const template = Handlebars.compile(source);
  const newHTML = template(peoples);
  
  console.log(peoples);
  $('body').append(newHTML);
};

$.ajax({
  url: 'https://randomuser.me/api/?results=8',
  dataType: 'json',
  success: getData,
});
