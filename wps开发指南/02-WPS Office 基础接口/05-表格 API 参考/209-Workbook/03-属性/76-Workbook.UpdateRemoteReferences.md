# Workbook.UpdateRemoteReferences

如果 ET 对工作簿中的远程引用进行更新，则该值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**UpdateRemoteReferences**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


在新创建的工作簿中， **UpdateRemoteReferences** 属性的默认值为 **True** ，动态数据交换 (DDE) 链接和 OLE 链接会自动进行更新。如果该值为 **False** ，则 DDE 链接和 OLE 链接不会自动进行更新，也不会在重新计算过程中进行更新。



## 示例


```JavaScript
/*本示例将使活动工作簿中的远程引用自动进行更新。*/
function test() {
    ActiveWorkbook.UpdateRemoteReferences = true
}
```


```JavaScript
/*本示例判断如果第一个工作簿会自动更新远程引用就直接提示用户，不会自动更新则将UpdateRemoteReferences属性的值设置为true，并通知用户。*/
function test() {
    if (Workbooks.Item(1).UpdateRemoteReferences) {
        alert("第一个工作簿的远程引用会自动更新")
    } else {
        Workbooks.Item(1).UpdateRemoteReferences = true
        alert("已设置第一个工作簿的远程引用自动更新")
    }
}
```
