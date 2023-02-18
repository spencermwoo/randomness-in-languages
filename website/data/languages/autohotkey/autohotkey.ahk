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
