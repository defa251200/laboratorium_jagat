/*!
* jQuery HTML5 Uploader 1.0b
*
* http://www.igloolab.com/jquery-html5-uploader
*/
(function($){$.fn.html5Uploader=function(options){var crlf='\r\n';var boundary="iloveigloo";var dashes="--";var settings={"name":"uploadedFile","postUrl":"Upload.aspx","onClientAbort":null,"onClientError":null,"onClientLoad":null,"onClientLoadEnd":null,"onClientLoadStart":null,"onClientProgress":null,"onServerAbort":null,"onServerError":null,"onServerLoad":null,"onServerLoadStart":null,"onServerProgress":null,"onServerReadyStateChange":null};if(options){$.extend(settings,options);}
return this.each(function(options){var $this=$(this);if($this.is("[type='file']")){$this
.bind("change",function(){var files=this.files;for(var i=0;i<files.length;i++){fileHandler(files[i]);}});}else{$this
.bind("dragenter dragover",function(){return false;})
.bind("drop",function(e){var files=e.originalEvent.dataTransfer.files;for(var i=0;i<files.length;i++){fileHandler(files[i]);}
return false;});}});function fileHandler(file){var fileReader=new FileReader();fileReader.onabort=function(e){if(settings.onClientAbort){settings.onClientAbort(e,file);}};fileReader.onerror=function(e){if(settings.onClientError){settings.onClientError(e,file);}};fileReader.onload=function(e){if(settings.onClientLoad){settings.onClientLoad(e,file);}};fileReader.onloadend=function(e){if(settings.onClientLoadEnd){settings.onClientLoadEnd(e,file);}};fileReader.onloadstart=function(e){if(settings.onClientLoadStart){settings.onClientLoadStart(e,file);}};fileReader.onprogress=function(e){if(settings.onClientProgress){settings.onClientProgress(e,file);}};fileReader.readAsDataURL(file);var xmlHttpRequest=new XMLHttpRequest();xmlHttpRequest.upload.onabort=function(e){if(settings.onServerAbort){settings.onServerAbort(e,file);}};xmlHttpRequest.upload.onerror=function(e){if(settings.onServerError){settings.onServerError(e,file);}};xmlHttpRequest.upload.onload=function(e){if(settings.onServerLoad){settings.onServerLoad(e,file);}};xmlHttpRequest.upload.onloadstart=function(e){if(settings.onServerLoadStart){settings.onServerLoadStart(e,file);}};xmlHttpRequest.upload.onprogress=function(e){if(settings.onServerProgress){settings.onServerProgress(e,file);}};xmlHttpRequest.onreadystatechange=function(e){if(settings.onServerReadyStateChange){settings.onServerReadyStateChange(e,file);}};xmlHttpRequest.open("POST",settings.postUrl,true);if(file.getAsBinary){var data=dashes+boundary+crlf+
"Content-Disposition: form-data;"+
"name=\""+settings.name+"\";"+
"filename=\""+unescape(encodeURIComponent(file.name))+"\""+crlf+
"Content-Type: application/octet-stream"+crlf+crlf+
file.getAsBinary()+crlf+
dashes+boundary+dashes;xmlHttpRequest.setRequestHeader("Content-Type","multipart/form-data;boundary="+boundary);xmlHttpRequest.sendAsBinary(data);}else if(window.FormData){var formData=new FormData();formData.append(settings.name,file);xmlHttpRequest.send(formData);}}};})(jQuery);