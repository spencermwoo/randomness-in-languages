; Set the number of random numbers to generate and the upper bound for the numbers
n := 10
x := 100

; Generate N random numbers between 1 and X
numbers := []
Random, number, 1, x, %n%
Loop, %n%
{
    numbers.Push(number%A_Index%)
}

; Calculate the probability of each number
counts := []
total := n
Loop, %x%
{
    counts[A_Index] := 0
}
Loop, %n%
{
    counts[numbers[A_Index]]++
}
probabilities := []
Loop, %x%
{
    probabilities[A_Index] := counts[A_Index] / total
}

; Generate a file name based on the values of N and X
fileName := "ahk_" n "_" x ".csv"

; Create the "outputs" directory if it does not exist
IfNotExist, outputs
{
    FileCreateDir, outputs
}

; Write the probabilities to a file in the "outputs" directory
file := FileOpen("outputs\" fileName, "w")
Loop, %x%
{
    FileWriteLine, %file%, %A_Index%, %probabilities[A_Index]
}
FileClose, %file%
=======
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

FileName = autohotkey_%Range%_%Trials%.txt
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
