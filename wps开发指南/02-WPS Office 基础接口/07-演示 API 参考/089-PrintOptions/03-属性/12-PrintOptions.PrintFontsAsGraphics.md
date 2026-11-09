# PrintOptions.PrintFontsAsGraphics

决定是否将 TrueType 字体作为图形打印。可读/写。



## 语法

express.**PrintFontsAsGraphics**

express   一个代表 **PrintOptions** 对象的变量。

## 类型

MsoTriState

## 说明


 **PrintFontsAsGraphics** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ---- | ------ |
| **msoFalse**  | 不将 TrueType 字体作为图形打印。 |
| **msoTrue** | 将 TrueType 字体作为图形打印。   |



## 示例


```JavaScript
/*本示例指定将活动演示文稿中的 TrueType 字体作为图形打印。*/
function test() {
    ActivePresentation.PrintOptions.PrintFontsAsGraphics = msoTrue
}
```


```JavaScript
/*本示例显示是否将第一篇演示文稿中的 TrueType 字体作为图形打印。*/
function test() {
    let printOptions = Presentations.Item(1).PrintOptions
    alert(printOptions.PrintFontsAsGraphics == msoTrue)
}
```
