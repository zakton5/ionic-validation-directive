
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
                    
                    // This is the ng-form that wraps all of the inputs, selects, etc. within the directive
                    scope.formCtrl = formCtrl;

                    scope.formTouched = false;
                    scope.formSubmitted = false;
                    scope.showErrorIcon = false;
                    scope.showErrorMessage = false;
                    scope.ionicStyle = attrs.ionicStyle === "false" ? false : true;

                    // This was used to automatically check for ionic style inputs, but it causes a delay in between
                    // the time that the page loads and the time that the border around the input loads.
                    // $timeout(function() {
                    //     var itemNodes = element.children()[0].querySelectorAll('.item');
                    //     scope.ionicStyle = itemNodes.length > 0;
                    // });


                    // Only add the animation class the directive has finished loading in the DOM.
                    // This prevents unwanted animations from playing when the directive first loads.
                    $timeout(function () {
                        scope.animate = attrs.animate === "false" ? false : true;
                    });
                                  
                    //-------------------------------------------------------
                    // Watchers
                    //-------------------------------------------------------
                    
                    // Look for ngModelControllers (inputs, selects) within the form in order to keep track
                    // of whether they have been touched or not. Doing this allows showing the error message
                    // to the user only when he/she has shifted focus to another field elsewhere.
                    angular.forEach(formCtrl, function (value, key) {
                        // Only watch objects with ng-model
                        if (typeof value === 'object' && value.hasOwnProperty('$modelValue')) {
                            scope.$watch(function () { return value.$touched; }, function (newVal, oldVal) {
                                if (newVal) {
                                    scope.formTouched = true;
                                }
                            });
                        }
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

                        // It is important that an $apply happens for formInvalid
                        scope.$applyAsync(function (scope) {
                            scope.formInvalid = newVal;
                        });
                        
                        // Hide the error message area when the errors are fixed
                        if (newVal === false) {
                            scope.showErrorMessage = false;
                        }
                    });
                    
                    
                    //-------------------------------------------------------
                    // Event handlers
                    //-------------------------------------------------------
                
                    // Catch the $broadcast('formSubmitted') from the page's controller indicating that the parent form has been submitted
                    scope.$on('formSubmitted', function (e, submitted) {
                        if (!submitted) submitted = true;
                        scope.formSubmitted = submitted;
                    });
                
                    // This watch is used to catch $emit('formTouched') events from child directives
                    scope.$on('formTouched', function (e, touched) {
                        if (!touched) touched = true;
                        scope.formTouched = touched;
                    });



                }
            };
        });

})();