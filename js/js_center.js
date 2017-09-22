function confirmDelete() {
	confirm('คุณต้องการลบรายการใช่หรือไม่ ?');
}

function confirmApproveCode() {
	confirm('กรุณากรอกรหัสอนุมัติเพื่อยืนยันย้ายหน่วยเบิกจ่าย');
}

function confirmCopyAccount() {
	confirm('บัญชีสวัสดิการเหมือนกับบัญชีบำนาญใช่หรือไม่ ?');
}

function confirmCancelCheque() {
	confirm('ยืนยันการยกเลิกเช็คใช่หรือไม่ ?');
}

function toggle(target, startDisplay) {
	var el = document.getElementById(target);
	
	if (startDisplay == 'block') {
		if (el.style.display == "none") {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	} else if (startDisplay == 'none') {
		if (el.style.display == "block") {
			el.style.display = "none";
		} else {
			el.style.display = "block";
		}
	};
}		

function toggle2(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if (text.innerHTML == "Collapse All") {
    	ele.style.display = "none";
  	} else if (text.innerHTML == "Expand All") {
    	ele.style.display = "block";
  	} 
}

function toggleAll(contentDiv, controlDiv) {
		var text = document.getElementById(controlDiv);
	
        if (contentDiv.constructor == Array) {
                for(i=0; i < contentDiv.length; i++) {
                     toggle2(contentDiv[i], controlDiv);
                }
        } else {
               toggle2(contentDiv, controlDiv);
        }		 
		//--- SwitchText ---
		if (text.innerHTML == "Collapse All") {
			text.innerHTML = "Expand All";
		} else if (text.innerHTML == "Expand All") {
			text.innerHTML = "Collapse All";
		} 
}

function selectText(selectText, controlDiv) {
		var text = document.getElementById(controlDiv);
		//--- SelectText ---
		text.innerHTML = selectText;
}

function expand(target) {
	var el = document.getElementById(target);
	el.style.display = "block";
}		

function expandArray(contentDiv) {	
        if (contentDiv.constructor == Array) {
                for(i=0; i < contentDiv.length; i++) {
                     expand(contentDiv[i]);
                }
        }
        else {
               expand(contentDiv);
        }
}	

function collapse(target) {
	var el = document.getElementById(target);
	el.style.display = "none";
}		

function collapseArray(contentDiv) {	
        if (contentDiv.constructor == Array) {
                for(i=0; i < contentDiv.length; i++) {
                     collapse(contentDiv[i]);
                }
        }
        else {
               collapse(contentDiv);
        }
}	
	
function popup(url,name,windowWidth,windowHeight){      
	myleft=(screen.width)?(screen.width-windowWidth)/2:100;   
	mytop=(screen.height)?(screen.height-windowHeight)/2:100;     
	properties = "width="+windowWidth+",height="+windowHeight;  
	properties +=",scrollbars=yes, top="+mytop+",left="+myleft;     
	window.open(url,name,properties);  
}  

function checkUncheckAll(theElement) {
     var theForm = theElement.form, z = 0;
	 for(z=0; z<theForm.length;z++){
      if(theForm[z].type == 'checkbox' && theForm[z].name != 'checkall'){
	    theForm[z].checked = theElement.checked;
	  }
     }
}