#  从Visual Basic转到 JavaScript

---

**一、 JSAPI接口的差异**

**1\. 方法的差异**

(1) vb的方法可以不加括号，但jsapi中所有的方法都需要加括号，如果方法不加括号会被js语法判定为属性。

```javascript
Application.Workbooks(1).Close
```

```javascript
Application.Workbooks.Item(1).Close()
```

(2) vb的方法支持给部分参数赋值。但js对缺省的参数需要用undefined占位补齐，如下面例子中为Find方法的第一和第三个参数赋值，在js中Find方法第二个参数需要用undefined占位补齐

```javascript
Range("A1:N29").Find("香港特别", LookIn:=xlValues).Select
```

```javascript
Application.ActiveSheet.Range("A1:N29").Find("我",undefined, xlValues).Select();
```

(3) vb可通过数组方式取集合中的对象，jsapi必须通过Item方法获取集合中的对象，其中要注意二维数组取值时需要将value要改成Value2

```javascript
Application.Workbooks(1).Close
```

```javascript
Application.Workbooks.Item(1).Close()
```

//以下是二维数组的取值方法

```javascript
cells(2,3).value
```

```javascript
Application.Cells.Item(2,3).Value2
```

**2\. 属性的差异**

(1) vb中调用书写错误的属性会报错，js不会报错，这是一个bug，所以特别注意。

```javascript
Application.ActiveDocument.Name111 不报错
```

(2) vb支持thisdocument对象，jsapi暂时不支持该对象，如果遇到thisdocument对象，可以用ActiveDocument代替

```javascript
MsgBox (Application.ThisDocument.Name)
```

```javascript
MsgBox (Application.ActiveDocument.Name)
```

**3\. 事件的差异**

jside的导航栏展示和自动补全的事件比较少，但js支持的事件基本和vb一致，下面给出一个vb事件转换为jside中事件的例子

```javascript
Private Sub Workbook_SheetSelectionChange(ByVal Target As Range)
Dim i As Integer
IF Target.Column>6 And Target.Column>37 && Target.Row>6 And Target.Row Mod 2 = 1 And Cells(Target.Row -1, 5).Value <> “”
Then
    With Target.Validation
        .Delete
        .Add Tpye:=xlValidateList,AlertStyle:=xlValidAlertStop,Operator:=xlBetween,Formular1:="=区域城市！$A2:$A30000")
        .IncellDropdown = true
```

```javascript
function Workbook_SheetSelectionChange(Sh, Target) {
    if(Target.Column>6 && Target.Column>37 && Target.Row>6 && (Target.Row)%2n==1 && Cells.Item(Target.Row -1n, 5).Value2 !==””) {
        var temptarget = Target.Validation
        temptarget.Delete()
        temptarget.Add(xlValidateList,xlValidAlertStop,xlBetween,"=区域城市！$A2:$A30000")
        temptarget.IncellDropdown = true
    }
}
```

**二、函数定义**

**1\. vb用sub ... end sub关键字定义函数，js用funtion{}关键字定义函数**

```javascript
Public(Private) Sub AddTemplate()
    MsgBox "d"
End Sub
```

```javascript
function AddTemplate() {
    MsgBox（"d"）
}
```

**三、数据类型**

**1\. vb在数据定义时需要指明类型，但是js是动态类型，赋值后才有类型,js包括的基本类型：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol，声明这些类型都用关键字var**

```javascript
Dim i As Integer
```

```javascript
var i
```

```javascript
Dim j As String
```

```javascript
var j
```

**2\. 基本类型对比**

| js类型    | vb类型                                |
| ------- | ----------------------------------- |
| boolean | Boolean                             |
| number  | Integer，Long，LongLong，Single，Double |
| string  | String                              |

**3.vb的bool类型首字母大写，js中都是小写**

```javascript
True, False
```

```javascript
true, false
```

**4.字符串**

js字符串使用反斜杠“\\”转义字符把特殊字符转换为字符串字符:

| 代码   | 结果 | 描述  |
| ---- | -- | --- |
| \\'  | '  | 单引号 |
| \\"  | "  | 双引号 |
| \\\\ | \\ | 反斜杠 |

因此，在常见的文件路径的场景，需要采用“/”或者“\\\\”(Windows)来作为路径分隔符：

```javascript
function test()
{
    Workbooks.Open("H:\\新建文件夹\\工作簿1.xlsx")
}
```

  
**四、运算符**

**1\. 算术运算符的差异，如vb中的mod关键字应改为%**

```javascript
Target.Row Mod 2 = 1
```

```javascript
(Target.Row)%2==1
```

**2\. “+”可以用来拼接字符串**

```javascript
AddIns.Add FileName:="C:\Program Files\Microsoft Office" _"\Templates\Letters Faxes\MyFax.dot", Install:=True
```

```javascript
AddIns.Add("C:/Program Files/Microsoft Office" + "/Templates/Letters Faxes/MyFax.dot",true)
```

**3\. 逻辑运算符**

```javascript
1.逻辑与（AND）2.逻辑或（OR） 3.逻辑非（<>）
```

```javascript
逻辑与（&&）2.逻辑或（||） 3.逻辑非（！）
```

注意js和vb判断空的逻辑不一样，vb内部会智能一点，遇到判断空的语句，尽量用"!"

```javascript
if Cells(1,2).value == ""  //空
```

```javascript
if (Cells.Item(1,2).Value2)   //空
```

```javascript
if Cells(1,2).value <> ""  //非空
```

```javascript
if (!Cells.Item(1,2).Value2)  //非空
```

**五、枚举**

vb和js枚举的使用上存在的差异如下，在vb中wdAlignParagraphLeft和WdParagraphAlignment.wdAlignParagraphLeft语法都正确，但在js中只有wdAlignParagraphLeft是正确用法

```javascript
//vb用以上两种方式的枚举都可以正常使用
Application.Selection.ParagraphFormat.Alignment = wdAlignParagraphLeft
Application.Selection.ParagraphFormat.Alignment = WdParagraphAlignment.wdAlignParagraphLeft
```

```javascript
//js只支持这一种
Application.Selection.ParagraphFormat.Alignment = wdAlignParagraphLeft
```

**六、With关键字**

vb有with关键字，js没有该关键字，转换时可以将with后面的对象赋值给一个变量，例子如下

```javascript
With Selection.Range.PageSetup.TextColumns
    .SetCount NumColumns:=2
    .EvenlySpaced = 0
End With
```

```javascript
Var columens = Selection.Range.PageSetup.TextColumns
columens.SetCount(2)
columens.EvenlySpaced = 0
//注意TextColumns后面没有括号因为这是一个属性
```

**七、 条件语句**

VB中的常用条件语句{IF 条件 Then 表达式 Endif}，在JS中应该转换为 if(条件) {表达式}

```javascript
IF Target.Column>6 And Target.Column>37 And Target.Row>6 And Target.Row Mod 2 = 1 And Cells(Target.Row -1, 5).Value <> ""
Then
    With Target.Validation
        .Delete
        .Add
Endif
```

```javascript
if(Target.Column > 6 && Target.Column > 37 && Target.Row > 6 && (Target.Row) % 2 == 1 && Cells.Item(Target.Row -1n, 5).Value2 !== null) {
    var temptarget = Target.Validation
    temptarget.Delete()
    temptarget.Add(xlValidateList,xlValidAlertStop,xlBetween,"=区域城市！$A2:$A30000")
}
```
