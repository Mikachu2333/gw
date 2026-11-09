# Graphic.LockAspectRatio

如果指定的形状在调整大小时其原始比例保持不变，则此属性为 **msoTrue** 。如果调整大小时可以分别更改形状的高度和宽度，则此属性为 **msoFalse** 。 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型，可读写。



## 语法

express.**LockAspectRatio**

express   一个代表 **Graphic** 对象的变量。

## 类型

MsoTriState

## 说明


| **MsoTriState** 可为以下 **MsoTriState** 常量之一。 |
| ------------------------------------------ |
| **msoCTrue**                               |
| **msoFalse** 。调整大小时可以分别更改形状的高度和宽度。          |
| **msoTriStateMixed**                       |
| **msoTriStateToggle**                      |
| **msoTrue** 。指定的形状在调整大小时其原始比例保持不变。          |



## 示例


```JavaScript
/*本示例显示活动工作表中右页脚图片在调整大小时其原始比例是否保持不变。*/
function test() {
    let graphic = ActiveSheet.PageSetup.RightFooterPicture
    alert(graphic.LockAspectRatio == msoTrue)
}
```


```JavaScript
/*此示例设置第一张工作表中左页脚图片在调整大小时可以分别更改图片的高度和宽度。*/
function test() {
    let graphic = Worksheets.Item(1).PageSetup.LeftFooterPicture
    graphic.LockAspectRatio = msoFalse
}
```
