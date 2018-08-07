var mainApp = angular.module("mainApp", []);
mainApp.controller('PostfixController', function($scope) {
     $scope.cal = function() {
     var expression = $scope.number;
     var postfix = expression.split(" ");
     var postfixStack = [];
        postfix.forEach( function(current) {
        if ( isOperator(current) ) {
             var a = postfixStack.pop();
             var b = postfixStack.pop();
                if(current === "+") {
                    postfixStack.push(parseInt(a) + parseInt(b));
                } else if(current === "-") {
                    postfixStack.push(parseInt(b) - parseInt(a));
                } else if(current === "*") {
                    postfixStack.push(parseInt(a) * parseInt(b));
                } else if(current === "/") {
                    postfixStack.push(parseInt(b) / parseInt(a));
                } else if(current === "^") {
                    postfixStack.push(Math.pow(parseInt(b), parseInt(a)));
                }
        }
        else {
            postfixStack.push(current);
        }   
    });
    function isOperator(toCheck) {
    switch (toCheck) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return true;
        default:
            return false;
    }
}
     var res = postfixStack.pop();
     $scope.result = res;
    }

});
