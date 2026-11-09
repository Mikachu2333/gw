# View.ShowHeading

显示所有高于指定标题级别的标题，隐藏子标题和正文。



## 语法

express.**ShowHeading(Level)**

express   一个代表 **View** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Level | 必选 | number（int4 精度） | 指大纲标题的级别（可取 1 到 9 之间数值）。 |

## 返回值

void

## 说明


如果不是大纲视图或者主控文档视图，此方法将导致出错。



## 示例


```JavaScript
/*本示例将活动窗口切换到大纲视图，并显示所有以“标题 1”样式为格式的文本。隐藏正文和其他类型的标题。*/
function test() {
    let view = ActiveDocument.ActiveWindow.View
    view.Type = wdOutlineView
    view.ShowHeading(1)
}
```


```JavaScript
/*本示例将第一个窗口切换到大纲视图，并显示所有以“标题 1”、“标题 2”或“标题 3”样式为格式的文本。*/
function test() {
    let view = Windows.Item(1).View
    view.Type = wdOutlineView
    view.ShowHeading(3)
}
```
