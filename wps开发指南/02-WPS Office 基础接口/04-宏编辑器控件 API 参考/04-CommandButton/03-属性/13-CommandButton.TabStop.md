# CommandButton.TabStop

您可以通过该属性指定是否可以通过Tab键将焦点移到控件上。

## 语法

express.TabStop

express   一个代表 CommandButton 对象的变量。

## 说明

您可以通过该属性指定是否可以通过Tab键将焦点移到控件上。

| 设置  | 值     | 描述                        |
| --- | ----- | ------------------------- |
| Yes | True  | （默认）您可以通过按下Tab键将焦点移动到该控件上 |
| No  | False | 您无法通过按下Tab键将焦点移动到该控件上     |


## 示例

```javascript
/*将CommandButton设置为可以通过Tab键将焦点移到该控件上*/
function func1()
{
	UserForm1.CommandButton1.TabStop = true
}
```
