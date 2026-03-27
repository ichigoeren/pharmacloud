const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


/*------------------------
Canvas 
-----------------------*/

const barCanvas =document.getElementById
("barCanvas");

const barChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: ["Anti-inflammatoires", "Antibiotiques" , "Antiviraux", "Cardiologie", "Nutrition"],
        datasets: [{
            label: 'Catégorie de Médicament',
            data: [245, 548, 42, 300, 55 ],
            backgroundColor: [
                "green"
            ]
        }]
    }, 
    options: {
        scales:{
            y: {
                suggestedMax: 900,
                ticks: {
                    font: {
                        
                    }
                }
            },
            x: {
                ticks: {
                    font: {
                        
                    }
                }
            }
        }
    }
})

const pieChart = new Chart(pieCanvas, {
    type: "line",
    data: {
        labels: [
            "Anti-inflammatoires",
            "Antibiotiques",
            "Antiviraux",
            "Cardiologie",
            "Nutrition"
        ],
        datasets: [{
            label: 'Stock',
            data: [10, 5, 2, 3, 25 ],
            backgroundColor: [
                "green",
                "ligthgreen"
            ], 
            hoverOffset: 4
        }]
    } 
    
})