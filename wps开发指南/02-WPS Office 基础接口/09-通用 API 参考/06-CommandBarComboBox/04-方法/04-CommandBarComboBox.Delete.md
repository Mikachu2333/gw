# CommandBarComboBox.Delete

将 **CommandBarCombo** 控件对象从其集合中删除。在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 语法

express.**Delete(Temporary)**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Temporary | 可选 | any | 如果为 True，则从当前会话中删除此控件。应用程序在下次会话中将再次显示该控件。 |

## 返回值

void