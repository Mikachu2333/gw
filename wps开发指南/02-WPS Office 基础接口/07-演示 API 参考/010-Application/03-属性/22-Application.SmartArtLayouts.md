# Application.SmartArtLayouts

返回当前 **Application** 对象的 SmartArt 布局。只读。



## 语法

express.**SmartArtLayouts**

express   一个代表 **Application** 对象的变量。

## 类型

SmartArtLayouts

## 示例


```JavaScript
/*本示例显示应用程序对象的第一个 SmartArt 布局的唯一 Id。*/
function test() {
    alert(Application.SmartArtLayouts.Item(1).Id)
}
```


```JavaScript
/*本示例显示应用程序对象的前五个 SmartArt 布局的名称及对应的类型。*/
function test() {
    let str = ""
    let smartArtLayouts = Application.SmartArtLayouts
    for (let i = 1; i <= 5; i++) {
        str += smartArtLayouts.Item(i).Name + "\t" + smartArtLayouts.Item(i).Category + "\n"
    }
    alert(str)
}
```
