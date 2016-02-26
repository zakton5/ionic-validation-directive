# ionic-validation-directive
A directive for ionic that wraps form inputs and displays their errors.

###### Dependencies
Please make sure you have the following installed already
- ngMessages   [Installation Instructions](https://docs.angularjs.org/api/ngMessages)


## Installation

Install package from bower
```
bower install ionic-validation-directive
```

Include the js and css file in your index.html file:
```html
<script src="lib/ionic-validation-directive/dist/ionic-validation-directive.bundle.min.js"></script>
```

Add the module `ionic-validation-directive` to your application dependencies:
```javascript
angular.module('starter', ['ionic', 'ngMessages', 'ionic-validation-directive'])
```

## Options

You can override some of the default settings for the directive by placing attributes on the directive. See below for usage examples.

| Option      | Default | Description |
|-------------|-----|-----|
| ionic-style | true | Determines whether the directive will be styled as an ionic style input or not |
| animate     | true | Determines whether the error icon and error message will use CSS transitions |

## Examples

To use this directive, you simply need to wrap the standard [ionic inputs](http://ionicframework.com/docs/components/#forms) with the **validation-item** directive. 

You will need to provide an object that contains key, value pairs of the errors and their respective inputs. This keys of this object are the names of the input's errors.

**Important: The name and ng-model attributes are required for this to work. If you exclude either one, then errors will not be detected.**

###### Basic example
```html
<validation-item errors="{ required: 'This field is required', minlength: 'Usernames must have at least 6 characters' }">
  <label class="item item-input">
    <input type="text" name="username" ng-model="formInfo.username" placeholder="Username" min-length="6" required>
  </label>
</validation-item>
```

###### Select example
```html
<validation-item errors="{ required: 'User role is required' }">
  <label class="item item-input item-select">
    <div class="input-label">
      Role
    </div>
    <select name="userrole" ng-model="selectedOption" required>
      <option value="" selected></option>
        <option>Admin</option>
        <option>Reader</option>
        <option>Writer</option>
    </select>
  </label>
</validation-item>
```

###### Regular input with no animation
```html
<validation-item errors="{ required: 'This field is required' }" ionic-style="false" animate="false">
  <input type="text" name="username" ng-model="formInfo.username" required>
</validation-item>
```

## Events
The ionic-validation-directive responds to the following events
- formSubmitted
- formTouched


###### formSubmitted
Broadcast formSubmitted when you would like to let your validation-items know that the parent form has been submitted *so that errors can be shown immediately*. For example, if a form is submitted and calls this function:

```javascript
save() {
  $scope.$broadcast('formSubmitted', true); // Pass true or false
  
  ... Saving stuff
}
```

then all validation-item errors will immediately display even though the inputs may not be dirty.

###### formTouched
Emit formTouched from child directives when they do not have any inputs or selects.

```javascript
scope.$emit('formTouched', true); // Pass true or false
```

The above code would used when **my-directive** has finished making a change to the modelValue.

```html
<validation-item errors="{ customValidator: 'Fix the error in my-directive' }">
  <my-directive ng-model="someValue"></my-directive>
</validation-item>
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details















