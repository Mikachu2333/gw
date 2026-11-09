# PrintOptions.PrintInBackground

决定是否在后台打印指定的演示文稿。可读/写。



## 语法

express.**PrintInBackground**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **PrintInBackground** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ------ |
| **msoFalse**  | 不在后台打印指定演示文稿。 |
| **msoTrue** | 默认值。在后台打印指定的演示文稿，这意味着可以在打印的同时继续工作。   |



## 示例


```JavaScript
/*本示例在后台打印活动演示文稿。*/
function test() {
    ActivePresentation.PrintOptions.PrintInBackground = msoTrue
    ActivePresentation.PrintOut()
}
```


```JavaScript
/*本示例显示是否在后台打印第一篇演示文稿。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.PrintInBackground == msoTrue)
}
```
