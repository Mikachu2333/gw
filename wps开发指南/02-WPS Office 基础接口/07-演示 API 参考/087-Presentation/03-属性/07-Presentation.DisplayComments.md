# Presentation.DisplayComments

决定是否在指定的演示文稿中显示批注。可读/写， **MsoTriState** 类型。



## 语法

express.**DisplayComments**

express   一个代表 **Presentation** 对象的变量。

## 类型

MsoTriState

## 说明


 **DisplayComments** 可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --- | --- |
| **msoFalse** | 在指定的演示文稿中不显示批注。 |
| **msoTrue** | 在指定的演示文稿中显示批注。 |



## 示例


```JavaScript
/*本示例隐藏活动演示文稿中的批注。*/
function test() {
    Application.ActivePresentation.DisplayComments = msoFalse
}
```


```JavaScript
/*本示例判断第一篇演示文稿是否显示批注，并通知用户。*/
function test() {
    if (Presentations(1).DisplayComments == msoTrue) {
        alert("该演示文稿显示批注。")
    } else {
        alert("该演示文稿不显示批注。")
    }
}
```
