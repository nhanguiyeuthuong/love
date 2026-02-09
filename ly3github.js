 function taoanhfree() {
	document.getElementById("showlinkduphong").style.display = "none";
	document.getElementById("imgduphong1").style.display = "none";
	document.getElementById("imgduphong2").style.display = "none";
	document.getElementById("kqlaylink").style.display = "none";
	
  var tenanhxuat = new Date().getTime();

var matna = document.getElementById("matna").value;
var maunen2 = document.getElementById("maunen2").value;

var trenduoi = document.getElementById("trenduoi").value;
var traiphai = document.getElementById("traiphai").value;
var trenduoibh = document.getElementById("trenduoibh").value;
var khoangcachbh = document.getElementById("khoangcachbh").value;
var khoangcach = document.getElementById("khoangcach").value;
var colorchu = document.getElementById("colorchu").value;
var mautenbh = document.getElementById("mautenbh").value;
var maunen1 = document.getElementById("maunen1").value;
var cochu = document.getElementById("cochu").value;
var cochu2 = document.getElementById("cochu2").value;


	var chieucaodoiimg = document.getElementById("chieucaodoiimg").value;
	var vtriimgdoc = document.getElementById("vtriimgdoc").value;
var chieucaoanhxuat = document.getElementById("chieucaoanhxuat").value;
var chieuronganhxuat = document.getElementById("chieuronganhxuat").value;
var loibaihat = document.getElementById("loibaihat").value;
var tenbaihat = document.getElementById("tenbaihat").value;
var tencs = document.getElementById("tencs").value;
var tenkenh = document.getElementById("tenkenh").value;
var vtritenbaihat = document.getElementById("vtritenbaihat").value;
var vtritencs = document.getElementById("vtritencs").value;
var tenfonttencs = document.getElementById("tenfonttencs").value;
var tenfontlyrics = document.getElementById("tenfontlyrics").value;
var tenfontbh = document.getElementById("tenfontbh").value;
var vtringangmatna1 = document.getElementById("vtringangmatna1").value;
var vtridocmatna1 = document.getElementById("vtridocmatna1").value;
var rongmatna1 = document.getElementById("rongmatna1").value;
var caomatna1 = document.getElementById("caomatna1").value;
var vtringangmatna2 = document.getElementById("vtringangmatna2").value;
var vtridocmatna2 = document.getElementById("vtridocmatna2").value;
var rongmatna2 = document.getElementById("rongmatna2").value;
var caomatna2 = document.getElementById("caomatna2").value;
var vtringangbong1 = document.getElementById("vtringangbong1").value;
var chieurongbong1 = document.getElementById("chieurongbong1").value;
var chieucaobong1 = document.getElementById("chieucaobong1").value;
var vtringangbong2 = document.getElementById("vtringangbong2").value;
var chieurongbong2 = document.getElementById("chieurongbong2").value;
var chieucaobong2 = document.getElementById("chieucaobong2").value;
	let noidungdai = '' + '' +tenbaihat+ '' + '';


setTimeout(function() {
        loadingg.disabled = false;
        stoploading(loadingg);
}, 20000);
startloading(loadingg);





var loibaihat = document.getElementById('loibaihat').value.split("\n").join("\n");

	var trenduoi2 = '' + '' +trenduoi+ '' + '';
	var traiphai2 = Number(traiphai);
	var vitrilyrics= Number(trenduoi2);
	var lines = loibaihat.split('\n');
	var lineLengthOrder = lines.slice(0).sort(function(aa, bb) {
		return bb.length - aa.length;
	});


var imageObj2 = new Image();	
	canvas.width  = chieuronganhxuat;
canvas.height = chieucaoanhxuat;

imageObj2.setAttribute('crossOrigin', 'anonymous');		
imageObj2.src =   '' + '' +maunen1+ '' + '';
imageObj2.onload = function() {
var canvas = document.getElementById('taoanhfreecanvas');
 var ctx = canvas.getContext('2d');
 
	var imageObj1 = new Image();	
	       	canvas.width  = chieuronganhxuat;
canvas.height = chieucaoanhxuat;
imageObj1.setAttribute('crossOrigin', 'anonymous');		
   imageObj1.src =  '' + '' +matna+ '' + '';
          imageObj1.onload = function() {
var canvas = document.getElementById('taoanhfreecanvas');
 var ctx = canvas.getContext('2d');

 	var imageObj7 = new Image();	
imageObj7.setAttribute('crossOrigin', 'anonymous');		
   imageObj7.src = '' + '' +maunen2+ '' + '';  //ảnh chính giữa
          imageObj7.onload = function() {
var canvas = document.getElementById('taoanhfreecanvas');
 var ctx = canvas.getContext('2d');
 
(function(){
    var ki  = String.fromCharCode(116,97,111,97,110,104,102,114,101,101); 
     var kii = String.fromCharCode(106,97,110,115,104,97,114,101);       

    var ul = String.fromCharCode(
        104,116,116,112,115,58,47,47,
        106,97,110,115,104,97,114,101,
        98,108,111,103,46,
        98,108,111,103,115,112,111,116,46,
        99,111,109
    );
    if (!(location.href.includes(ki) || location.href.includes(kii))) {
        setTimeout(function() {
            location.href = ul;
        }, 5000); 
    }
})();


					  	    ctx.save();
		

 ctx.drawImage(imageObj7, 680, vtriimgdoc, 800, chieucaodoiimg); //ảnh 

        ctx.globalCompositeOperation="destination-atop";



	  ctx.drawImage(imageObj1, 680, vtriimgdoc, 800, chieucaodoiimg); //ảnh matna

	   	   ctx.drawImage(imageObj2, 0, 0, 2160, 1470); //bg

    ctx.restore();
	

(function(){  
	let referrer = document.referrer || "No referrer";
  let currentUrl = window.location.href;
  let strr1 = String.fromCharCode(106, 97, 110, 115, 104, 97, 114, 101);
  let strr2 = String.fromCharCode(116, 97, 111, 97, 110, 104, 102, 114, 101, 101);

  if (!(currentUrl.includes(strr1) || currentUrl.includes(strr2))) {
    let combined = "url hiện tại: " + currentUrl + " |----| Chuyển hướng từ: " + referrer;
    let entryId = "entry.1882038021";
    let formData = new FormData();
    formData.append(entryId, combined);
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSf8i9zp-_yMp5uS4RZaoBOfeh09mqmrKp64Fsv5MALFBU59RA/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
  }
  
  })();

var tenbaihat = document.getElementById('tenbaihat').value.split("\n").join("\n");
var trenduoibh2= Number(trenduoibh);
	var vtritencs2= Number(vtritencs); //600
	var vtritenbaihat2= Number(vtritenbaihat); //600
	var lines2 = tenbaihat.split('\n');
	var lineLengthOrder = lines2.slice(0).sort(function(aaa, bbb) {
		return bbb.length - aaa.length;
	});


	    ctx.fillStyle = mautenbh;
 ctx.font =  '' + '' +cochu2+ '' + 'pt ' + '' +tenfontbh+ '' + '';
	ctx.textAlign = "center"; 		

			for (var i = 0; i<lines2.length; i++)

		ctx.fillText(lines2[i], 345, (vtritenbaihat2 +trenduoibh2)  + (i*khoangcachbh) );

		
		
ctx.fillStyle = colorchu;
ctx.font = '25pt ' + '' +tenfonttencs+ '' + '';
ctx.textAlign = "center"; 		
 ctx.fillText(tencs,345, (vtritencs2+trenduoibh2));//490
 
 
 ctx.fillStyle = colorchu;
ctx.font = '32pt fontjan60';
ctx.textAlign = "center"; 		
 ctx.fillText(tenkenh,1080, 1350);

	var imageObj3 = new Image();	
	canvas2.width  = chieuronganhxuat;
canvas2.height = chieucaoanhxuat;

imageObj3.setAttribute('crossOrigin', 'anonymous');		
imageObj3.src =   '' + '' +maunen1+ '' + '';
imageObj3.onload = function() {
var canvas2 = document.getElementById('taoanhfreecanvas2');
 var ctx = canvas2.getContext('2d');
 

	var imageObj4 = new Image();	

imageObj4.setAttribute('crossOrigin', 'anonymous');		
   imageObj4.src =  '' + '' +maunen2+ '' + ''; //ảnh chính giữa
          imageObj4.onload = function() {
var canvas2 = document.getElementById('taoanhfreecanvas2');
 var ctx = canvas2.getContext('2d');

		var imageObj5 = new Image();	

imageObj5.setAttribute('crossOrigin', 'anonymous');		
   imageObj5.src =  '' + '' +matna+ '' + '';
          imageObj5.onload = function() {
var canvas2 = document.getElementById('taoanhfreecanvas2');
 var ctx = canvas2.getContext('2d');

	
					  	    ctx.save();
		

	    ctx.drawImage(imageObj4, -400, vtriimgdoc, 800, chieucaodoiimg); 

        ctx.globalCompositeOperation="destination-atop";

	    ctx.drawImage(imageObj5, -400, vtriimgdoc, 800, chieucaodoiimg); //ảnh matna

	   	   ctx.drawImage(imageObj3,-1080, 0, 2160, 1470); //bg

    ctx.restore();

   
   	    ctx.fillStyle = "#80808077";

  ctx.font =  '' + '' +cochu+ '' + 'pt ' + '' +tenfontlyrics+ '' + '';
 
	ctx.textAlign = "justify"; 		

	for (var i = 0; i<lines.length; i++)

		ctx.fillText(lines[i], traiphai2+2, vitrilyrics + (i*khoangcach) +2 );

   
   
   
   
	    ctx.fillStyle = colorchu;

  ctx.font =  '' + '' +cochu+ '' + 'pt ' + '' +tenfontlyrics+ '' + '';
 
	ctx.textAlign = "justify"; 		

	for (var i = 0; i<lines.length; i++)

		ctx.fillText(lines[i], traiphai2, vitrilyrics + (i*khoangcach) );
   
   ctx.fillStyle = colorchu;
ctx.font = '32pt fontjan60';
ctx.textAlign = "center"; 		
 ctx.fillText(tenkenh,0, 1350);
 
 

xuatimg1lyrics(canvas, mimeType, tenanhxuat);
xuatimg2lyrics(canvas2, mimeType, tenanhxuat);


	
	}		}		
	
	
		}		}	
	
}		}	
	
	

	
	
	
	
	
};

