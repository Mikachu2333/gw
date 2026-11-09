# Font.Italic

如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**Italic**

express   一个代表 **Font** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （当返回值既可为 **msoTrue** ，也可为 **msoFalse** 时取该值）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。



## 示例


```JavaScript
/*本示例检查所选内容中的倾斜格式并删除所选内容中存在的倾斜格式。*/
function test() {
    if (Selection.Type == wdSelectionNormal) {
        let italic = Selection.Font.Italic
        if (italic == wdUndefined || italic == msoTrue) {
            alert("there is italic text in selection. Click OK to remove.")
            Selection.Font.Italic = msoFalse
        } else {
            alert("No italic text in the selection.")
        }
    } else {
        alert("You need to select some text.")
    }
}
```


```JavaScript
/*本示例显示活动文档的主文档文章中字体是否为倾斜格式。*/
function test() {
    alert(ActiveDocument.Content.Font.Italic === msoTrue)
}
```
