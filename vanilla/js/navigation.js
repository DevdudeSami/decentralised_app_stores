/**
 * Panel
 * 
 * A window essentially
 */
function Panel(id) {
	this.id = id
	this.element = $(`#${id}`)
	this.hide()
}

Panel.prototype.show = function() {
	$(this.element).show()
}

Panel.prototype.hide = function() {
	$(this.element).hide()
}

function NavManager(startPanel) {
	this.stack = [startPanel] // List of Panels
	this.stack[0].show()
}

NavManager.prototype.push = function(panel) {
	this.stack[this.stack.length-1].hide()
	this.stack.push(panel)
	panel.show()
}

NavManager.prototype.back = function() {
	if(this.stack.length == 1) {
		console.log("Nothing to go back to!")
		return
	}

	const curr = this.stack.pop()
	curr.hide()
	this.stack[this.stack.length-1].show()
}

NavManager.prototype.reset = function(startPanel) {
	const curr = this.stack.pop()
	curr.hide()
	this.stack = [startPanel]
	startPanel.show()
}