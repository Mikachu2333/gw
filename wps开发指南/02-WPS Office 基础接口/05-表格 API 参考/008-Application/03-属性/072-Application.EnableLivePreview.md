# Application.EnableLivePreview

设置或返回一个 **Boolean** 值，该值表示是显示还是隐藏在使用支持预览的库时所出现的库预览。如果将此属性设置为 **True** ，则会在应用命令之前显示工作簿预览。可读/写 **Boolean** 类型。



## 语法

express.**EnableLivePreview**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


此属性对应于 **“ET 选项”** 对话框中的 **“启用实时预览”** 复选框。



## 示例


```JavaScript
/*本示例演示在应用命令之前显示工作簿预览。*/
function test() {
    Application.EnableLivePreview = true
}
```


```JavaScript
/*本示例判断如果在应用命令之前显示工作簿预览，则将EnableLivePreview属性设置为false，并通知用户。*/
function test() {
    if (Application.EnableLivePreview) {
        Application.EnableLivePreview = false
        alert("已隐藏实时预览。")
    }
}
```
