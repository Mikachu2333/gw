# TableStyleElement.StripeSize

返回或设置条带的大小。可读/写 **Long** 类型。



## 语法

express.**StripeSize**

express   一个代表 **TableStyleElement** 对象的变量。

## 类型

number（int4 精度）

## 说明


此属性不会应用于所有 **TableStyleElement** 对象。它只应用于 **xlColumnStripe1** 、 **xlColumnStripe2** 、 **xlRowStripe1** 和 **xlRowStripe2** 类型。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张列表的列条纹1样式元素条带的大小。*/
function test() {
    let listObj = ActiveSheet.ListObjects.Item(1)
    alert(listObj.TableStyle.TableStyleElements.Item(xlColumnStripe1).StripeSize)
}
```


```JavaScript
/*本示例将第一张工作表上第一张列表的行条纹2样式元素条带的大小设置为2。*/
function test() {
    let listObj = Worksheets.Item(1).ListObjects.Item(1)
    listObj.TableStyle.TableStyleElements.Item(xlRowStripe2).StripeSize = 2
}
```
