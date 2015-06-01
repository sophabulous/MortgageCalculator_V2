(function () {
    var app = angular.module('calculator', ['ui.bootstrap','rzModule']);
    
    app.controller('calcController', function ($scope) {
        
        $scope.priceSlider = 50;

//        $scope.translate = function(value)
//        {
//            return '$' + value;
//        };
        $scope.mortgageAmount = 0;
        $scope.termNType = {
                value: 1,
                label: '1 year fixed closed'
        };

        $scope.termNTypeOptions = [{
                value: '1',
                label: '1 year fixed closed'
            },{
                value: '2',
                label: '2 year fixed closed'
            },{
                value: '3',
                label: '3 year fixed closed'
            },{
                value: '4',
                label: '4 year fixed closed'
            },{
                value: '5',
                label: '5 year fixed closed'
            },{
                value: '7',
                label: '7 year fixed closed'
            },{
                value: '10',
                label: '10 year fixed closed'
            },{
                value: '5',
                label: '5 year variable closed'
            }];
        
        $scope.amortOptions = [{
                value: '5',
                label: '5 years'
            },{
                value: '10',
                label: '10 years'
            },{
                value: '15',
                label: '15 years'
            },{
                value: '20',
                label: '20 years'
            },{
                value: '25',
                label: '25 years'
            },{
                value: '30',
                label: '30 years'
            }];
            
        $scope.paymentOptions = [{
                value: '12',
                label: 'Monthly'
            },{
                value: '24',
                label: 'Semi-Monthly'
            },{
                value: '24',
                label: 'Bi-Weekly'
            },{
                value: '52',
                label: 'Weekly'
            },{
                value: '24',
                label: 'Accelerated Bi-Weekly'
            },{
                value: '52',
                label: 'Accelerated Weekly'
            }];
        
        $scope.getRate = function () {
            $scope.interestRate = round(0.1 - 0.01 * $scope.termNType.value, 2);
            return $scope.interestRate;
        };
        
        $scope.calcPP = function () {
            return $scope.mortgageAmount / $scope.amortYears.value * $scope.paymentFrequency.value;
        };
        
        $scope.calcIP = function () {
            return $scope.calcPP() * $scope.getRate();
        };
        
        $scope.calcPandI = function () {
            return $scope.calcPP() + $scope.calcIP();
        };
        
        $scope.calcBalance = function () {
            return $scope.mortgageAmount - $scope.calcPP() * $scope.termNType.value;
        };
        
        $scope.$watch('termNType',function(){
            $scope.getRate();
            $scope.calcBalance();
        });
        
        function round(value, decimals) {
            return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
        }

        $scope.$watch('priceSlider',function(){
            $scope.mortgageAmount = $scope.priceSlider;
        });

    });
})();



