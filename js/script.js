$('body').addClass('loaded');
const api_key = "10222670862712756";

$('.card').click(function() {
  let url = `https://www.superheroapi.com/api.php/${api_key}/${$(this).data('id')}`;
  $('body').removeClass('loaded');
  getData(url);
});


function getData(url) {
  $.ajax(url)
  .then(function(data) {
    console.log(data);

    if (data.biography && data.powerstats)
    {
      $('#modal_img').attr('src', data.image.url);
      $('.card_name').text(data.biography['full-name']);
      $('.card_alter').text(data.biography['alter-egos']);
      $('.card_appearance').text(data.biography['first-appearance']);
      $('.card_status span').text(data.biography.alignment);
      $('.card_combat span').text(data.powerstats.combat);
      $('.card_durability span').text(data.powerstats.durability);
      $('.card_intelligence span').text(data.powerstats.intelligence);
      $('.card_power span').text(data.powerstats.power);
      $('.card_speed span').text(data.powerstats.speed);
  
      $('body').addClass('loaded');
  
      $('#exampleModal').modal('show');
    }
    else {
      $('body').addClass('loaded');
      alert('We have some poblems');
    }


  }, function(error) {
    $('body').addClass('loaded');
    alert('Error');
    console.log("error: ", error);
  });
}