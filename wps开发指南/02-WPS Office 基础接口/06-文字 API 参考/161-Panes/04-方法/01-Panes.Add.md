# Panes.Add

返回一个 **Pane** 对象，该对象代表窗口的新窗格。



## 语法

express.**Add(SplitVertical)**

express   一个代表 **Panes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SplitVertical | 可选 | any | 代表要显示在拆分之上的从上至下的窗口百分比的数值。 |

## 返回值

Pane

## 说明


如果将该方法应用于已拆分的窗口，则该方法无效。



## 示例


```JavaScript
/*本示例拆分活动窗口，使上面的窗格占整个窗口大小的百分之三十。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Add(30)
}
```


```JavaScript
/*本示例判断如果活动窗口未拆分，则拆分活动窗口，并使上面的窗格占整个窗口大小的百分之二十。*/
function test() {
    if (ActiveDocument.ActiveWindow.Panes.Count == 1) {
        ActiveDocument.ActiveWindow.Panes.Add(20)
    }
}
```
