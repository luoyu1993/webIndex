﻿function ajaxRequest(e){e=e||{},e.type=(e.type||"GET").toUpperCase(),e.dataType=e.dataType||"json";var t,s=formatParams(e.data);window.XMLHttpRequest?t=new XMLHttpRequest:window.ActiveObject&&(t=new ActiveXObject("Microsoft.XMLHTTP")),"GET"==e.type?(t.open("GET",e.url+"?"+s,!0),t.withCredentials=!0,t.setRequestHeader("x-requested-with","XMLHttpRequest"),t.send(null)):"POST"==e.type&&(t.open("POST",e.url,!0),t.withCredentials=!0,t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.setRequestHeader("x-requested-with","XMLHttpRequest"),t.send(s)),t.onreadystatechange=function(){if(4==t.readyState){var s=t.status;s>=200&&s<300||304==s?e.success&&e.success(JSON.parse(t.responseText,t.responseXML)):e.error&&e.error(s)}}}function formatParams(e){var t=[];for(var s in e)t.push(encodeURIComponent(s)+"="+encodeURIComponent(e[s]));return t.push(("v="+Math.random()).replace(".")),t.join("&")}ajaxRequest({type:"POST",url:"https://www.sanjieke.cn/user/exclusiveInvitationCode",success:function(e){if(1==e.status||"1"==e.status){var t=document.getElementsByClassName("exclusive");for(ec in t)t[ec].innerHTML='<a href="http://www.sanjieke.cn/user/exclusiveInvitationCode" class="exclusive_code">专属邀请码</a>'}},error:function(e){console.log(e)}});