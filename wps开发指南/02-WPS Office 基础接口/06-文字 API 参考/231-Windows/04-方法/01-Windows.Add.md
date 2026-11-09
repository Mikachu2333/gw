# Windows.Add

返回一个 **Window** 对象，该对象代表文档的新窗口。



## 语法

express.**Add(Window)**

express   一个代表 **Windows** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Window | 可选 | any | 需要再打开一个窗口的 **Window** 对象。如果省略该参数，则为活动文档打开一个新窗口。 |

## 返回值

Window

## 说明


当为某个文档打开多个窗口时，在窗口标题中会显示冒号 (：) 和数字。



## 示例


```JavaScript
/*本示例为显示在活动窗口中的文档打开一个新窗口。*/
function test() {
    Application.Windows.Add()
}
```


```JavaScript
/*本示例为第一个文档打开一个新窗口。*/
function test() {
    Application.Windows.Add(Application.Documents.Item(1).Windows.Item(1))
}
```
