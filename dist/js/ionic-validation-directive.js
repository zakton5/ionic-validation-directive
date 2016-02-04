var htmlTemplates = htmlTemplates || {};htmlTemplates['ionic-validation-directive-template.html'] = '<ng-form>\n' +
    '    <div class="validation-item-container" ng-class="{ \'has-error\': formInvalid && (formTouched || formSubmitted), \'message-open\': showErrorMessage, \'ionic-style\': ionicStyle }">\n' +
    '        <div class="validation-item-flex">\n' +
    '            <div class="item-container">\n' +
    '                <ng-transclude></ng-transclude>\n' +
    '            </div>\n' +
    '            <div class="icon-container">\n' +
    '                <i class="icon ion-alert-circled assertive error-icon" ng-show="formInvalid && (formTouched || formSubmitted)" on-touch="showErrorMessage = !showErrorMessage"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="error-message-container">\n' +
    '            <div class="error-message" ng-messages="formCtrl.$error" role="alert" ng-show="formInvalid && (formTouched || formSubmitted) && showErrorMessage">\n' +
    '                <div ng-message-exp="key" ng-repeat="(key, value) in errors">\n' +
    '                    {{ value }}\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</ng-form>';


(function () {
    'use strict';
    angular.module('ionic-validation-directive', [])

        .directive('validationItem', function () {

            return {
                restrict: 'E',
                require: 'form',
                replace: true, // Needed so that directive can find the ng-form element
                transclude: true,
                template: htmlTemplates['ionic-validation-directive-template.html'],
                scope: { errors: '=' },
                link: function (scope, element, attrs, formCtrl) {
                    // This is the ng-form that wraps all of the inputs, selects, etc.
                    scope.formCtrl = formCtrl;
                
                    // These flags determine if the error is visible
                    scope.formTouched = false;
                    scope.formSubmitted = false;
                    scope.showErrorMessage = false;
                    
                    // Determine whether the input style is ionic or not by searching for any
                    // children with the item class.
                    var itemNodes = element.children()[0].querySelectorAll('.item');
                    scope.ionicStyle = itemNodes.length > 0;
                
                    // Catch the broadcast from the page's controller indicating that the parent (master) form has been submitted
                    scope.$on('formSubmitted', function (e, submitted) {
                        scope.formSubmitted = submitted;
                    });
                
                    // This watch is used to catch touched events from child directives
                    scope.$on('formTouched', function (e, touched) {
                        scope.formTouched = touched;
                    });


                    scope.$watch('formCtrl.$invalid', function (newVal, oldVal) {
                        // This is SOOOO important!! Fake errors will appear if an apply does not happen.
                        scope.$applyAsync(function (scope) {
                            scope.formInvalid = newVal;
                        });
                        
                        // Hide the error message area when the errors are fixed
                        if (newVal === false)
                            scope.showErrorMessage = false;
                    });
                
                    // Look for ngModelControllers (inputs, selects) within the form in order to keep track
                    // of whether they have been touched or not. Doing this allows showing the error message
                    // to the user only when he/she has shifted focus to another field elsewhere.
                    angular.forEach(formCtrl, function (value, key) {
                        if (typeof value === 'object' && value.hasOwnProperty('$modelValue')) {
                            scope.$watch(function () { return value.$touched; }, function (newVal, oldVal) {
                                if (newVal)
                                    scope.formTouched = true;
                            });
                        }
                    });
                }
            };
        });

})();