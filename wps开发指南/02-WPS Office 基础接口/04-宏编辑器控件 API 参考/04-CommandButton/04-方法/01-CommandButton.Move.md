# CommandButton.Move

将指定对象移动到参数指定的坐标

## 语法

express.Move(Left, Top, Width, Height)

express   一个代表 CommandButton 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Left | 必选 | Number | 对象移动后相对于窗口的左边缘的距离 |
| Top | 可选 | Number | 对象移动后相对于窗口的上边缘的距离 |
| Width | 可选 | Number | 对象移动后的预期宽度 |
| Height | 可选 | Number | 对象移动后的预期长度 |

## 说明

将指定对象移动到参数指定的坐标


## 示例

```javascript
/*将CommandButton移动到窗体的左上角，并将移动后CommandButton的长宽设置为100*/
function func1()
{
	UserForm1.CommandButton1.Move(100,100,100,100)
}
```
