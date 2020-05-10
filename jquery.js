$(document).ready(function(){

  var container = $('#card--collection')
  var auxCards = []
  var value = 1
  $.ajax({
    type: 'GET',
    url: 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72',
    success: function(data){

      $.each(data, function(i, data){
        
        auxCards[i] = '<div class="card--item"><img src="'+ data.photo +'"alt=""><div class="card--content"><div class="card--text"><h1>'+ data.name +'<span>'+ data.property_type+'</span></h1></div><div class="card--price"><h3>R$ '+ data.price +'</h3><div class="button__see--more"><a>Ver hospedagem</a></div></div></div></div></div>'
        container.append( auxCards[i])
        var i 
      return auxCards 
  })

    }})
})

