app = angular.module("myApp",
    ['bg.repeat',
    'bg.directives']
).controller("MyController", MyController);

function MyController($timeout) {
    var self = this;
    var numberOfItems = 100;
    this.isEven = isEven;
    this.showEven = true;
    this.hideFirstItem = false;

    self.items = [];
    
    for (var i = 0; i < numberOfItems; i++) {
        self.items.push({
            id: i,
            text: "Item" + i,
            isEven: isEven(i)
        });
    }
}

function isEven(number) {
    return number % 2 === 0;
}
