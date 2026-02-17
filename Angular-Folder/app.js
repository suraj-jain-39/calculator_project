let app = angular.module('MyApp', []);
app.controller('MyController1', function ($scope) {
    $scope.result = "";
    // Clear the result
    $scope.clear = function () {
        $scope.result = "";
    };

    // Add character to result
    $scope.enter = function (e) {
        if ($scope.result.length === 0 && ['+', '-', 'x', '/', '%', '.', '='].includes(e)) {
            $scope.result = 'Error';
            return;
        }
        if (e === 'm') {
            e = '(-';
        }
        if (e === '()') {
            const openBrackets = ($scope.result.match(/\(/g) || []).length;
            const closeBrackets = ($scope.result.match(/\)/g) || []).length;
            const lastChar = $scope.result.slice(-1);

            // If opening brackets are more and last character is number or ')', insert ')'
            if (openBrackets > closeBrackets && /[\d)]/.test(lastChar)) {
                $scope.result += ')';
            } else {
                // Otherwise, insert '('
                $scope.result += '(';
            }
            return;
        }
        if ($scope.result.length !== 22) {
            $scope.result += e;
        } else {
            alert("22 character is a limit");
        }   
    };

    $scope.$watch('result', function (newVal, oldVal) {
        if (newVal && newVal.length > 22) {
            $scope.result = oldVal; // Revert to previous value
            alert("22 character is a limit");
        }
    });


    $scope.calculate = function () {
        try {
            // Replace multiple operators or spaces and evaluate
            $scope.Result = $scope.result.replace(/x/g, '*').replace(/\s+/g, '').replace(/[^0-9+\-*/%().]/g, ''); // .replace(/[^0-9+\-*/%().]/g, '');
            $scope.finalResult = calculateExpression($scope.Result);
            console.log('final result: ' +  $scope.finalResult);
            $scope.result = $scope.finalResult.toString();
            $scope.rightMenu = document.querySelector(".rightMenu");
            $scope.rightMenu.innerHTML += `<ul><li ng-click="enterExp('${$scope.Result}')">${$scope.Result}</li> <li ng-click="enterExp('${$scope.finalResult}')">= ${$scope.finalResult}</li></ul>`;

        } catch (error) {
            $scope.result = "Error";
        }
    };

    // Function to safely calculate the expression
    // In this context, expression is a string that contains a mathematical expression, such as "2 + 2" or "x * 5". It's a string that will be evaluated as JavaScript code when the new function is created and called.
    function calculateExpression(expression) {
        // Handle percentage calculations
        expression = expression.replace(/(\d+(\.\d+)?)%/g, function (_, number) {
            console.log('number: ' + number);
            return `(${number} / 100)`;
        });
        console.log('expression: ' + expression)
        // Using Function constructor to evaluate expressions (safer than eval)
        return new Function('return ' + expression)();
    }

    //it remove last character at a time
    $scope.del = function () {
        $scope.result = $scope.result.slice(0, -1);
    }

});

app.controller('MyController2', function($scope) { 
    $scope.leftMenu = document.getElementsByClassName('leftMenu')[0];
    $scope.leftMenuIcon = document.getElementsByClassName('leftMenuIcon')[0];
    let openLeftMenu = 1;
    $scope.toggleLeftMenu = function () {
        if (openLeftMenu === 1) {
            $scope.leftMenu.style.left = "0%";
            $scope.leftMenuIcon.style.stroke = "#ffffff";
            openLeftMenu = 0;
        } else {
            $scope.leftMenu.style.left = "-26%";
            $scope.leftMenuIcon.style.stroke = "#505050";
            openLeftMenu = 1;
        }
    }

    $scope.rightMenu = document.getElementsByClassName('rightMenu')[0];
    $scope.historyIcon = document.getElementsByClassName('historyIcon')[0];
    let openHistory = true;
    $scope.toggleHistory = function () {
        if (openHistory) {
            $scope.rightMenu.style.right = "0%";
            $scope.historyIcon.style.fill = "#ffffff";
        } else {
            $scope.rightMenu.style.right = "-26%";
            $scope.historyIcon.style.fill = "#505050";
        }
        openHistory = !openHistory;
    }
    
});