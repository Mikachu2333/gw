# LineFormat.Creator

返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。




## 语法

express.**Creator**

express   一个代表 **LineFormat** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Creator** 属性用于 Macintosh 下的 WPS Office应用程序




## 示例


```JavaScript
/*以下示例显示关于 myObject 创建者的消息。*/
function test(){
        let myObject = Application.ActivePresentation.Slides.Item(1).Shapes.Item(1)
        if (myObject.Creator == "0x50575054") {
            alert("This is aWPP object")
        }
        else {
            alert("This is not aWPP object")
        }
}
```
