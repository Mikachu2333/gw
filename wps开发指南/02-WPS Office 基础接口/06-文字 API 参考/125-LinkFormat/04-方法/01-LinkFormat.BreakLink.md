# LinkFormat.BreakLink

断开源文件与指定 OLE 对象、图片或链接域之间的链接。



## 语法

express.**BreakLink()**

express   一个代表 **LinkFormat** 对象的变量。

## 返回值

void

## 说明


使用该方法后，在源文件发生变化的情况下，链接结果不会自动更新。



## 示例


```JavaScript
/*本示例更新活动文档中所有的 OLE 对象，然后断开链接。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoLinkedOLEObject) {
            shapes.Item(i).LinkFormat.Update()
            shapes.Item(i).LinkFormat.BreakLink()
        }
    }
}
```


```JavaScript
/*本示例断开第一个文档中第二个形状的链接。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2)
    shape.LinkFormat.BreakLink()
}
```
