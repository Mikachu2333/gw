# PrintOptions.PrintHiddenSlides

决定是否打印指定演示文稿中的隐藏幻灯片。可读/写。



## 语法

express.**PrintHiddenSlides**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **PrintHiddenSlides** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ------ |
| **msoFalse**  | 默认值。不打印指定演示文稿中的隐藏幻灯片。 |
| **msoTrue** | 打印指定演示文稿中的隐藏幻灯片。   |



## 示例


```JavaScript
/*本示例打印活动演示文稿的所有幻灯片（不论可见或隐藏）。*/
function test() {
    ActivePresentation.PrintOptions.PrintHiddenSlides = msoTrue
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示是否打印第一篇演示文稿中的隐藏幻灯片。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.PrintHiddenSlides == msoTrue)
}
```
