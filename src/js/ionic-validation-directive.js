
(function () {
    'use strict';
    angular.module('ionic-validation-directive', [])

        .directive('validationItem', function ($timeout) {

            return {
                restrict: 'E',
                require: 'form',
                replace: true, // Needed so that directive can find the ng-form element
                transclude: true,
                template: htmlTemplates['ionic-validation-directive-template.html'],
                scope: { errors: '=' },
                link: function (scope, element, attrs, formCtrl) {
                    //-------------------------------------------------------
                    // Setup
                    //-------------------------------------------------------
                    
                    // This is the ng-form that wraps all of the inputs, selects, etc.
                    scope.formCtrl = formCtrl;
                
                    // These flags determine if the error is visible
                    scope.formTouched = false;
                    scope.formSubmitted = false;
                    scope.showErrorIcon = false;
                    scope.showErrorMessage = false;
                    
                    // Determine whether the input style is ionic or not by searching for any
                    // children with the item class.
                    var itemNodes = element.children()[0].querySelectorAll('.item');
                    scope.ionicStyle = itemNodes.length > 0;
                    
                    
                    
                    //-------------------------------------------------------
                    // Watchers
                    //-------------------------------------------------------
                    
                    // Look for ngModelControllers (inputs, selects) within the form in order to keep track
                    // of whether they have been touched or not. Doing this allows showing the error message
                    // to the user only when he/she has shifted focus to another field elsewhere.
                    angular.forEach(formCtrl, function (value, key) {
                        if (typeof value === 'object' && value.hasOwnProperty('$modelValue')) {
                            scope.$watch(function () { return value.$touched; }, function (newVal, oldVal) {
                                if (newVal) {
                                    toggleErrorIcon(true);
                                    
                                    // Requires a bit of delay for the css transition to play for the first time for some unknown reason
                                    $timeout(function () {
                                        scope.formTouched = true;
                                    }, 50);
                                }
                            });
                        }
                    });

                    function toggleErrorIcon(show) {
                        // If it is supposed to become visible, show it immediately so that the animation will be seen
                        if (show && formCtrl.$invalid) {
                            scope.showErrorIcon = true;
                        } 
                        // Otherwise, wait until the animation is over
                        else {
                            $timeout(function () {
                                scope.showErrorIcon = false;
                            }, 200);
                        }
                    }
                
                    // Catch the broadcast from the page's controller indicating that the parent (master) form has been submitted
                    scope.$on('formSubmitted', function (e, submitted) {
                        if (!submitted) submitted = true;

                        toggleErrorIcon(submitted);
                        scope.formSubmitted = submitted;
                    });
                
                    // This watch is used to catch touched events from child directives
                    scope.$on('formTouched', function (e, touched) {
                        if (!touched) touched = true;

                        toggleErrorIcon(touched);
                        scope.formTouched = touched;
                    });
                    
                    // When the message is shown or hidden, set the max height of the error-message-container so the transition starts
                    scope.$watch('showErrorMessage', function (newVal) {
                        var messageContainer = element.children()[0].querySelector('.error-message');
                        if (newVal) {
                            var errorMessageNode = element.children()[0].querySelector('.error-text');
                            // There will not be an error message node if the user didn't supply an object of errors
                            if (errorMessageNode) {
                                var errorMessageHeight = element.children()[0].querySelector('.error-text').clientHeight;
                                messageContainer.style.maxHeight = (errorMessageHeight + 4).toString() + 'px';
                            }
                        } else {
                            messageContainer.style.maxHeight = '0';
                        }
                    });

                    // When the form's validity changes, refresh the scope and close the message container if it is valid
                    scope.$watch('formCtrl.$invalid', function (newVal, oldVal) {
                        toggleErrorIcon(newVal);

                        // This is SOOOO important!! Fake errors will appear if an apply does not happen.
                        // It is important that an $apply happens for formInvalid. This is done automatically by $timeout.
                        // scope.$applyAsync(function (scope) {
                        //     scope.formInvalid = newVal;
                        // });
                        
                        $timeout(function () {
                            scope.formInvalid = newVal;
                        }, 50);
                        
                        
                        // Hide the error message area when the errors are fixed
                        if (newVal === false) {
                            scope.showErrorMessage = false;
                        }
                    });


                }
            };
        });

})();