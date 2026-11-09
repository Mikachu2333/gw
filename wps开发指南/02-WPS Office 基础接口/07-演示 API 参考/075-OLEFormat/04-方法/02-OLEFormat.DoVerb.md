# OLEFormat.DoVerb

请求 OLE 对象执行其中一个动作。



## 语法

express.**DoVerb(Index)**

express   一个代表 **OLEFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | number（int 精度） | 要执行的动作。如果忽略该参数，则执行默认动作。 |

## 返回值

void

## 说明


使用 **[ObjectVerbs](#TODO)** 属性可确定 OLE 对象的可用动作。



## 示例


```JavaScript
/*本示例对活动演示文稿中第一张幻灯片的第一个形状执行默认动作，其中第一个形状是链接或嵌入的 OLE 对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.Type == msoEmbeddedOLEObject || shape.Type == msoLinkedOLEObject) {
        shape.OLEFormat.DoVerb()
    }
}
```


```JavaScript
/*本示例对活动演示文稿中第一张幻灯片的第一个形状执行最后一个 OLE 动作，其中第一个形状是链接或嵌入的 OLE 对象。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.Type == msoEmbeddedOLEObject || shape.Type == msoLinkedOLEObject) {
        shape.OLEFormat.DoVerb(shape.OLEFormat.ObjectVerbs.Count)
    }
}
```
