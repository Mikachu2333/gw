# TextEdit.Move

将对象移动到参数指定的位置。

## 语法

express.Move(Left, Top, Width, Height)

express   一个代表 TextEdit 对象的变量。

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
/*将TextEdit1移动到窗体左上角，并将移动后的Label长宽设置为100*/
function func1()
{
    UserForm1.TextEdit1.Move(100,100,100,100)
}
```
