# Slide.ApplyTheme

对指定幻灯片应用主题或设计模板。



## 语法

express.**ApplyTheme(themeName)**

express   一个代表 **Slide** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| themeName | 必选 | string | 要应用于 **Slide** 对象的主题文件 （.thmx） 或设计模板文件 （.pot） 的路径和名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片应用保存的主题。*/
function test() {
    ActivePresentation.Slides.Item(1).ApplyTheme("C:\\Program Files\\Office\\Templates\\example.thmx")
}
```


```JavaScript
/*本示例对第一个演示文稿的第一张幻灯片应用保存的设计模板。*/
function test() {
    Presentations.Item(1).Slides.Item(1).ApplyTheme("E:\\example.potx")
}
```
