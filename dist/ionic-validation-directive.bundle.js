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
".validation-item-container input, .validation-item-container select {\n" +
"  width: 100%; }\n" +
"\n" +
".validation-item-container.ionic-style {\n" +
"  margin-top: -1px;\n" +
"  border: 1px solid #ddd; }\n" +
"\n" +
".validation-item-container.animate {\n" +
"  -webkit-transition: border 0.2s linear;\n" +
"  -moz-transition: border 0.2s linear;\n" +
"  -o-transition: border 0.2s linear;\n" +
"  transition: border 0.2s linear; }\n" +
"\n" +
".validation-item-container.ionic-style.has-error {\n" +
"  border-left: 2px solid #ef473a; }\n" +
"\n" +
".list-inset ng-form:first-child .validation-item-container.ionic-style {\n" +
"  border-top-left-radius: 2px;\n" +
"  border-top-right-radius: 2px; }\n" +
"\n" +
".list-inset ng-form:last-child .validation-item-container.ionic-style {\n" +
"  border-bottom-right-radius: 2px;\n" +
"  border-bottom-left-radius: 2px; }\n" +
"\n" +
".validation-item-container .item-container {\n" +
"  -webkit-flex: 1 1 auto;\n" +
"  flex: 1 1 auto; }\n" +
"\n" +
".validation-item-container .item {\n" +
"  -webkit-justify-content: space-between;\n" +
"  justify-content: space-between;\n" +
"  border: 0;\n" +
"  border-radius: 0;\n" +
"  margin-top: 0;\n" +
"  margin-bottom: 0 !important;\n" +
"  margin-left: 0; }\n" +
"\n" +
".validation-item-container.has-error:not(.ionic-style) input {\n" +
"  box-shadow: inset 2px 0 0 #ef473a; }\n" +
"\n" +
".validation-item-container .icon-container {\n" +
"  -webkit-flex: 0 0 auto;\n" +
"  flex: 0 0 auto;\n" +
"  font-size: 16px;\n" +
"  max-width: 0;\n" +
"  opacity: 0; }\n" +
"\n" +
".validation-item-container.animate .icon-container {\n" +
"  -webkit-transition: opacity 0.2s ease-in-out, max-width 0.2s ease-out;\n" +
"  -moz-transition: opacity 0.2s ease-in-out, max-width 0.2s ease-out;\n" +
"  -o-transition: opacity 0.2s ease-in-out, max-width 0.2s ease-out;\n" +
"  transition: opacity 0.2s ease-in-out, max-width 0.2s ease-out; }\n" +
"\n" +
".validation-item-container.has-error .icon-container {\n" +
"  max-width: 40px;\n" +
"  opacity: 1; }\n" +
"\n" +
".validation-item-container .error-icon {\n" +
"  -webkit-align-self: center;\n" +
"  align-self: center;\n" +
"  margin-left: 7px;\n" +
"  z-index: 100; }\n" +
"\n" +
".validation-item-container.ionic-style .error-icon {\n" +
"  margin-right: 16px; }\n" +
"\n" +
".validation-item-container .error-message {\n" +
"  color: #ef473a;\n" +
"  font-size: 14px;\n" +
"  white-space: normal;\n" +
"  overflow: hidden;\n" +
"  max-height: 0; }\n" +
"\n" +
".validation-item-container.animate .error-message {\n" +
"  -webkit-transition: max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  -moz-transition: max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  -o-transition: max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out;\n" +
"  transition: max-height 0.2s ease-in-out, padding-bottom 0.2s ease-in-out; }\n" +
"\n" +
".validation-item-container.ionic-style .error-message {\n" +
"  padding: 0 16px; }\n" +
"\n" +
".validation-item-container.has-error.message-open.ionic-style .error-message {\n" +
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
    '    <div class="validation-item-container" ng-class="{ \'has-error\': formInvalid && (formTouched || formSubmitted), \'message-open\': showErrorMessage, \'ionic-style\': ionicStyle, \'animate\': animate }">\n' +
    '        <div class="validation-item-flex">\n' +
    '            <div class="item-container">\n' +
    '                <ng-transclude></ng-transclude>\n' +
    '            </div>\n' +
    '            <div class="icon-container">\n' +
    '                <i class="icon ion-alert-circled assertive error-icon" on-touch="showErrorMessage = !showErrorMessage"></i>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="error-message" ng-messages="formCtrl.$error" role="alert">\n' +
    '            <div class="error-text" ng-message-exp="key" ng-repeat="(key, value) in ::errors">\n' +
    '                {{ ::value }}\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</ng-form>';


(function () {
    'use strict';
    angular.module('ionic-validation-directive', [])

        .directive('validationItem', ["$timeout", function ($timeout) {

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
        }]);

})();