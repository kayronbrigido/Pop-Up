function iniciaPopUp(popupID){

	if (localStorage.fecharPopUp !== popupID){

		const popup = document.getElementById(popupID);
		popup.classList.add('mostrar');

		popup.addEventListener('click', (e) => { 

			if (e.target.id == 'botao-fechar'){
				popup.classList.remove('mostrar');
			}

			if (e.target.id == 'nao-mostrar'){
				popup.classList.remove('mostrar');
				localStorage.fecharPopUp = popupID
			}

		 });
	}
}


iniciaPopUp('pop-up-cadastro');
