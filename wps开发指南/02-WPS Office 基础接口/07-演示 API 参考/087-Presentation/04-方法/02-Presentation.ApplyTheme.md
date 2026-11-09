# Presentation.ApplyTheme

将主题或设计模板应用于指定的演示文稿。



## 语法

express.**ApplyTheme(themeName)**

express   一个代表 **Presentation** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| themeName | 必选 | string | 应用于 **Presentation** 对象的主题文件（.thmx）或设计模板文件（.pot）的路径和名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将名为“WPS.thmx”的主题应用于活动演示文稿。*/
function test() {
    Application.ActivePresentation.ApplyTheme("D:\\WPS.thmx")
}
```


```JavaScript
/*本示例将名为“summary.pot”的设计模板应用于第一篇演示文稿。*/
function test() {
    Presentations.Item(1).ApplyTheme("D:\\summary.pot")
}
```
