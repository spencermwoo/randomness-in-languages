Sub GenerateRandomNumbers()
    ' Set the number of random numbers to generate and the upper bound for the numbers
    Dim n As Integer
    n = 10
    Dim x As Integer
    x = 100

    ' Generate N random numbers between 1 and X
    Dim numbers(1 To n) As Integer
    Dim random As New Random
    For i = 1 To n
        numbers(i) = random.Next(1, x + 1)
    Next i

    ' Calculate the probability of each number
    Dim counts(1 To x) As Integer
    For i = 1 To n
        counts(numbers(i)) = counts(numbers(i)) + 1
    Next i
    Dim total As Integer
    total = n
    Dim probabilities(1 To x) As Double
    For i = 1 To x
        probabilities(i) = counts(i) / total
    Next i

    ' Generate a file name based on the values of N and X
    Dim fileName As String
    fileName = "vba_" & n & "_" & x & ".csv"

    ' Create the "outputs" directory if it does not exist
    If Dir("outputs", vbDirectory) = "" Then
        MkDir "outputs"
    End If

    ' Write the probabilities to a file in the "outputs" directory
    Dim file As Integer
    file = FreeFile
    Open "outputs/" & fileName For Output As #file
    For i = 1