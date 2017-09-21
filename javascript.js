var a=function(){
	$("table").append(
		"<tr>"
		+"<td><select class='text-center'><option>1</option><option>2</option><option>3</option></select></td>"
		+"<td><input></td>"
		+"</tr>"
	);
}

var b=function(){
	if($("#Name").val()==="" || 
	$("#Accused").val()==="" || 
	$("#Violated").val()==="" || 
	$("#Points").val()===""){
		alert("필수 항목을 채우시지 않았습니다.");
	}
	else{
		if(confirm("OK버튼을 누르시면 제출됩니다.")===true){	
			alert("제출 완료.")
		}
		else alert("제출 취소.");
	}
}

var c=function(){
	if(confirm("OK버튼을 누르시면 초기화 됩니다.")===true){
		document.getElementById('Name')='';
		document.getElementById('Accused').value='';
		document.getElementById('Violated').value='';
		document.getElementById('Points').value='';
	}
	else alert("초기화 취소.");
}

$(".add").click(a);
$(".submit").click(b);
$(".init").click(c);

