# Application.FontNames

返回一个 **[FontNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FontNames/obj)** 对象，该对象包含所有有效字体的名称。只读。



## 语法

express.**FontNames**

express   一个代表 **Application** 对象的变量。

## 类型

FontNames

## 示例


```JavaScript
/*本示例显示 FontNames 集合中字体名称。*/
function test() {
    for (let i = 1; i <= Application.FontNames.Count; i++) {
        let response = MsgBox(Application.FontNames.Item(i), jsOKCancel)
        if (response == jsResultCancel) {
            break
        }
    }
}
```


```JavaScript
/*本示例在光标处插入所有有效字体的名称。*/
function test() {
    for (let i = 1; i <= Application.FontNames.Count; i++) {
        let str = Application.FontNames.Item(i)
        Selection.TypeText(str + "\n")
    }
}
```
