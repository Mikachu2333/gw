# OLEFormat.DoVerb

请求 OLE 对象执行其可用谓词之一，即 OLE 对象为激活其内容而执行的操作。



## 语法

express.**DoVerb(VerbIndex)**

express   一个代表 **OLEFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| VerbIndex | 可选 | any | OLE 对象应执行的动作。如果省略该参数，则发送默认动作。如果 OLE 对象不支持被请求的动作，将发生错误。可以是任意 **WdOLEVerb** 常量。 |

## 返回值

void

## 说明


每个 OLE 对象都支持附加于该对象的一组动作。



## 示例


```JavaScript
/*本示例为活动文档第二个浮动 OLE 对象执行默认动作。*/
function test() {
    ActiveDocument.Shapes.Item(2).OLEFormat.DoVerb()
}
```


```JavaScript
/*本示例在单独的窗口打开第一个文档第二个浮动 OLE 对象。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2)
    shape.OLEFormat.DoVerb(wdOLEVerbOpen)
}
```
