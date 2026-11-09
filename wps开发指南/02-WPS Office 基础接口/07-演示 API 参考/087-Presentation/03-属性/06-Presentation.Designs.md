# Presentation.Designs

返回一个 **[Designs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Designs/obj)** 对象，该对象代表设计模板的集合。



## 语法

express.**Designs**

express   一个代表 **Presentation** 对象的变量。

## 类型

Designs

## 示例


```JavaScript
/*本示例显示活动演示文稿上每个幻灯片设计模板的名称。*/
function test() {
    let designs = Application.ActivePresentation.Designs
    for (let i = 1; i <= designs.Count; i++) {
        alert("The design name is " + designs.Item(i).Name)
    }
}
```


```JavaScript
/*本示例为第一篇演示文稿添加名为“TestDesignsName”的幻灯片设计模板。*/
function test() {
    Presentations.Item(1).Designs.Add("TestDesignsName", 1)
}
```
