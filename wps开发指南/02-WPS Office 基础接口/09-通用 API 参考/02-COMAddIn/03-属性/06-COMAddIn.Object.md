# COMAddIn.Object

获取或设置一个对象引用。可读/写。



## 语法

express.**Object**

express   一个代表 **COMAddIn** 对象的变量。

## 类型

Object

## 说明


 **Object** 属性是一个可读写属性，可存储任何对象引用。从这个角度来讲，它类似于某些 ActiveX 控件的通用 **Tag** 属性。

在某些情况下， **Object** 属性返回指定的 **COMAddIn** 对象所代表的对象。其他情况下，它默认返回 **null** 。



## 示例


```JavaScript
/*本示例运行于各组件，将 COM 加载项“example.Test1”所代表的对象存储在变量“object”中。*/
function test() {
    let object = Application.COMAddIns.Item("example.Test1").Object
}
```


```JavaScript
/*本示例运行于各组件，判断如果第一个 COM 加载项已连接，则将该 COM 加载项所代表的对象存储在变量“object”中。*/
function test() {
    let comAddIn = Application.COMAddIns.Item(1)
    if (comAddIn.Connect) {
        let object = comAddIn.Object
    }
}
```
