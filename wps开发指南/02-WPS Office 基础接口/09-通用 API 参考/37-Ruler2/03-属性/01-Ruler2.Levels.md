# Ruler2.Levels

获取一个代表大纲文本格式的 **[RulerLevels2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/RulerLevels2/obj)** 对象。只读。



## 语法

express.**Levels**

express   一个代表 **Ruler2** 对象的变量。

## 类型

RulerLevels2

## 示例


```JavaScript
/*本示例运行于表格组件，显示第一张工作表上第二个形状（文本框）中 RulerLevel2 对象的数量。*/
function test() {
    let ruler2 = Worksheets.Item(1).Shapes.Item(2).TextFrame2.Ruler
    alert(ruler2.Levels.Count)
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作表中第一个形状（文本框）中 RulerLevels2 对象的实际类型。*/
function test() {
    let ruler2 = ActiveSheet.Shapes.Item(1).TextFrame2.Ruler
    alert(ruler2.Levels.constructor.name)
}
```
