function createStack() {
    var items = []
    return {
      push(item){
        items.push(item)
      },
      pop(){
        return items.pop()
      },
      getList(){
        return items
      }
    }
  }
  
let stack = createStack()

stack.push(10);
stack.push(5);
stack.pop();

console.log(stack.items);
