# ActionSettings.Count

返回指定集合中的对象数目。只读。



## 语法

express.**Count**

express   一个代表 **ActionSettings** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口选定的第一个形状中 ActionSetting 对象的数量。*/
function test() {
    let actionSettings = ActiveWindow.Selection.ShapeRange.Item(1).ActionSettings
    alert(actionSettings.Count)
}
```
