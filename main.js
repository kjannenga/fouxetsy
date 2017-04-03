$(document).ready(function(){
   $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(formData){
   	console.log(formData)
   	var results = ''
   	
   		$(".searchbutton").on('click', function (){
   			
   		})
   		formData.results.forEach(function (item){
   			console.log(item);

	   			results += `<div class="item"><a href="${item.url}"> <img src="${item.Images[0].url_570xN}"/><div class="info">${item.title}<br />${item.shop_name} <span>${item.price}</span></a></div></div>`

   		})
   		$('main').html(results)
   })
}) 
