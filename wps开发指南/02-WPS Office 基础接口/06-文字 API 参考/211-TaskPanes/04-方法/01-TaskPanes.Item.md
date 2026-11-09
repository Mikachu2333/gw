# TaskPanes.Item

将指定任务窗格作为 **TaskPane** 对象返回。



## 语法

express.**Item(Index)**

express   一个代表 **TaskPanes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | WdTaskPanes | 指定的任务窗格。 |

## 返回值

TaskPane

## 示例


```JavaScript
/*本示例将文档操作窗格设置为可见。*/
function test() {
    Application.TaskPanes.Item(wdTaskPaneDocumentActions).Visible = true
}
```


```JavaScript
/*本示例显示文档保护窗格是否可见。*/
function test() {
    alert(Application.TaskPanes.Item(wdTaskPaneDocumentProtection).Visible)
}
```
