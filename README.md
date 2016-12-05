### angularJs 常用验证指令集合  

### 指令列表

+ **chineseLength**

###### 指令叙述:验证文字长度（区分全角和半角）一个全角占二个长度，一个半角占一个长度

```html
$scope.test="欠妥欠妥欠工"
<input type="text" chinese-length='10' ng-model="test" />   

```
此处ng-model处的验证是失败的，$scope.test长度超出10个字符为12个长度

---

+ **chineseName**

###### 指令叙述：验证输入字符串的合法性（汉字、下划线、英文字母）

```html
    <script>
        function test($scope){
          $scope.v="hello@@@"
        }
        
    </script>
  
    <input type="text" ng-model="v" chinese-name />
 ```
 此处ng-model处验证是失败的，chinese-name指令只允许出现汉字、下划线、英文字
 
 
 + **dTrigger**
 
 ###### 指令叙述：当鼠标在此指令上失去焦点后，此指把当前指令的ngModel的$dirty值改为true,为了实现鼠标失去焦点时，显示验证信息
 ```html
    <input type="text" ng-model="v" d-trigger />
 ```
