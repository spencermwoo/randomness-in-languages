#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Range = 10
Trials = 1000000

^y::
Frequency := Object()
Probability := Object()

Loop, %Range%{
	Frequency.InsertAt(A_index, 0.0)
	Probability.InsertAt(A_index, 0.0)
}

Loop, %Trials%{
	Random, rand, 1, RANGE
	Frequency[rand] := Frequency[rand] + 1
}

Output := ""

Loop, %Range%{
	Probability[A_index] := Frequency[A_index] / Trials
	Output .= (A_index - 1) . ":" . Probability[A_index] . "`r"
}

FileName = ahk_%Range%_%Trials%.txt
if (FileName = "")
    Return
file := FileOpen(FileName, "w")
if !IsObject(file)
{
    MsgBox Can't open "%FileName%" for writing.
    Return
}
file.Write(Output)
file.Close()
Return