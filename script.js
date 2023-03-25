const btn_toggle =  document.querySelector('.btn-toggle');
const sidebar =  document.querySelector('.sidebar');
const logo =  document.querySelector('.logo');
const wrapper =  document.querySelector('.wrapper');

btn_toggle?.addEventListener("click", () => {
 sidebar?.classList.toggle('active');
 if(sidebar?.classList.contains('active')){
    logo?.setAttribute('style', "display:flex")
    wrapper?.setAttribute('style', "left:240px;width:calc(100% - 240px)");
    return
 }
 logo?.setAttribute('style', "display: none")
 wrapper?.setAttribute('style','left:85px');
})


// ====== table Js ======

var tbody = document.querySelector("tbody");
		var pageUl = document.querySelector(".pagination");
		var itemShow = document.querySelector("#itemperpage");
		// @ts-ignore
		var tr = tbody.querySelectorAll("tr");
		var emptyBox = [];
		var index = 1;
		var itemPerPage = 8;

		for(let i=0; i<tr.length; i++){ emptyBox.push(tr[i]);}

		// @ts-ignore
		itemShow.onchange = giveTrPerPage;
		function giveTrPerPage(){
			itemPerPage = Number(this.value);
			// console.log(itemPerPage);
			displayPage(itemPerPage);
			pageGenerator(itemPerPage);
			getpagElement(itemPerPage);
		}

		function displayPage(limit){
			// @ts-ignore
			tbody.innerHTML = '';
			for(let i=0; i<limit; i++){
				// @ts-ignore
				tbody.appendChild(emptyBox[i]);
			}
			// @ts-ignore
			const  pageNum = pageUl.querySelectorAll('.list');
			pageNum.forEach(n => n.remove());
		}
		displayPage(itemPerPage);

		function pageGenerator(getem){
			const num_of_tr = emptyBox.length;
			if(num_of_tr <= getem){
				// @ts-ignore
				pageUl.style.display = 'none';
			}else{
				// @ts-ignore
				pageUl.style.display = 'flex';
				const num_Of_Page = Math.ceil(num_of_tr/getem);
				// @ts-ignore
				for(i=1; i<=num_Of_Page; i++){
					const li = document.createElement('li'); li.className = 'list';
					// @ts-ignore
					const a =document.createElement('a'); a.href = '#'; a.innerText = i;
					// @ts-ignore
					a.setAttribute('data-page', i);
					li.appendChild(a);
					// @ts-ignore
					pageUl.insertBefore(li,pageUl.querySelector('.next'));
				}
			}
		}
		pageGenerator(itemPerPage);
		// @ts-ignore
		let pageLink = pageUl.querySelectorAll("a");
		let lastPage =  pageLink.length - 2;
		
		function pageRunner(page, items, lastPage, active){
			// @ts-ignore
			for(button of page){
				// @ts-ignore
				button.onclick = e=>{
					const page_num = e.target.getAttribute('data-page');
					const page_mover = e.target.getAttribute('id');
					if(page_num != null){
						index = page_num;

					}else{
						if(page_mover === "next"){
							index++;
							if(index >= lastPage){
								index = lastPage;
							}
						}else{
							index--;
							if(index <= 1){
								index = 1;
							}
						}
					}
					pageMaker(index, items, active);
				}
			}

		}
		// @ts-ignore
		var pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
		pageRunner(pageLink, itemPerPage, lastPage, pageLi);

		function getpagElement(val){
			// @ts-ignore
			let pagelink = pageUl.querySelectorAll("a");
			let lastpage =  pagelink.length - 2;
			// @ts-ignore
			let pageli = pageUl.querySelectorAll('.list');
			pageli[0].classList.add("active");
			pageRunner(pagelink, val, lastpage, pageli);
			
		}
	
		
		
		function pageMaker(index, item_per_page, activePage){
			const start = item_per_page * index;
			const end  = start + item_per_page;
			const current_page =  emptyBox.slice((start - item_per_page), (end-item_per_page));
			// @ts-ignore
			tbody.innerHTML = "";
			for(let j=0; j<current_page.length; j++){
				let item = current_page[j];					
				// @ts-ignore
				tbody.appendChild(item);
			}
			Array.from(activePage).forEach((e)=>{e.classList.remove("active");});
     		activePage[index-1].classList.add("active");
		}





		// search content 
		var search = document.getElementById("search");
		// @ts-ignore
		search.onkeyup = e=>{
			const text = e.target.value;
			for(let i=0; i<tr.length; i++){
				const matchText = tr[i].querySelectorAll("td")[2].innerText;
				if(matchText.toLowerCase().indexOf(text.toLowerCase()) > -1){
					tr[i].style.visibility = "visible";
				}else{
					tr[i].style.visibility= "collapse";
				}
			}
		};




