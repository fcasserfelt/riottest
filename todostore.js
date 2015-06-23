function TodoStore() {
	riot.observable(this);

	var self = this;

	self.todos = [
		{title:'Task 1', done: false},
		{title:'Task 2', done: false}
	]

	self.on('todo_add',  function(newTodo) {
		self.todos.push(newTodo);
		self.trigger('todos_changed', self.todos);
	});

	self.on('todo_remove', function() {
		self.todos.pop();
		self.trigger('todos_changed', self.todos);
	});

	self.on('todo_init', function(){
		self.trigger('todos_changed', self.todos);
	});
}