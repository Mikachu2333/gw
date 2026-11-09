# Window.ScrollIntoView

滚动文档窗口，以便在文档窗口显示指定的区域或图形。



## 语法

express.**ScrollIntoView(obj, Start)**

express   一个代表 **Window** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Obj | 必选 | Object | **Range** 或 **Shape** 对象。 |
| Start | 可选 | any | 如果该区域或形状的左上角出现在文档窗口的左上角，则为 **True** 。如果该区域或形状的右下角出现在文档窗口的右下角，则为 **False** 。默认值为 **True** 。 |

## 返回值

void

## 说明


如果该区域或图形大于文档窗口，Start 参数可以指定该区域或图形的显示部分或获得初始焦点的部分。此方法无法在大纲视图中使用。



## 示例


```JavaScript
/*本示例滚动活动文档，以便可以在文档窗口看到选定内容。*/
function test() {
    ActiveWindow.ScrollIntoView(Selection.Range, true)
}
```


```JavaScript
/*本示例滚动活动文档到第三个段落。*/
function test() {
    range = ActiveDocument.Paragraphs(3).Range
    ActiveWindow.ScrollIntoView(range, false)
}
```
