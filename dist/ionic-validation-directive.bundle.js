(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".validation-item-flex, .validation-item-container .icon-container {\n" +
"  display: -moz-flex;\n" +
"  display: -ms-flexbox;\n" +
"  display: -webkit-flex;\n" +
"  display: flex; }\n" +
"\n" +
".border-box-style, .validation-item-container {\n" +
"  -moz-box-sizing: border-box;\n" +
"  -webkit-box-sizing: border-box;\n" +
"  box-sizing: border-box; }\n" +
"\n" +
".validation-item-container:not(.ionic-style) input {\n" +
"  width: 100%; }\n" +
"\n" +
".validation-item-container.ionic-style {\n" +
"  margin: -1px;\n" +
"  border: 1px solid #ddd;\n" +
"  position: relative;\n" +
"  z-index: 0; }\n" +
"\n" +
".list-inset .validation-item-container.ionic-style {\n" +
"  margin-left: 0;\n" +
"  margin-right: 0; }\n" +
"\n" +
".card .validation-item-container.ionic-style {\n" +
"  border-left: 0;\n" +
"  border-right: 0; }\n" +
"\n" +
".list-inset ng-form:first-child .validation-item-container.ionic-style {\n" +
"  border-top-left-radius: 2px;\n" +
"  border-top-right-radius: 2px; }\n" +
"\n" +
".list-inset ng-form:last-child .validation-item-container.ionic-style {\n" +
"  border-bottom-right-radius: 2px;\n" +
"  border-bottom-left-radius: 2px; }\n" +
"\n" +
".validation-item-container.ionic-style.animate.has-error {\n" +
"  -webkit-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-start;\n" +
"  -moz-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-start;\n" +
"  -o-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-start;\n" +
"  transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-start; }\n" +
"\n" +
".validation-item-container.ionic-style.has-error {\n" +
"  -webkit-appearance: none;\n" +
"  z-index: 10; }\n" +
"\n" +
".validation-item-container.animate {\n" +
"  -webkit-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  -moz-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  -o-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end; }\n" +
"\n" +
".validation-item-container.ionic-style.has-error.default-error-class {\n" +
"  box-shadow: inset 13px 0 0 -10px #ef473a;\n" +
"  padding-left: 3px; }\n" +
"\n" +
".validation-item-container .item-container {\n" +
"  -webkit-flex: 1 1 auto;\n" +
"  flex: 1 1 auto; }\n" +
"\n" +
".validation-item-container .item.item-input {\n" +
"  border: 0;\n" +
"  border-radius: 0;\n" +
"  margin: 0; }\n" +
"\n" +
".validation-item-container .item.item-input-inset {\n" +
"  border: 0;\n" +
"  padding: 0;\n" +
"  margin: 10.6667px; }\n" +
"\n" +
".validation-item-container.has-error .item.item-input-inset {\n" +
"  margin-right: 0; }\n" +
"\n" +
".validation-item-container.animate:not(.ionic-style) input {\n" +
"  -webkit-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  -moz-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  -o-transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end;\n" +
"  transition: box-shadow 0.2s linear, border 0.2s linear, padding 0.2s linear, z-index 0.2s step-end; }\n" +
"\n" +
".validation-item-container:not(.ionic-style) input {\n" +
"  -webkit-appearance: none; }\n" +
"\n" +
".validation-item-container.has-error:not(.ionic-style) input.default-error-class {\n" +
"  box-shadow: inset 13px 0 0 -10px #ef473a; }\n" +
"\n" +
".validation-item-container .icon-container {\n" +
"  -webkit-flex: 0 0 auto;\n" +
"  flex: 0 0 auto;\n" +
"  font-size: 16px; }\n" +
"\n" +
".validation-item-container .error-icon {\n" +
"  -webkit-align-self: center;\n" +
"  align-self: center;\n" +
"  padding-left: 7px;\n" +
"  margin-right: -25px;\n" +
"  opacity: 0; }\n" +
"\n" +
".validation-item-container.animate .error-icon {\n" +
"  -webkit-transition: opacity 0.2s ease-in-out, margin 0.2s ease-in-out;\n" +
"  -moz-transition: opacity 0.2s ease-in-out, margin 0.2s ease-in-out;\n" +
"  -o-transition: opacity 0.2s ease-in-out, margin 0.2s ease-in-out;\n" +
"  transition: opacity 0.2s ease-in-out, margin 0.2s ease-in-out; }\n" +
"\n" +
".validation-item-container .error-icon.assertive {\n" +
"  color: #ef473a; }\n" +
"\n" +
".validation-item-container.has-error .error-icon {\n" +
"  opacity: 1; }\n" +
"\n" +
".validation-item-container .error-message {\n" +
"  font-size: 14px;\n" +
"  white-space: normal;\n" +
"  overflow: hidden;\n" +
"  max-height: 0;\n" +
"  opacity: 0; }\n" +
"\n" +
".validation-item-container.animate .error-message {\n" +
"  -webkit-transition: opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  -moz-transition: opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  -o-transition: opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  transition: opacity 0.2s ease-in-out, max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out; }\n" +
"\n" +
".validation-item-container.has-error.message-open .error-message {\n" +
"  opacity: 1; }\n" +
"\n" +
".validation-item-container.ionic-style .error-message {\n" +
"  padding: 0 16px; }\n" +
"\n" +
".validation-item-container.ionic-style.has-error.message-open .error-message {\n" +
"  padding-bottom: 4px; }\n" +
"\n" +
"/*\n" +
"\n" +
"These styles are used if multiple inputs are within a validation item\n" +
"They bunch the items closer together and remove borders between them\n" +
"\n" +
"I cannot think of another reason to have multiple inputs within a single validation item\n" +
"unless it is to have a directive using ngModelController that requires multiple inputs\n" +
"\n" +
"*/\n" +
".validation-item-container .item.item-input:not(:first-child) {\n" +
"  padding-top: 0; }\n" +
"\n" +
".validation-item-container .item.item-input:not(:last-child) {\n" +
"  padding-bottom: 0; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:first-of-type > select {\n" +
"  margin-top: 7px; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:last-of-type > select {\n" +
"  margin-bottom: 5px; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:first-of-type:not(:last-of-type) > select {\n" +
"  margin-bottom: -2px; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:last-of-type:not(:first-of-type) > select {\n" +
"  margin-top: 2px; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:first-of-type:not(:last-of-type):after {\n" +
"  margin-top: 2px; }\n" +
"\n" +
".validation-item-container .item.item-input.item-select:last-of-type:not(:first-of-type):after {\n" +
"  margin-top: -4px; }"));

var htmlTemplates = htmlTemplates || {};htmlTemplates['ionic-validation-directive-template.html'] = '<ng-form>\n' +
    '    <div class="validation-item-container" ng-class="{ \'has-error\': showError(), \'message-open\': showErrorMessage, \'ionic-style\': ionicStyle, \'animate\': animate }">\n' +
    '        <div class="validation-item-flex">\n' +
    '            <div class="item-container">\n' +
    '                <ng-transclude></ng-transclude>\n' +
    '            </div>\n' +
    '            <div class="icon-container" on-touch="showErrorMessage = !showErrorMessage">\n' +
    '                <i class="error-icon" ng-class="::errorIcon"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="error-message" ng-class="::errorColor" ng-messages="formCtrl.$error" role="alert">\n' +
    '            <div class="error-text" ng-message-exp="key" ng-repeat="(key, value) in ::errors">\n' +
    '                {{ ::value }}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</ng-form>';


(function () {
    'use strict';
    angular.module('ionic-validation-directive', [])

        .directive('validationItem', ["$timeout", "$animate", function ($timeout, $animate) {

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
                    
                    // The ready variable prevents any calculations from happening before the DOM has completely loaded.
                    var ready = false;      
                    angular.element(document).ready(function () {
                        ready = true;
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
                            if (show) {
                                var marginOffset = (scope.ionicStyle) ? "16px" : "0";
                                errorIcon.style.marginRight = marginOffset;
                            } else {
                                var iconWidth = errorIcon.clientWidth;
                                errorIcon.style.marginRight = "-" + iconWidth.toString() + "px";
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
                        if (!ready)
                            return;
                        
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
        }]);

})();