
(function () {
    'use strict';
    angular.module('ionic-validation-directive', [])

        .directive('validationItem', function ($timeout, $animate) {

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
                    scope.formInvalid = false;
                    scope.showErrorIcon = false;
                    scope.showErrorMessage = false;

                    scope.ionicStyle = attrs.ionicStyle === "false" ? false : true;
                    scope.errorColor = attrs.errorColor || "assertive";
                    scope.errorClass = attrs.errorClass || "default-error-class";
                    scope.errorIcon = (attrs.errorIcon || "icon ion-alert-circled") + " " + scope.errorColor;

                    // Only add the animation class when the directive has finished loading in the DOM.
                    // This prevents unwanted animations from playing when the directive first loads.
                    $timeout(function () {
                        scope.animate = attrs.animate === "false" ? false : true;
                    });
                            
                            
                             
                    //-------------------------------------------------------
                    // Functions
                    //-------------------------------------------------------
                    
                    // This determines if error styles should be visible on the input
                    scope.showError = function () {
                        return scope.formInvalid && (scope.formTouched || scope.formSubmitted);
                    }
                    
                    // The reason for these calculation functions is so the transitions will look as smooth as possible. For example,
                    // setting a higher max width than what the element actually is will cause the transition to finish too quickly.
                    // Sets the max width of the error icon container so that the transition plays correctly.
                    function calcIconWidth(show) {
                        // There will not be an error message node if the user didn't supply an object of errors
                        var errorIcon = element.children()[0].querySelector('.error-icon');
                        if (errorIcon) {
                            var iconContainer = element.children()[0].querySelector('.icon-container');
                            if (show) {
                                var containerWidth = errorIcon.clientWidth;
                                iconContainer.style.maxWidth = containerWidth.toString() + 'px';
                            } else {
                                iconContainer.style.maxWidth = '0';
                            }
                        }
                    }

                    function calcMessageHeight(show) {
                        // There will not be an error message node if the user didn't supply an object of errors
                        var errorMessageNode = element.children()[0].querySelector('.error-text');
                        if (errorMessageNode && scope.showError()) {
                            var messageContainer = element.children()[0].querySelector('.error-message');
                            if (show) {
                                var errorMessageHeight = errorMessageNode.clientHeight;
                                messageContainer.style.maxHeight = (errorMessageHeight + 4).toString() + 'px';
                            } else {
                                messageContainer.style.maxHeight = '0';
                            }
                        } else {
                            scope.showErrorMessage = false;
                        }
                    }
                    
                    // Applies the user-provided error class to the container or input, depending on ionicStyle.
                    // ngClass would've been used, but there's no way to easily use it on the transcluded inputs (in case of a non-ionic-style input)
                    // The use of ngAnimate here is necessary as the user's class does not always animate if it is not used.
                    function toggleErrorStyles() {
                        // Apply the style to the container if its an ionic input
                        if (scope.ionicStyle) {
                            var container = element.children()[0];
                            if (scope.showError()) {

                                $animate.addClass(container, scope.errorClass);
                            } else {
                                $animate.removeClass(container, scope.errorClass);
                            }
                        }
                        // otherwise, apply it to the input(s)
                        else {
                            angular.forEach(element.find('input'), function (value, key) {
                                //var el = angular.element(value);
                                if (scope.showError())
                                    $animate.addClass(value, (scope.errorClass));
                                else
                                    $animate.removeClass(value, scope.errorClass);
                            });
                        }

                        calcIconWidth(scope.showError());
                    }
                    
                    
                    
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
                                    toggleErrorStyles();
                                }
                            });
                        }
                    });

                    // When the message is shown or hidden, set the max height of the error-message-container so the transition starts
                    scope.$watch('showErrorMessage', function (newVal) {
                        calcMessageHeight(newVal);
                    });
                    
                    // When the form's validity changes, refresh the scope and close the message container if it is valid
                    scope.$watch('formCtrl.$invalid', function (newVal, oldVal) {
                        if (newVal === oldVal)
                            return;

                        // Hide the error message area if there are no errors
                        if (newVal === false) {
                            scope.showErrorMessage = false;
                        }
                        
                        // It is important that an $apply happens for formInvalid.
                        scope.$applyAsync(function (scope) {
                            scope.formInvalid = newVal;
                            toggleErrorStyles();
                        });

                    });
                    
                    
                    //-------------------------------------------------------
                    // Event handlers
                    //-------------------------------------------------------
                
                    // Catch the $broadcast('formSubmitted') from the page's controller indicating that the parent form has been submitted
                    scope.$on('formSubmitted', function (e, submitted) {
                        if (!submitted) submitted = true;
                        scope.formSubmitted = submitted;
                        toggleErrorStyles();
                    });
                
                    // This watch is used to catch $emit('formTouched') events from child directives
                    scope.$on('formTouched', function (e, touched) {
                        if (!touched) touched = true;
                        scope.formTouched = touched;
                        toggleErrorStyles();
                    });

                }
            };
        });

})();