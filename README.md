### angularJs 常用验证指令集合  

### 指令列表

+ **chineseLength**

**指令叙述:验证文字长度（区分全角和半角）一个全角占二个长度，一个半角占一个长度**

```html
$scope.test="欠妥欠妥欠工"
<input type="text" chinese-length='10' ng-model="test" />   

```
此处ng-model处的验证是失败的，$scope.test长度超出10个字符为12个长度




