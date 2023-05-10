const selectMenu = document.querySelector("#major");

/* {<select name="major" id="major">
		<option>---- 학과 선택 ----</option>
		<option value="archi">건축공학과</option>
		<option value="mechanic">기계공학과</option>
		<option value="indust">산업공학과</option>
		<option value="elec">전기전자공학과</option>
		<option value="computer">컴퓨터공학과</option>
		<option value="chemical">화학공학과</option>
	</select> }*/

function displaySelect(){
	let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
	alert(`${selectedText}를 선택했습니다.`);
}
selectMenu.onchange = displaySelect;

