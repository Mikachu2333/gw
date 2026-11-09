# UserForm.Controls

返回控件的窗体、子窗体、报告或者区块的控件合集。

## 语法

express.Controls()

express   一个代表 UserForm 对象的变量。

## 说明

返回控件的窗体、子窗体、报告或者区块的控件合集。


## 示例

```javascript
/*通过button名获取button对象，并打印button名*/
function func1()
{
	var buttonName = UserForm1.CommandButton1.Name
	Console.log(buttonName)
	var controlSet = UserForm1.Controls(buttonName)
	Console.log(controlSet.Name)
}
```
