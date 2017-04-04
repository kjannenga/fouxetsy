$(document).ready(function(){
   $.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(formData){
   	
   	var results = ''
   
   		formData.results.forEach(function (sale){
   			

	   			results += `<div class="sale"> <a href="${sale.url}"> <img src="${sale.Images.url_570xN}"/><div class="info">${sale.title}<br />${sale.Shop.shop_name} ${sale.price}</a></div></div>`

   		})
   		$('main').html(results)
   })
}) 
