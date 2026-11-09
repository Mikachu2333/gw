# DocumentWindows.Item

从指定的 **DocumentWindows** 集合中返回一个 **DocumentWindow** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **DocumentWindows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 集合中要返回的单个对象的索引号 |

## 返回值

DocumentWindow

## 示例


```JavaScript
/*本示例关闭第二个文档窗口*/
function test() {
    Application.Windows.Item(2).Close()
}
```


```JavaScript
/*本示例判断如果存在第二个文档窗口，则将其激活*/
function test() {
    let windows = Application.DocumentWindows
    if (windows.Count >= 2) {
        windows.Item(2).Activate()
    }
}
```
