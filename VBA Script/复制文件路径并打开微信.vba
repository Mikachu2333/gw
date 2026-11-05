'====================================================================
'                            使用说明:
'制作 VBA 文件时, 请只保留一个Sub 用于执行,  其他过程请用 Function 关键字。
'Sub 过程名推荐用 用户ID_中文名称 的方式命名,避免代码冲突。
'VBA 文件请使用ANSI(简体中文GB2312)编码保存, 微软的VBA解释器不支持UTF-8这类编码,会导致中文乱码。
'不正确的代码可能导致word崩溃、文档丢失或损坏。
'请务必保证vba代码来源安全可靠，插件作者不承担vba文件造成的任何损失！
'分享 VBA 文件时，请尊重作者版权，注明来源以示感谢。
'====================================================================

'  作者: 小恐龙
'  日期: 2024年3月22日

Option Explicit    '强制声明变量是个好习惯, 可以提高代码速度,减少bug


Sub 复制文件路径并打开微信()
    Dim doc As Document
    Dim path As String
    Dim RR
    Dim 微信路径 As String

    Set doc = ActiveDocument

    ' 原先是 If Not doc.Saved Then doc.Save：把用户可能并不想留下的改动直接写进磁盘,
    ' 从没命名过的文档还会弹一个另存为。未保存的文档没有路径可复制, 只提示不代做决定。
    If Not doc.Saved Then
        MsgBox "文档尚未保存, 没有可复制的文件路径。请先保存后再运行。", vbExclamation
        Exit Sub
    End If
    path = doc.FullName

    ' 剪贴板组件(Forms 2.0 数据对象)在新装机器上可能不存在。
    ' 原先整段 On Error Resume Next, 复制失败也照样往下走并报"成功"。
    On Error Resume Next
    Set RR = CreateObject("new:{1C3B4210-F441-11CE-B9EA-00AA006B1A69}")
    If RR Is Nothing Then
        On Error GoTo 0
        MsgBox "本机没有可用的剪贴板组件, 无法自动复制。请手工复制这一行:" & vbCrLf & path, _
            vbExclamation
        Exit Sub
    End If
    RR.SetText path
    RR.PutInClipboard
    On Error GoTo 0

    ' 原先 Shell "D:\Tools\WeChat\WeChat.exe" 是作者自己机器上的路径, 换一台必然失败,
    ' 又被 On Error Resume Next 咽掉, 用户以为微信打开了其实什么都没有。
    微信路径 = 查询微信路径()
    If 微信路径 = "" Then
        MsgBox "路径已复制到剪贴板, 但注册表里找不到微信(WeChat/Weixin), 请手动打开后粘贴。", _
            vbInformation
    Else
        Shell """" & 微信路径 & """"
    End If
End Sub

Function 查询微信路径() As String
    Dim sh, 候选, k, 值

    查询微信路径 = ""
    Set sh = CreateObject("WScript.Shell")
    ' App Paths 是 Windows 登记可执行文件位置的标准位置, 64/32 位视图和新版改名都覆盖
    候选 = Array( _
        "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\Weixin.exe", _
        "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\WeChat.exe", _
        "HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\App Paths\WeChat.exe")
    For Each k In 候选
        值 = ""
        On Error Resume Next
        值 = sh.RegRead(CStr(k))
        On Error GoTo 0
        If 值 <> "" Then
            ' App Paths 的默认值常带引号, Shell 需要干净的路径
            查询微信路径 = Replace(CStr(值), """", "")
            Exit Function
        End If
    Next
End Function
