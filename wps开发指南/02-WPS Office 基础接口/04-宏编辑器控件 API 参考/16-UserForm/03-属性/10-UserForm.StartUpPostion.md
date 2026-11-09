# UserForm.StartUpPostion

返回或者指定UserForm第一次出现的位置。

## 语法

express.StartUpPostion

express   一个代表 UserForm 对象的变量。

## 说明

返回或者指定UserForm第一次出现的位置。

| 设置                 | 值 | 描述                |
| ------------------ | - | ----------------- |
| **Manual**         | 0 | 不指定初始化设置          |
| **CenterOwner**    | 1 | 出现在包含用户窗体的所在窗体的中间 |
| **CenterScreen**   | 2 | 出现在整个屏幕的中间        |
| **WindowsDefault** | 3 | 出现在屏幕的左上角         |


## 示例

```javascript
/*设置UserForm窗体第一次出现时在整个屏幕的中间*/
function func1()
{
	UserForm1.StartUpPostion = 2
}

```
