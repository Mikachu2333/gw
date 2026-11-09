# PrintOptions.PrintComments

设置或返回是否打印批注。可读/写。



## 语法

express.**PrintComments**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **PrintComments** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| --------- | -------- |
| **msoFalse** | 默认值。不打印批注。                     |
| **msoTrue** | 打印批注。                           |



## 示例


```JavaScript
/*本示例指示 WPP 打印活动演示文稿中的批注。*/
function test() {
    ActivePresentation.PrintOptions.PrintComments = msoTrue
}
```


```JavaScript
/*本示例显示是否打印第一篇演示文稿中的批注。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.PrintComments == msoTrue)
}
```
