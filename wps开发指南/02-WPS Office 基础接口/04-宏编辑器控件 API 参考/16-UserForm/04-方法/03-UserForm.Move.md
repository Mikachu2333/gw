# UserForm.Move

将对象移动到参数指定的位置。

## 语法

express.Move(Left, Top, Width, Height)

express   一个代表 UserForm 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | Number | 对象移动后相对于窗口的左边缘的距离 |
| Top | 可选 | Number | 对象移动后相对于窗口的上边缘的距离 |
| Width | 可选 | Number | 对象移动后的预期宽度 |
| Height | 可选 | Number | 对象移动后的预期长度 |

## 说明

将对象移动到参数指定的位置。


## 示例

```javascript
/*将窗体移动到窗口的左上角，并将移动后窗体的长宽设置为500*/
function func1()
{
	UserForm1.Move(100,100,500,500)
}
```
