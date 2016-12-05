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
    <form name="form1">
        <input type="text" ng-model="v" d-trigger name="test"  required />
    </form>
    相应的在input下方需要使用ng-if表格式来控制验证信息是否显示(采用ngMessages)
    <div ng-messages="form1.test.$erorr" ng-if=form1.test.$dirty>
         <div ng-message="required">此项必填</div>
    </div>
    
 ```
 示例中当第一次进入页面时，错误验证信息不会显示 ，当鼠标在input上失去焦点后，验证信息显示,注意**ng-if**的使用
 
 + formatter-t
 
 ###### 指令叙述：禁止输入非数字字符（输入无效），对任何合法的且小于配置中 *config.max* 的数据四舍五入的保留 *config.size* 位小数
 ```html
    
     <form name="form1">
        <input type="text" ng-model="v" formatters-t='{"size":5,max:100000000}' name="test" />
    
    </form>
 ```
 此文本框用过*formatters-t*的指令后，当鼠标失去信息后，会保留5位小数据，当输入的值超过100000000时，不出任何处理
 > # 配置文件 #
    config={size:2,max:10000} 
    config.size:小数据点保留的长度 
    config.max:最大数 
