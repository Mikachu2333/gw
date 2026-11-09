# OLEObject.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **OLEObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | 如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

Variant

## 示例


```JavaScript
/*此示例选择第一张工作表中的第一个 OLE 对象。*/
function test() {
    Application.Worksheets.Item(1).OLEObjects(1).Select()
}
```


```JavaScript
/*此示例选择活动工作表中的第二个 OLE 对象。*/
function test() {
    ActiveSheet.OLEObjects(2).Select(false)
}
```
