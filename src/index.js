var html;
var brand;
var os;
var p={};
var filteredProducts=[];
var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];
$( document ).ready(function() {
    productListing(products);
});

function productListing(products)
{
    html=" <a class='filterBtn' id='filterBrand' href='#' > </div >filterByBrand </a> ";
    html+=" <a class='filterBtn' id='filterOs' href='#'  > </div> filterByOs</a> ";
    html+="<div id='dDown'></div>";
    html += "<table table border='1'  cellpadding='2'>";
                html+="<tr><th>product ID</th><th>product name</th><th>product Brand</th><th>product os</th><th>Action</th></tr>";
            for (var i = 0; i < products.length; i++) 
            {
              html+="<tr>";
              html+="<td>"+products[i].id+"</td>";
              html+="<td>"+products[i].name+"</td>";
              html+="<td>"+products[i].brand+"</td>";
              html+="<td>"+products[i].os+"</td>";
              html+="<td><a class='btnDel' href='#' data-pid='"+products[i].id+"'>X</a></td>";
              html+="</tr>";

            }
              html+="</table>";
              $('#list').html(html);
              //console.log(html);
}

$('#wrapper').on('click', '.btnDel',function()
{
 // console.log("del clicked");
  var pid=$(this).data('pid');
  console.log(pid);
  for(i=0;i<products.length;i++)
  {
      if(products[i].id==pid)
        {
            $(this).parents('tr').remove();
           
        }
  }
  

});

$("#wrapper").on('click','#filterBrand',function()
{   
    //console.log("clicked");
    showBrand();
    
   

});

$("#wrapper").on('click','#filterOs',function()
{
    //console.log("clicked");
    showOs();
});

function showBrand()
{
    brand ="<table id='brandDropDown'>\
    <tr><td><a class='brand' data-brand='Apple' href='#'>Apple</a></tr></td>\
    <tr><td><a class='brand' data-brand='Motorola' href='#'>Motorola</a></tr></td> \
    <tr><td><a class='brand' data-brand='Samsung' href='#'>Samsung</a></tr></td> \
    <tr><td><a class='brand' data-brand='Asus' href='#'>ASUS</a></tr></td> \
    <tr><td><a class='brand' data-brand='Microsoft' href='#'>Microsoft</a></tr></td> \
    </table>"
    $('#dDown').html(brand);
    $('#dDown').toggle(brand);
}

function showOs()
{
    os="<table id='osDropDown'>\
    <tr><td><a class='os' data-os='iOS' href='#'>iOS</a></tr></td>\
    <tr><td><a class='os' data-os='Android' href='#'>Android</a></tr></td> \
    <tr><td><a class='os' data-os='Windows' href='#'>Windows</a></tr></td> \
    </table>"
    $('#dDown').html(os);
    $('#dDown').toggle(os);
}

$("#wrapper").on('click','.brand',function()
{
    console.log("clicked");
    var brand=$(this).data('brand');
    console.log(brand);
    filterBrand(brand);
});

$("#wrapper").on('click','.os',function()
{
    console.log("clicked");
    var os=$(this).data('os');
    console.log(os);
    filterOs(os);
});

function filterBrand(Brand)
{filteredProducts=[];
   // console.log(Brand);
    for(var i=0 ;i<products.length;i++)
    {
        if(products[i].brand===Brand)
        {
            
            p=products[i];
            filteredProducts.push(p);
            console.log(p);
        }
    }
    productListing(filteredProducts);

}

function filterOs(os)
{filteredProducts=[];
    console.log(os);
    for(var i=0 ;i<products.length;i++)
    {
        if(products[i].os===os)
        {
           
            p={};
            p=products[i];
           filteredProducts.push(p);
        }
    }
   productListing(filteredProducts);

}
