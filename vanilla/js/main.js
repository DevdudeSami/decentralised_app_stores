let storePanel, loginPanel, nav

$(document).ready(function(){
	storePanel = new Panel("store")
	loginPanel = new Panel("login")

	nav = new NavManager(storePanel)
})

function navStore() {
	nav.reset(storePanel)
}
function navLogin() {
	nav.reset(loginPanel)
}